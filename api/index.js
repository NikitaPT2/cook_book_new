import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import recipeRoutes from "./recipeRoutes.js";
 
const app = express();

// Connecting to MongoDB server using Mongoose
mongoose.connect('mongodb://localhost:27017/recipes',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

// Listening to connection error events
db.on('error', (error) => console.log(error));

// Listening to connection open events
db.once('open', () => console.log('Database Connected'));

// Using the CORS middleware to enable cross-origin resource sharing
app.use(cors());
// Using the Express JSON middleware to parse JSON request bodies
app.use(express.json());
// Using the recipe routes defined in recipeRoutes.js
app.use(recipeRoutes);
 
app.listen(3000, ()=> console.log('Server up and running'));