import React from "react";
import './App.css';
import KaleChips from "./KaleChips/KaleChips";
import Soda from "./Soda/Soda";
import Sushi from "./Sushi/Sushi"
import NavBar from "./NavBar/NavBar"
import Home from "./Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/kale-chips" element={<KaleChips />} />
            <Route path="/soda" element={<Soda />} />
            <Route path="/sushi" element={<Sushi />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
