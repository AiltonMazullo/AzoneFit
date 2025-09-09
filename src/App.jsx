import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Payment from "./pages/Payment/Payment";
import FormContainer from "./pages/FormContainer/FormContainer";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Payment />} />
          <Route path="/form" element={<FormContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
