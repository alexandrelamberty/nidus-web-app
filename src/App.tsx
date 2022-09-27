import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { ExtendedWindow, getConfig } from "./config";
import { Zones } from "./components/Zones";
import { Devices } from "./components/Devices";
import { Capabilities } from "./components/Capabilities";
import { Outlet, Route, Routes } from "react-router";
import { Dashboard } from "./routes/Dashboard";
import { Temperature } from "./routes/Temperature";
import { Settings } from "./routes/Settings";
import { Link } from "react-router-dom";
import { NoMatch } from "./routes/NoMatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="temperature" element={<Temperature />} />
          <Route path="settings" element={<Settings />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/temperature">Temperature</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default App;
