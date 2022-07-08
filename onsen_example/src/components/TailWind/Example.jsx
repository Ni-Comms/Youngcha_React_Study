import React from "react";

export default function Example() {
  return (
    <>
      <div style={{ height: 300 }}>
        <div style={{ height: "inherit" }}>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
        <div className="bg-purple-600 bg-opacity-10" style={{ height: "inherit" }}>
          A
        </div>
        <div className="bg-purple-600 bg-opacity-75" style={{ height: "inherit" }}>
          B
        </div>
        <div className="bg-purple-600 bg-opacity-50" style={{ height: "inherit" }}>
          C
        </div>
        <div className="bg-purple-600 bg-opacity-25" style={{ height: "inherit" }}>
          D
        </div>
        <div className="bg-purple-600 bg-opacity-10" style={{ height: "inherit" }}>
          E
        </div>
      </div>
    </>
  );
}
