import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GoogleApiWrapper from "./components/maps"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Cirque Finder</h2>
      </div>
      <GoogleApiWrapper />
    </div>
  );
}


export default App;
