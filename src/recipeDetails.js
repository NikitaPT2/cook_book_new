import { useNavigate, useParams } from "react-router-dom";
import { useAPI } from "./context";
import useFetch from "./fetch";

const RecipeDetails = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { url, setIsPending } = useAPI();
  const { data: recipe, error, isPending } = useFetch(url + id);

  const handleClick = () => {
    setIsPending(true);
    fetch(url + recipe.id, {
      method: "DELETE",
    }).then(() => {
      setIsPending(false);
      nav("/");
    });
  };

  return (
    <div className="recipe-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {recipe && (
        <article>
          <h2>{recipe.title}</h2>
          <p>Takes {recipe.time} minutes to cook</p>
          <p className="ingred">{recipe.listIngredients.join(", ")}</p>
          <div>{recipe.method}</div>
          <button onClick={handleClick}>Ready (delete)</button>
        </article>
      )}
    </div>
  );
};

export default RecipeDetails;
