import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
}

const userSlice = createSlice({ 
    name: "user", 
    initialState, 
    setCurrentUser: (state, action) => {
        return { ...state, currentUser: action.payload }
    }
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = (state) => {
    //we get state."user" from the userSlice, where it gets set as the name for the name, value pair
    return state.user.currentUser;
}