import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    blogs: [],
    likes: "",
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    blogSuccess: (state, { payload }) => {
      state.loading = false;
      state.blogs = payload;
    },
    postLike:(state, {payload})=>{
      state.loading = false;
      state.likes = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  blogSuccess,
  fetchFail,
  postLike,
} = blogSlice.actions;
export default blogSlice.reducer;