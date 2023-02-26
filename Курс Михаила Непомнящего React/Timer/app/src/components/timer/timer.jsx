import React, { useState } from "react";

const Timer = () => {
  let [timerCounter, setTimerCounter] = useState(0);
  let [timerId, setTimerId] = useState(null);
  let [isStarted, setIsStarted] = useState(false);

  const timeChanger = () => {
    return setTimerCounter((prevState) => prevState + 1);
  };

  const intervalFun = () => {
    if (isStarted) return;

    setIsStarted(true);
    const timerId = setInterval(timeChanger, 1000);
    setTimerId(timerId);
  };

  const stopTimer = () => {
    console.log(isStarted);
    clearInterval(timerId);
  };

  const resetTimer = () => {
    clearInterval(timerId);
    setTimerCounter(0);
    setIsStarted(false);
  };

  return (
    <div className="timerblock">
      <div className="timerblock-flex">
        <h1>React Timer</h1>
        <h2>{timerCounter}</h2>
        <div className="buttons">
          {!isStarted ? (
            <button className="button" onClick={intervalFun}>
              start
            </button>
          ) : (
            <button className="button" onClick={stopTimer}>
              stop
            </button>
          )}
          <button className="button" onClick={resetTimer}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
