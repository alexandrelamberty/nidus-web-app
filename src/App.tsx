import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { ExtendedWindow, getConfig } from "./config";
import { Zones } from "./components/Zones";
import { Devices } from "./components/Devices";
import { Capabilities } from "./components/Capabilities";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>API_URL: {getConfig("REACT_APP_API_URL")}</p>
      </header>
      <div>
        <Devices />
        <Capabilities />
        <Zones />
      </div>
    </div>
  );
}

export default App;
