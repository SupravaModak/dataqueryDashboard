import { configureStore } from '@reduxjs/toolkit';
import queryReducer from '../redux/querySlice'; // Ensure correct path

export const store = configureStore({
  reducer: {
    query: queryReducer,
  },
});

export default store;
