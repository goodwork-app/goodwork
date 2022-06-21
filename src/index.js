import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';
import "./styles.css";
import "./styles.scss";


var mountNode = document.getElementById("app");
const root = createRoot(mountNode);
root.render(<App name='James Widewards' />);