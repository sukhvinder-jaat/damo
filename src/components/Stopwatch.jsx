// import React, { Component } from 'react';

import { useEffect, useState } from "react";

// class Stopwatch extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isRunning: false,
//       elapsedTime: 0,
//       previousTime: 0,
//     };
//   }

//   componentDidMount() {
//     this.intervalID = setInterval(this.tick, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }

//   tick = () => {
//     if (this.state.isRunning) {
//       const now = Date.now();
//       this.setState((prevState) => ({
//         previousTime: now,
//         elapsedTime: prevState.elapsedTime + (now - prevState.previousTime),
//       }));
//     }
//   };

//   handleStartStop = () => {
//     this.setState((prevState) => ({
//       isRunning: !prevState.isRunning,
//       previousTime: Date.now(),
//     }));
//   };

//   handleReset = () => {
//     this.setState({
//       isRunning: false,
//       elapsedTime: 0,
//       previousTime: 0,
//     });
//   };

//   formatTime = (milliseconds) => {
//     const seconds = Math.floor(milliseconds / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const formattedSeconds = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
//     return `${minutes}:${formattedSeconds}`;
//   };

//   render() {
//     const { isRunning, elapsedTime } = this.state;
//     return (
//       <div>
//         <h1>Stopwatch</h1>
//         <p>{this.formatTime(elapsedTime)}</p>
//         <button onClick={this.handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
//         <button onClick={this.handleReset}>Reset</button>
//       </div>
//     );
//   }
// }

// export default Stopwatch;
const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  // useEffect hook to handle the timing logic
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10); // Increase time by 10 milliseconds (adjust as needed)
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
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default Stopwatch;
