import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { COMMENTS } from '../../app/shared/oldData/COMMENTS';
import { baseUrl } from '../../app/shared/baseUrl';

const initialState = {
    commentsArray: [],
    isLoading: true,
    errMsg: ""
};

export const fetchComments = createAsyncThunk("comments/fetchComments", async () => {
    const response = await fetch(baseUrl + "comments");
    if (!response.ok) {
        return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
});

export const postComment = createAsyncThunk("comments/postComment", 
    async (comment, { dispatch }) => {
        const response = await fetch(baseUrl + "comments", {
            method: "POST",
            body: JSON.stringify(comment),
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) {
            return Promise.reject(response.status);
        }
        const data = await response.json();
        dispatch(addComment(data));
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            };
            state.commentsArray.push(newComment);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchComments.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
            state.commentsArray = action.payload;
        })
        .addCase(fetchComments.rejected, (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : "Fetch failed";
        })
        .addCase(postComment.rejected, (state, action) => {
            alert("Your comment could not be posted\nError: " + 
            (action.error ? action.error.message : "Fetch failed"));
        })
    }
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};