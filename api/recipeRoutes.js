import express from "express";

// Importing functions from recipeController module for each route
import { 
    getRecipes, 
    getRecipeById,
    saveRecipe,
    updateRecipe,
    deleteRecipe
} from "./recipeController.js";
 
// Creating a new Router instance
const router = express.Router();
 
// Assigning the route and function for getting all recipes
router.get('/recipes', getRecipes);
// Assigning the route and function for creating a new recipe
router.post('/recipes', saveRecipe);
// Assigning the route and function for getting a specific recipe by id
router.get('/recipes/:id', getRecipeById);
// Assigning the route and function for updating a specific recipe by id
router.patch('/recipes/:id', updateRecipe);
// Assigning the route and function for deleting a specific recipe by id
router.delete('/recipes/:id', deleteRecipe);
 
export default router;