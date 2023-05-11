import React from "react";
import ReactDOM from "react-dom/client";

import FamilyApp from "./FamilyApp";
import CounterProvider from "./CounterProvider";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
    <CounterProvider>
        <FamilyApp />
    </CounterProvider>
);