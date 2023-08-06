import React from "react";
import B from "./B";
import { useStateContext } from "./context";

const A = (props) => {
  const { color } = useStateContext();
  const { name } = props;
  return (
    <div>
      <h1 style={{ color: color }}>A</h1>
      <B />
    </div>
  );
};

export default A;
