import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mt-40 bg-white rounded-2xl size-fit mx-auto w-1/2  ">
      <h2 className="text-3xl mb-5"> Digital Clock</h2>
      <h4 className="text-2xl font-bold p-6">{time.toLocaleTimeString()}</h4>
      <h4 className="text-2xl font-bold">{time.toDateString()}</h4>
    </div>
  );
}

export default DigitalClock;
