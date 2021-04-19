import React, { Fragment, useEffect, useState } from "react";
import { Row, Button, Col, Container } from "react-bootstrap";
const Details = ({ company, details }) => {
  Array.prototype.sum = function (prop) {
    var total = 0;
    for (var i = 0, _len = this.length; i < _len; i++) {
      total += this[i][prop];
    }
    return total;
  };

  return (
    <div>
      <div>
        <div className="card1 ">
          <div className="side-img"></div>

          <h3>
            <b>{company.appName}</b>
          </h3>
          <div className="m-5"></div>
          <Container>
            <Row>
              <Col>
                <div> Total Cost</div>
                <div>
                  {}
                  <b>${details[company.id].sum("revenue")}</b>
                </div>
              </Col>
              <Col>
                <div> Ad Request</div>
                <div>
                  {" "}
                  <b>{details[company.id].sum("adRequest")}</b>
                </div>
              </Col>
              <Col>
                <div> Ad Response</div>
                <div>
                  {" "}
                  <b>{details[company.id].sum("adResponse")}</b>
                </div>
              </Col>
              <Col>
                <div> Impression</div>

                <div>
                  {" "}
                  <b>{details[company.id].sum("impressions")}</b>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Details;
