import React from "react";
import './App.css';
import Upper from './components/upper'
import Interests from "./components/interests"
import About from "./components/about"

function App() {
  return (
    <div className="container">
      <Upper />
      <div className="under">
      <About />
      <Interests />
      </div>
    </div>
  );
}

export default App;
