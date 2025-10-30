import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ClassDetails from "./pages/ClassDetails";
import About from "./pages/About";
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/class-details" element={<ClassDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
