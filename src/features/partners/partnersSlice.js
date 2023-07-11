import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageUrl } from '../../utils/mapImageURL';

export const fetchPartners = createAsyncThunk("partners/fetchPartners", 
    async () => {
        const response = await fetch(baseUrl + "partners");
        if (!response.ok) {
            return Promise.reject("Unable to fetch", response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    // we can assume this data will be loaded by json-server, so we cn initialize to empty array
    partnersArray: [],
    isLoading: true,
    errMsg: "",
};


const partnersSlice = createSlice({
    name: 'partners',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPartners.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchPartners.fulfilled, (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
            state.partnersArray = mapImageUrl(action.payload);
        })
        .addCase(fetchPartners.rejected, (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : "Fetch failed";
        })
    }
});

export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
    return state.partners.partnersArray;
};

export const selectFeaturedPartner = (state) => {
    return {
        featuredItem: state.partners.partnersArray.find((partner) => partner.featured),
        isLoading: state.partners.isLoading,
        errMsg: state.partners.errMsg
    }
};