import React, { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import JobCard from './jobCard.jsx';
import { setActiveJob, activeJob, jobsList, jobValuesList, jobPrioritiesList } from '../redux/jobSlice';
import NavBar from './nav.jsx';

function Dashboard() {
  let navigate = useNavigate();

  return (
    <Fragment>
      <NavBar />
      <JobCard />
    </Fragment>
  )
}

export default Dashboard;