import React from "react";
import './App.css';
import Login from './Login';

function App() {
  return (
    // BEM
    <div className="App">
      <h1>Spotify Clone</h1>

      {/* Spotify Logo */}
      {/* Login with spotify button */}
      <Login />
    </div> 
  );
}

export default App;
