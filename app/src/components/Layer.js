import React, { Fragment, useEffect } from "react";
import Details from "./Details";
import pic1 from "../icon1.svg";
import pic2 from "../icon2.svg";
import pic3 from "../icon3.svg";
import pic4 from "../icon4.svg";
import pic from "../asset1.svg";
import { Row, Button, Col, Container, Image } from "react-bootstrap";

const Layer = () => {
  return (
    <div className="layer">
      <div className="title1">
        <b>
          A {}D{} S{} O{} U {} L
        </b>
      </div>

      <Container className="center">
        <Image src={pic} />
      </Container>
    </div>
  );
};

export default Layer;
