// The useEffect Hook allows you to perform side effects in your components.

// Some examples of side effects are: fetching data, directly updating the DOM, and timers.

// useEffect accepts two arguments. The second argument is optional.

// useEffect(<function>, <dependency>)

import React, { useEffect, useState } from "react";

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [newName, setNewName] = useState("");

  const fetchData = () => {
    setData(mockData);
  };

  const handleAddData = () => {
    if (newName.trim() !== "") {
      const newId = data.length + 1;
      const newItem = { id: newId, name: newName };
      mockData.push(newItem);
      setNewName("");
    }
  };
  useEffect(() => {
    fetchData(); //mounting
    return () => {
      //unmounte
      setNewName("");
    };
  }, []); //update

  return (
    <div>
      <h2>Mock Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
        />
        <button onClick={handleAddData}>Add Data</button>
      </div>
    </div>
  );
};

const mockData = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
];

export default DataFetchingComponent;
