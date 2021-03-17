import React from "react";
import { Route, Switch } from "react-router-dom";
import ProceduresMain from "../procedures/ProceduresMain"
import NotFoundPage from "./not-found-page/NotFoundPage";

export default () => (
  <Switch>
    <Route exact path="/" component={ProceduresMain} />   
     
    <Route component={NotFoundPage} />
  </Switch>
);