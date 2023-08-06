import { useState } from "react";

const ChildComponent = ({ callback }) => {
  const [data, setData] = useState("");

  const handleClick = () => {
    setData("Hello from Child!"); // data = "Hello from Child!"
    callback(data);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default ChildComponent;
