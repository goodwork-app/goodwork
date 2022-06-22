import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Dashboard from "./components/dashboard.jsx";
import Profile from "./components/profile.jsx";
import LoginModule from './components/login.jsx';
import { useSelector } from 'react-redux';
import { isLoggedIn } from './redux/usernameSlice';

function App() {
  const userLoggedIn = useSelector(isLoggedIn);
  console.log(userLoggedIn);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginModule />}/>
      {userLoggedIn && (
        <Route path="dashboard" element={<Dashboard />}></Route>
      )}
      {userLoggedIn && (
        <Route path="profile" element={<Profile />}></Route>
      )}
    </Routes>
  </BrowserRouter>
  );
};

export default App;
