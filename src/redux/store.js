import { configureStore } from "@reduxjs/toolkit";
import queryReducer from './querySlice.js'
import recipeReducer from './recipeSlice.js'
import pendingReducer from './pendingSlice.js'
import urlReducer from './urlSlice'


// Creating a store using the 'configureStore' function, passing in an object with reducer functions as its argument
export const store = configureStore({
    reducer: {
        recipeFilter: queryReducer,
        recipe: recipeReducer,
        pending: pendingReducer,
        url: urlReducer,
    },
})