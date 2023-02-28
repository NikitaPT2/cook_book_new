import mongoose from "mongoose";
 
// Define a new schema for Recipe objects using the Mongoose.Schema() constructor
const Recipe = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    listIngredients:{
        type: Array,
        required: true
    },
    method:{
        type: String,
        required: true
    },
    time:{
        type: Number,
        required: true
    }
});

// Export a new Mongoose model using the "Recipes" collection name and the Recipe schema
export default mongoose.model('Recipes', Recipe);
