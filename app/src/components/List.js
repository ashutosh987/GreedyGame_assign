import React, { Fragment, useEffect } from "react";
import Details from "./Details";
import { Row, Button, Col, Container } from "react-bootstrap";

const List = ({ lists, details }) => {
  if (lists == null || details == null || lists == undefined) {
    return <div>loading</div>;
  }

  return (
    <div>
      {lists !== null &&
        lists.map((list) => <Details company={list} details={details} />)}
    </div>
  );
};

export default List;
