import { configureStore } from '@reduxjs/toolkit'
import userReducer from './usernameSlice';
import jobsReducer from './jobSlice';
import profileReducer from './profileSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    jobs: jobsReducer,
    profile: profileReducer,
  },
});