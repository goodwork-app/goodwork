import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',

  initialState: {
    username: '',
    isLoggedIn: true,
  },

  reducers: {
    grabUsername: (state, action) => {
      state.username += action.payload;
    },
    userLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    userLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  }
})

const { actions, reducer } = userSlice;

export const { grabUsername, userLoggedIn, userLoggedOut } = actions;
export const currUser = (state) => state.user.username;
export const isLoggedIn = (state) => state.user.isLoggedIn;

export default reducer;