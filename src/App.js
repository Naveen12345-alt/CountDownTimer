import React, { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const handleReset = () => {
    clearInterval(timerId);
    setTimerId(null);
    setTime(0);
  };
  const handleStartnPause = () => {
    if (!timerId) {
      const timerIdVal = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setTimerId(timerIdVal);
    } else {
      clearInterval(timerId);
      setTimerId(null);
    }
  };
  return (
    <div className="App">
      <h3>
        <span>{Math.floor(time / 60)} min </span>
        {time % 60} sec
      </h3>
      <input
        type="button"
        value={timerId ? "Pause" : "Start"}
        onClick={handleStartnPause}
      />
      <input type="button" value="Reset" onClick={handleReset} />
    </div>
  );
}
