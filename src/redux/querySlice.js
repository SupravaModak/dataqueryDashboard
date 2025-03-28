import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: null,  // Ensure this is null initially
  error: null,
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setResults, setError } = querySlice.actions;
export default querySlice.reducer;
