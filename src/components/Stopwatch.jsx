import { useEffect, useState } from "react";
const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  // useEffect hook to handle the timing logic
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
          setTime(prevTime => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  // Function to start and stop the stopwatch
  const toggleStopwatch = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  // Function to reset the stopwatch
  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>{(time / 1000).toFixed(2)}</h1>
      <button onClick={toggleStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={resetStopwatch} className="ms-3">Reset</button>
    </div>
  );
};

export default Stopwatch;
