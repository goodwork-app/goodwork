import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Dashboard from "./components/dashboard.jsx";
import Profile from "./components/profile.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginModule from './components/login.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginModule />}></Route>
      <Route path="dashboard" element={<Dashboard/>}></Route>
      <Route path="profile" element={<Profile/>}></Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
