import React from "react";
import * as ReactDOM from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AddJob from "./routes/addjob.jsx";
import AddPriorities from "./routes/addpriorities.jsx";
import AddValues from "./routes/addvalues.jsx";
import Dashboard from "./routes/dashboard.jsx";
import Job from "./routes/job.jsx";
import Priorities from "./routes/priorities.jsx";
import Profile from "./routes/profile.jsx";
import Values from "./routes/values.jsx"
import { createRoot } from 'react-dom/client';
import "./styles.css";
import "./styles.scss";

// var mountNode = document.getElementById("app");
// const root = createRoot(mountNode);
// root.render(<App name='goodwork' />);
const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App name="goodwork"/>}/>
      <Route path="addjob" element={<AddJob/>}/>
      <Route path="addpriorities" element={<AddPriorities/>}/>
      <Route path="addvalues" element={<AddValues/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="job" element={<Job/>}/>
      <Route path="priorities" element={<Priorities/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="values" element={<Values/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);