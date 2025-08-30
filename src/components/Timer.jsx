import React, { useState, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(60); // default 60 seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning && time > 0) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(60);
  };

  return (
    <div style={styles.container}>
      <h2>⏳ Countdown Timer</h2>
      <p style={styles.time}>{time}s</p>
      <button style={styles.btn} onClick={start}>
        Start
      </button>
      <button style={styles.btn} onClick={stop}>
        Stop
      </button>
      <button style={styles.btn} onClick={reset}>
        Reset
      </button>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "40px", color: "#fff" },
  time: { fontSize: "2rem", margin: "10px" },
  btn: {
    margin: "5px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Timer;
