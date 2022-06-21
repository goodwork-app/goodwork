import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import AddJob from "./routes/addjob.jsx";
import AddPriorities from "./routes/addpriorities.jsx";
import AddValues from "./routes/addvalues.jsx";
import Dashboard from "./routes/dashboard.jsx";
import Job from "./routes/job.jsx";
import Priorities from "./routes/priorities.jsx";
import Profile from "./routes/profile.jsx";
import Values from "./routes/values.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginModule from './components/login.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginModule />}/>
      <Route path="addjob" element={<AddJob/>}/>
      <Route path="addpriorities" element={<AddPriorities/>}/>
      <Route path="addvalues" element={<AddValues/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="job" element={<Job/>}/>
      <Route path="priorities" element={<Priorities/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="values" element={<Values/>}/>
    </Routes>
  </BrowserRouter>
  );
};


export default App;
