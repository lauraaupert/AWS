import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddModal from "./components/AddModal";
import MapContainer from "./components/MapContainer";
import { MarkerProvider } from "./utils/MarkerContext"
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
          <MarkerProvider>

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Finder</h2>
      </div>
      <Header>
            <AddModal />
            </Header>
    <MapContainer />
    </MarkerProvider>

    </div>
  );
}


export default App;
