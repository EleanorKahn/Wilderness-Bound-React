import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    campsitesArray: CAMPSITES,
};

//createSlice will return an object, stored as campsitesSlice object
//campsitesSlice object has reducer method
const campsitesSlice = createSlice({
    name: "campsites",
    initialState,
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find(campsite => campsite.id === parseInt(id));
}

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find(campsite => campsite.featured);
}