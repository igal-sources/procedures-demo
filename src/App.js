import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";
import Routes from "./components/main-container/appRoutes";
import Header from "./components/main-container/header/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
