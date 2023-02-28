import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import useFetch from "./fetch";
// import { useAPI } from "./context";

const RecipeDetails = () => {

  const [recipe, setRecipe] = useState([])
  const [listIng, setListIng] = useState([])

  const nav = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRecipe = async () => {
      const response = await axios.get(`http://localhost:3000/recipes/${id}`);
      setRecipe(response.data)
      setListIng(response.data.listIngredients)
    };

  const handleClick = async () => {
      try {
          await axios.delete(`http://localhost:3000/recipes/${id}`);
          nav("/")
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className="recipe-details">
        <article>
          <h2>{recipe.title}</h2>
          <p>Takes {recipe.time} minutes to cook</p>
          <p className="ingred">{listIng.join(", ")}</p>
          <div>{recipe.method}</div>
          <button onClick={handleClick}>Ready (delete)</button>
        </article>
    </div>
  );
};

export default RecipeDetails;
