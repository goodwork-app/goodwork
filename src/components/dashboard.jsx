import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import JobCard from './jobCard.jsx';
import NavBar from './nav.jsx';
import DetailedView from './detailedView.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveJob, activeJob, jobsList, jobValuesList, jobPrioritiesList } from '../redux/jobSlice';

function Dashboard() {
  const navigate = useNavigate();
  const jobSelector = useSelector(jobsList);
  const activeJobSelector = useSelector(activeJob);
  const dispatch = useDispatch();

  const showDetails = (companyName) => {
    dispatch(setActiveJob(companyName));
    console.log('in show details func');
  };

  const job1 = {
    company: 'Google',
    title: 'SWE',
    status: 'Offer accepted'
  };

  const job2 = {
    company: 'Microsoft',
    title: 'Product Manager',
    status: 'Onsite Interview'
  };

  const job3 = {
    company: 'Netflix',
    title: 'SWE IV',
    status: 'Rejected'
  };

  const job4 = {
    company: 'Amazon',
    title: 'Janitor',
    status: 'Applied'
  }

  /* Create JobCard components */
  const JobCards = jobSelector.map(job => {
    <JobCard company={job.company} title={job.title} status={job.status} showDetails={showDetails} />
  });

  return (
    <Fragment>
      <NavBar />
      {activeJobSelector !== null && (<DetailedView />)}
      <div className='row mt-5 mb-5 justify-content-center'>
        <JobCard company={job1.company} title={job1.title} status={job1.status} showDetails={showDetails} />
        <JobCard company={job2.company} title={job2.title} status={job2.status} showDetails={showDetails} />
        <JobCard company={job3.company} title={job3.title} status={job3.status} showDetails={showDetails} />
        <JobCard company={job4.company} title={job4.title} status={job4.status} showDetails={showDetails} />
      </div>
    </Fragment>
  )
}

export default Dashboard;