import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Create an async thunk function to fetch recipes data from the server
export const getRecipes = createAsyncThunk("recipes/getRecipes", async () => {
    return fetch ("http://localhost:3000/recipes/").then((res) =>
        res.json()
    )
})

// Create a recipe slice with initial state and extra reducers
const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        loading: false,
    },
    extraReducers: (builder) => {
        
        builder
            // Set loading state to true when the async thunk is pending
            .addCase(getRecipes.pending, (state, action) => {
                state.loading = true
            })
            // Set loading state to false and update the recipe state with the fetched data when the async thunk is fulfilled
            .addCase(getRecipes.fulfilled, (state, action) => {
                state.loading = false
                state.recipes = action.payload
            })
            // Set loading state to false when the async thunk is rejected
            .addCase(getRecipes.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export default recipeSlice.reducer