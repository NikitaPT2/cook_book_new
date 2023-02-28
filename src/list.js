import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useAPI } from "./context";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await axios.get("http://localhost:3000/recipes");
    setRecipes(response.data);
  };

  const { loading } = useSelector((state) => state.recipe);
  const query = useSelector((state) => state.recipeFilter.query);

  if (loading) {
    return <h2>Loading...</h2>;
  }

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
