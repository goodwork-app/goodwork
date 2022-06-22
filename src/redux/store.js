import { configureStore } from '@reduxjs/toolkit'
import userReducer from './usernameSlice';
import jobsReducer from './jobSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    jobs: jobsReducer,
  },
});