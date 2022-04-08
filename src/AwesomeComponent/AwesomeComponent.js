import React from "react";

function Timestamp() {
  return <p>{new Date().toISOString()}</p>;
}

function MockedTimestamp() {
  return (
    <p dataset-testid="mockedDataComponent">
      {new Date().toLocaleDateString()}
    </p>
  );
}

export function AwesomeComponent() {
  return (
    <div>
      <h2>I am awesome</h2>
      <Timestamp />
    </div>
  );
}
