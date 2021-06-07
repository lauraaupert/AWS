import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import AddModal from "./components/modal";
import MapContainer from "./components/newMaps";


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Cirque Finder</h2>
      </div>
      <AddModal />
      <Search />
    <MapContainer />
    </div>
  );
}


export default App;
