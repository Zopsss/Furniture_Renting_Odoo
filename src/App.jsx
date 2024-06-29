import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import ShoppingCart from "./pages/ShoppingCart";
import Admin_Dashboard from "./pages/Admin_Dashboard";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Item_detail from "./pages/Item_detail";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Admin_Dashboard" element={<Admin_Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/item_detail" element={<Item_detail />} />
      </Routes>
    </>
  );
}

export default App;
