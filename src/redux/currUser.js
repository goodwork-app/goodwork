import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    grabUsername: (state, action) => {
      state.username += action.payload;
    },
  }
})

export const { grabUsername } = loginSlice.actions;
export const currUser = (state) => state.username;
export default loginSlice.reducer;