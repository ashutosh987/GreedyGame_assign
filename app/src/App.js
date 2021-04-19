import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadcompany } from "./actions/company";
import { loadrevenue } from "./actions/revenue";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Button, Col, Container } from "react-bootstrap";
// Redux

import "./App.css";

import List from "./components/List";

const App = ({ loadcompany, loadrevenue, lists, details }) => {
  useEffect(() => {
    loadrevenue();
    loadcompany();
  }, []);

  return (
    <div>
      <List lists={lists} details={details} />
      {/* */}
    </div>
  );
};

App.propTypes = {
  loadcompany: PropTypes.func.isRequired,
  loadrevenue: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  details: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  lists: state.company.lists,
  details: state.revenue.revenue,
});

export default connect(mapStateToProps, { loadcompany, loadrevenue })(App);
