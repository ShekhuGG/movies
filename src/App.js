import Navbar from "./components/nav.js"
import './App.css';
import Home from "./components/home.js";
import About from "./components/about.js";
import Bgrnd from "./bgi.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Bgrnd})` }}>
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </header>

    </div >
  );
}

export default App;
