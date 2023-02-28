import Recipe from "./recipeModel.js";

// Get all recipes
export const getRecipes = async (req, res) => {
    try {
        // Find all recipes in the database
        const recipes = await Recipe.find();
        // Send the recipes as a response in JSON format
        res.json(recipes);
    } catch (error) {
        // Handle any errors and return an appropriate response
        res.status(500).json({message: error.message});
    }
}

// Get a recipe by ID
export const getRecipeById = async (req, res) => {
    try {
        // Find the recipe with the given ID in the database
        const recipe = await Recipe.findById(req.params.id);
        // Send the recipe as a response in JSON format
        res.json(recipe);
    } catch (error) {
        // Handle any errors and return an appropriate response
        res.status(404).json({message: error.message});
    }
}

// Save a new recipe
export const saveRecipe = async (req, res) => {
    // Create a new Recipe instance using the request body
    const recipe = new Recipe(req.body);
    try {
        // Save the new recipe to the database
        const insertedRecipe = await recipe.save();
        // Send the inserted recipe as a response in JSON format
        res.status(201).json(insertedRecipe);
    } catch (error) {
        // Handle any errors and return an appropriate response
        res.status(400).json({message: error.message});
    }
}

// Update an existing recipe
export const updateRecipe = async (req, res) => {
    try {
        // Update the recipe with the given ID with the request body
        const updatedRecipe = await Recipe.updateOne({_id:req.params.id}, {$set: req.body});
        // Send the updated recipe as a response in JSON format
        res.status(200).json(updatedRecipe);
    } catch (error) {
        // Handle any errors and return an appropriate response
        res.status(400).json({message: error.message});
    }
}

// Delete a recipe
export const deleteRecipe = async (req, res) => {
    try {
        // Delete the recipe with the given ID from the database
        const deletedRecipe = await Recipe.deleteOne({_id:req.params.id});
        // Send the result of the deletion operation as a response in JSON format
        res.status(200).json(deletedRecipe);
    } catch (error) {
        // Handle any errors and return an appropriate response
        res.status(400).json({message: error.message});
    }
}
