import React, { Fragment, useEffect } from "react";
import Details from "./Details";
import { Row, Button, Col, Container, Image } from "react-bootstrap";
import pic from "../../src/spinner.gif";

const List = ({ lists, details }) => {
  if (lists == null || details == null || lists == undefined) {
    return (
      <div>
        <Image src={pic} />{" "}
      </div>
    );
  }

  return (
    <div>
      {lists !== null &&
        lists.map((list) => <Details company={list} details={details} />)}
    </div>
  );
};

export default List;
