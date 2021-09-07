import React from "react";

const Kid = (props) => {
  const greet = "Bonjour Papa";

  const handleGreet = () => {
    props.greetPapa(greet);
  };

  return (
    <div>
      My kid
      <div>My is = {props.param1}</div>
      <button onClick={handleGreet}>CLick</button>
    </div>
  );
};

export default Kid;
