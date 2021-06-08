import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import AddModal from "./components/modal";
import MapContainer from "./components/newMaps";
import SearchBar from "./components/SearchBar"
import { MarkerProvider } from "./utils/MarkerContext"


function App() {
  return (
    <div className="App">
          <MarkerProvider>

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Finder</h2>
      </div>
      <AddModal />
      <Search />
    <MapContainer />
    </MarkerProvider>

    </div>
  );
}


export default App;
