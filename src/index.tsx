import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Calculator_ from "./calculator/Calculator";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>

    <BrowserRouter basename="/calculator">
      <Routes>
        <Route path="/" element={<Calculator_ />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
