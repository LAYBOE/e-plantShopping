// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import plantShoppingReducer from './plantShoppingSlice';


export const store = configureStore({
  reducer: {
    plant: plantShoppingReducer,
  },
});
