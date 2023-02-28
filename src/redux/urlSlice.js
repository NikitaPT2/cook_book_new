import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: 'http://localhost:3000/recipes/',
}

// Use the createSlice function to create a new slice of the Redux store, named urlSlice
export const urlSlice = createSlice({
    name: 'url',
    initialState,
})


export default urlSlice.reducer