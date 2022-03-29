import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Episodes from './components/Episodes';
import Characters from './components/Characters';
//import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';



function App() {


  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="characters" element={<Characters />} />
      </Routes>
    </Router>
  );
}

export default App;
