import React from "react";
import "./App.css";
import Home from "./assets/pages/HOMEPAGE/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlusAccountPage from "./assets/pages/Lintense+/PlusAccountPage";
import Register from "./assets/pages/Registeration/Register";
import UpButton from "./assets/Components/Buttons/UpBttn/UpButton";
import Profile from "./assets/pages/Profile/Profile";
import AdminRegister from "./assets/pages/Admin/AdminRegister";
import Admin from "./assets/pages/Admin/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plus-account" element={<PlusAccountPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminRegister />} />
        <Route path="/admin-dashboard" element={<Admin/>} />
        
      </Routes>
      <UpButton />
    </BrowserRouter>
  );
};

export default App;
