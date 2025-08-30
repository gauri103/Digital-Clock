import React, { useState } from "react";
import DigitalClock from "./components/DigitalClock";
import Stopwatch from "./components/StopWatch";
import Timer from "./components/Timer";

function App() {
  const [tab, setTab] = useState("clock");

  return (
    <div style={styles.app}>
      <h1 className="text-4xl" style={styles.title}>
        ⏰ Time Utility App
      </h1>
      <div style={styles.nav}>
        <button
          className="hover:not-focus:bg-amber-600"
          style={styles.btn}
          onClick={() => setTab("clock")}
        >
          Clock
        </button>
        <button
          className="hover:not-focus:bg-amber-600"
          style={styles.btn}
          onClick={() => setTab("stopwatch")}
        >
          Stopwatch
        </button>
        <button
          className="hover:not-focus:bg-amber-600"
          style={styles.btn}
          onClick={() => setTab("timer")}
        >
          Timer
        </button>
      </div>

      {tab === "clock" && <DigitalClock />}
      {tab === "stopwatch" && <Stopwatch />}
      {tab === "timer" && <Timer />}
    </div>
  );
}

const styles = {
  app: {
    textAlign: "center",
    backgroundColor: "#1e1e2f",
    height: "100vh",
    padding: "20px",
    width: "100%",
  },
  title: { color: "#fff" },
  nav: { marginBottom: "20px" },
  btn: {
    margin: "5px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white",
  },
};

export default App;
