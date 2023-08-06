import React, { useState } from "react";
// import { useStateContext } from "./context";

const C = () => {
  const [color, setColor] = useState("blue");
  return (
    <div>
      <h1 style={{ color: color }}>C</h1>
    </div>
  );
};

export default C;
