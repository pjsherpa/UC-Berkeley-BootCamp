import React, { useState } from "react";
import CardBody from "./CardBody";

// TODO: Add a comment explaining what export default does
//Enablees us to import into App without braces.
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  //UseStates returns a default state value as an argument and returns an array containing the value and the function to change state.
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  //It is changing the state by calling setCount with a new value.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // TODO: Explain what is happening with this click handler
  //It is changing the state by subtracting with a new value.
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {//The event handler funtions are passed to the card body coponente
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
