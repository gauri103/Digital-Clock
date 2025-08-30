import { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const setRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      setRef.current = setInterval(() => {
        setTime((prev) => prev + 100);
      }, 100);
    }
  };

  function stop() {
    console.log("stop");
    clearInterval(setRef.current);
    setIsRunning(false);
  }

  function reset() {
    clearInterval(setRef.current);
    setTime(0);
    setIsRunning(false);
  }

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const millis = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${millis.toString().padStart(2, "0")}`;
  };

  return (
    <div className="text-center mt-40 bg-white rounded-2xl size-fit mx-auto w-1/2">
      <h2 className="text-6xl m-10">⏱ Stopwatch</h2>
      <p style={styles.time}>{formatTime(time)}</p>

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
  // container: { textAlign: "center", marginTop: "40px", color: "#fff" },
  time: { fontSize: "2rem", margin: "10px" },
  btn: {
    margin: "5px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Stopwatch;
