import React from "react";
import { ButtonGroup, Button, Spinner } from "react-bootstrap";

export default function ButtonExample() {
  return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="sm">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>

      <Button size="lg">1</Button>
      <Button>2</Button>
      <ButtonGroup className="mb-1">
        <Button>3</Button>
      </ButtonGroup>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
}
