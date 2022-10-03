import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Field from "./field";
import App from "../App";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/exam" element={<Field />} />
      </Routes>
    </Router>
  );
}
