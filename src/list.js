import { Link } from "react-router-dom";
import { useAPI } from "./context";

const RecipeList = () => {
  // Use the useAPI hook to access the recipes and query state.
  const { recipes, query } = useAPI();
  // Render a list of recipes based on the current `query` state.
  return (
    <div className="recipe-list">
      <div className="recInc">
        {query !== "" && <h3>Recipes including "{query}"</h3>}
      </div>
      {recipes
        .filter((recipe) => {
          // Check if the query is empty or if the recipe title contains the query.
          return (
            query === "" ||
            recipe.title.toLowerCase().includes(query.toLowerCase())
          );
        })
        .map((recipe) => {
          return (
            <div className="preview" key={recipe.id}>
              {/* Display the recipe title */}
              <h2>{recipe.title}</h2>
              {/* Display the cooking time */}
              <article>{recipe.time} minutes to make.</article>
              {/* Display the recipe method */}
              <footer>{recipe.method}</footer>
              {/* Create a link to the recipe details page */}
              <Link to={`/recipes/${recipe.id}`}>
                <button>Cook this</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default RecipeList;
