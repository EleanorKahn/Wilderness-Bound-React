//import { CAMPSITES } from "../../app/shared/oldData/CAMPSITES";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageUrl } from "../../utils/mapImageURL";

const initialState = {
    //we will assume that this data will be loaded from json-server, so the initial state should be set to an empty array
    campsitesArray: [],
    isLoading: true,
    errMsg: "",
};


export const fetchCampsites = createAsyncThunk("campsites/fetchCampsites", 
    async () => {
        const response = await fetch(baseUrl + "campsites");
        //.ok property is based on http status code
        if (!response.ok) {
            return Promise.reject("Unable to fetch, status: " + response.status);
        }
        const data = await response.json();
        return data;
    }
);

//createSlice will return an object, stored as campsitesSlice object
//campsitesSlice object has reducer method
const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
            state.campsitesArray = mapImageUrl(action.payload);
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : "Fetch failed";
        }
    }
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};