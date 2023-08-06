import React from "react";
import C from "./C";
import { useStateContext } from "./context";

const B = () => {
  const { setColor } = useStateContext();
  return (
    <>
      <h1>B</h1>
      <button type="button" onClick={() => setColor("red")}>
        change color
      </button>
      <C />
    </>
  );
};

export default B;
