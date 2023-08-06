import React, { useState, useEffect } from "react";

const TimerExample = () => {
  const [seconds, setSeconds] = useState(0);

  // Function to increment the timer by 1 second
  const incrementTimer = () => {
    setSeconds(seconds + 1);
  };

  // Set up the timer using useEffect
  useEffect(() => {
    const timerId = setInterval(incrementTimer, 100); // 1000 milliseconds = 1 second

    // Clear the timer when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
};

export default TimerExample;
