import React from "react";
import Scale from "./Scale";
import Keyframes from "./Keyframes";
export default function Example() {
  return (
    <>
      <div style={{ position: "absolute", top: 300, left: 300 }}>
        <Scale />
      </div>
      <br />
      <div style={{ position: "absolute", top: 500, left: 500 }}>
        <Keyframes />
      </div>
    </>
  );
}
