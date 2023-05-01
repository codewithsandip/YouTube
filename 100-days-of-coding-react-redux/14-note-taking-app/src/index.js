import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

import './index.css';
import './utils.css';

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App />);