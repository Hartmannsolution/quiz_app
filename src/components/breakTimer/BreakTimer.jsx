import React, { useState, useEffect } from "react";
import "./breaktimer.css";

const BreakTimer = () => {
  const [breakTime, setBreakTime] = useState(60);

  const showTime = () => {
    if(breakTime < 0){
        return "00:00";
    }
    let minutes = Math.floor(breakTime / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = breakTime % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
        if(breakTime < 1 ){
          clearInterval(interval);
          setBreakTime(0);
        } else {
          setBreakTime((breakTime) => breakTime - 1);
        }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Break Timer</h1>
      <button className="timebutton" onClick={() => setBreakTime(300)}>5 min</button>
      <button className="timebutton" onClick={() => setBreakTime(600)}>10 min</button>
      <button className="timebutton" onClick={() => setBreakTime(900)}>15 min</button>
      <p className="timeview">{showTime()}</p>
    </>
  );
};

export default BreakTimer;
