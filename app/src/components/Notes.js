import React, { Fragment, useEffect } from "react";
import { loadcompany } from "../actions/company";
import { loadrevenue } from "../actions/revenue";
import { Row, Button, Col, Container, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import pic from "../../src/spinner.gif";
import { connect } from "react-redux";
import moment from "moment";

const Notes = ({ details, lists, loadrevenue, loadcompany, match }) => {
  useEffect(() => {
    loadrevenue();
    loadcompany();
  }, [loadrevenue, loadcompany]);

  if (details == null || lists == null || lists[match.params.id] == undefined) {
    return (
      <div>
        <Image sty={{ float: "center" }} src={pic} />{" "}
      </div>
    );
  }

  return (
    <div>
      <div className="layer">
        <div className="title2">
          <b>
            A {}D{} S{} O{} U {} L
          </b>
        </div>
      </div>
      <span className="arrow">
        <a href="/" id="dec">
          &#8617;{" "}
        </a>
      </span>
      <Container className="margintop">
        <div className="side-img1 "> </div>

        <h2>{lists[match.params.id].appName}</h2>
      </Container>
      <Container>
        <Row>
          <Col>Date </Col>
          <Col>Clicks</Col>
          <Col>Revenue</Col>
          <Col>AdRequest</Col>
          <Col>AdResponse</Col>
          <Col>Impressions</Col>
          <Col>Render Rate</Col>
        </Row>

        <hr></hr>
        {details[match.params.id] !== null &&
          details[match.params.id].map((list) => (
            <div>
              <Row>
                <Col>
                  {moment(list.date, "DD-MM-YYYY").format("DD-MMM-YYYY")}{" "}
                </Col>
                <Col>{list.clicks}</Col>
                <Col>${list.revenue}</Col>
                <Col>{list.adRequest}</Col>
                <Col>{list.adResponse}</Col>
                <Col>{list.impressions}</Col>
                <Col>
                  {Math.floor((list.impressions / list.adResponse) * 100)}
                </Col>
              </Row>
              <hr></hr>
            </div>
          ))}
      </Container>
    </div>
  );
};

Notes.propTypes = {
  loadrevenue: PropTypes.func.isRequired,
  loadcompany: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  details: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  details: state.revenue.revenue,
  lists: state.company.lists,
});

export default connect(mapStateToProps, { loadrevenue, loadcompany })(Notes);
