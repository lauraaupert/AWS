import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GoogleApiWrapper from "./components/maps"
import Search from "./components/Search";
import AddModal from "./components/modal";
import GetLocations from "./components/locations";


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Cirque Finder</h2>
      </div>
      <AddModal />
      <Search />
      <GetLocations />

      <GoogleApiWrapper />
    </div>
  );
}


export default App;
