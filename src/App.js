import React from "react";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from "semantic-ui-react";
import Routes from "./components/main-container/appRoutes";
import Header from "./components/main-container/header/Header";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App-main">
        <div className="App-header">
          <Header />
        </div>
        <Grid>
          <Grid.Column className="App-content">
            <Routes />
          </Grid.Column>
        </Grid>
      </div>
    </BrowserRouter>
  );
}

export default App;
