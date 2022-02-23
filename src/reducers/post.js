import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  getAllPosts: {
    loading: false,
    data: [],
    error: null,
  },
};

const postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    fetchPost(state, action) {
      return {
        ...state,
        getAllPosts: {
          ...state.getAllPosts,
          loading: true,
        },
      };
    },
    fetchPostSuccess(state, action) {
      return {
        ...state,
        getAllPosts: {
          ...state.getAllPosts,
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    },
    fetchPostError(state, action) {
      return {
        ...state,
        getAllPosts: {
          ...state.getAllPosts,
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    },
  },
});

export const { fetchPost, fetchPostSuccess, fetchPostError } =
  postSlice.actions;

export default postSlice.reducer;
