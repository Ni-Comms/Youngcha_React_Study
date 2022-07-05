import React from "react";
import {ButtonGroup,Button } from "react-bootstrap";


export default function GridExample() {
  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup>
    </div>
  );
}
