import React, { Fragment, useEffect } from "react";
import { loadcompany } from "../actions/company";
import { loadrevenue } from "../actions/revenue";
import { Row, Button, Col, Container } from "react-bootstrap";
import PropTypes from "prop-types";

import { connect } from "react-redux";

const Notes = ({ details, loadrevenue, match }) => {
  useEffect(() => {
    loadrevenue();
  }, [loadrevenue]);

  if (details == null) {
    return <div>loading</div>;
  }

  return (
    <div>
      <Row>
        <Col>Date </Col>
        <Col>Clicks</Col>
        <Col>Revenue</Col>
        <Col>AdRequest</Col>
        <Col>AdResponse</Col>
        <Col>Impressions</Col>
        <Col>Render Rate</Col>
      </Row>
      {details[match.params.id] !== null &&
        details[match.params.id].map((list) => (
          <Row>
            <Col>{list.date} </Col>
            <Col>{list.clicks}</Col>
            <Col>{list.revenue}</Col>
            <Col>{list.adRequest}</Col>
            <Col>{list.adResponse}</Col>
            <Col>{list.impressions}</Col>
            <Col>{Math.floor((list.impressions / list.adResponse) * 100)}</Col>
          </Row>
        ))}
    </div>
  );
};

Notes.propTypes = {
  loadrevenue: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  details: state.revenue.revenue,
});

export default connect(mapStateToProps, { loadrevenue })(Notes);
