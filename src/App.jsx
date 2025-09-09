import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Payment from "./pages/Payment/Payment";
import FormContainer from "./pages/FormContainer/FormContainer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Payment />} />
            <Route path="/form" element={<FormContainer />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
