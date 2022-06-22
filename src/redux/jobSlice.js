import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
  name: 'jobs',

  initialState: {
    activeJob: null,
    jobsList: [],
    jobValuesList: [],
    jobPrioritiesList: [],
  },
  
  reducers: {
    setActiveJob: (state, action) => {
      state.activeJob = action.payload;
    },
    populateJobsList: (state, action) => {
      state.jobsList = action.payload;
    },
    populateValuesList: (state, action) => {
      state.jobValuesList = action.payload;
    },
    populatePrioritesList: (state, action) => {
      state.jobPrioritiesList = action.payload;
    }
  }
})

const { actions, reducer } = jobSlice;

export const { 
              setActiveJob,
              populateJobsList,
              populatePrioritesList,
              populateValuesList } = actions;

export const activeJob = (state) => state.jobs.activeJob;
export const jobsList = (state) => state.jobs.jobsList;
export const jobValuesList = (state) => state.jobs.jobValuesList;
export const jobPrioritiesList = (state) => state.jobs.jobPrioritiesList;

export default reducer;