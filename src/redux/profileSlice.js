import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',

  initialState: {
    valuesList: [],
    prioritiesList: [],
  },
  
  reducers: {
    grabValue: (state, action) => {
      state.inputValue += action.payload;
    },
    populateValuesList: (state, action) => {
      state.valuesList = action.payload;
    },
    populatePrioritesList: (state, action) => {
      state.prioritiesList = action.payload;
    }
  }
})

const { actions, reducer } = profileSlice;

export const { grabValue, populateValuesList, populatePrioritesList } = actions;

export const jobValuesList = (state) => state.profile.valuesList;
export const jobPrioritiesList = (state) => state.profile.prioritiesList;

export default reducer;