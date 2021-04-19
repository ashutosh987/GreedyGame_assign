import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import App from "./App";
import Notes from "./components/Notes";

const Main = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/details/:id" component={Notes} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default Main;
