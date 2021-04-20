import React, { Fragment, useEffect } from "react";
import Details from "./Details";
import pic1 from "../icon1.svg";
import pic2 from "../icon2.svg";
import pic3 from "../icon3.svg";
import pic4 from "../icon4.svg";
import pic from "../asset1.svg";
import { Row, Button, Col, Container, Image } from "react-bootstrap";

const BottomLayer = () => {
  return (
    <div className="fontcolor layer1">
      <div className="title1 ">
        <h2>
          {" "}
          <b>Revenue Optimization</b>
        </h2>
      </div>
      <Row>
        <Col>
          <div className="m-5">
            {" "}
            <Image src={pic1} />
            <div className="m-2 ">Fill Rate</div>
          </div>
          <div className="m-5">
            <Image src={pic2} />
            <div className="m-2">Improve CTR</div>
          </div>
        </Col>

        <Col>
          <div className="m-5">
            {" "}
            <Image src={pic3} />
            <div className="m-2">Refresh Rate</div>
          </div>
          <div className="m-5">
            {" "}
            <Image src={pic4} />
            <div className="m-2">Quick Integration</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BottomLayer;
