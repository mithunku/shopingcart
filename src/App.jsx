import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheet.css";
import "./Components/stylesheet2.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
