import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Accueil from "./components/Accueil";

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <h1>PROFILER</h1>
        <span>Les clés pour débuter dans la bourse en toute sérénité</span>
      </div>
      <div className="main-container">
        <Accueil />
      </div>
    </div>
  )
}

export default App;
