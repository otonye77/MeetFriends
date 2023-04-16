import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./authPages/registerPage/registerPage";
import LoginPage from "./authPages/loginPage/loginPage";
import DashBoardPage from "./dashboard/dashboard";
import "./App.css";

function App() {
  return <div className="App">
    <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/" element={<DashBoardPage />} />
      </Routes>
  </div>;
}

export default App;
