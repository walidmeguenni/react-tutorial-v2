import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [name, setName] = useState("");

  const callback = useCallback((data) => {
    setName(data); // name =data ="Hello from Child!"
  }, []);

  return (
    <div>
      <ChildComponent callback={callback} />
      <h1>Name: {name}</h1>
    </div>
  );
};

export default ParentComponent;
