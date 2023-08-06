import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import ContactInfo from "./pages/ContactInfo";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
