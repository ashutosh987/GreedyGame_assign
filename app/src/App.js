import React, { Fragment, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadcompany } from "./actions/company";
import { loadrevenue } from "./actions/revenue";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Button, Col, Container } from "react-bootstrap";
// Redux

import "./App.css";

import List from "./components/List";
import Layer from "./components/Layer";
import BottomLayer from "./components/BottomLayer";

const App = ({ loadcompany, loadrevenue, lists, details }) => {
  useEffect(() => {
    loadrevenue();
    loadcompany();
  }, []);

  return (
    <div>
      <Row>
        <Col className="layer">
          <Layer />
          <div className="layer1">
            {" "}
            <BottomLayer />
          </div>
        </Col>
        <Col>
          <h1>App</h1>
          <div className="ScrollDiv">
            <List lists={lists} details={details} />
          </div>
        </Col>
      </Row>
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
