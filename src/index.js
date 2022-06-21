import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';
import "./styles.css";
import "./styles.scss";
import { store } from './redux/store';
import { Provider } from 'react-redux';


const mountNode = document.getElementById("app");
const root = createRoot(mountNode);
root.render(
  <Provider store={store}>
    <App />
  </Provider>  
);