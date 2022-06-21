import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './currUser';

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});