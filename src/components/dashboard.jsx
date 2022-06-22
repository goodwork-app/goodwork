import React, { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import JobCard from './jobCard.jsx';
import { setActiveJob, activeJob, jobsList, jobValuesList, jobPrioritiesList } from '../redux/jobSlice';

function Dashboard() {
  let navigate = useNavigate();

  return (
    <Fragment>
      <h1>Dashboard</h1>
      <JobCard />
    </Fragment>
  )
}

export default Dashboard;