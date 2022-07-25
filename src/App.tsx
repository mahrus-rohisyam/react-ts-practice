import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Calculator, Contact, Home, Todos } from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  );
};

export default App;
