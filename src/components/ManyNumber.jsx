import { useState } from "react";

const ManyNumber = () => {
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");
  const [power, setPower] = useState("");
  const [result, setResult] = useState([]);

  const runLoop = () => {
    const start = parseInt(startValue, 10);
    const end = parseInt(endValue, 10);
    const myResult = [];
    for (let i = start; i <= end; i++) {
      myResult.push(i ** power);
    }
    setResult(myResult);
  };
  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="start"
          value={startValue}
          onChange={(e) => setStartValue(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="end"
          value={endValue}
          onChange={(e) => setEndValue(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="powe"
          value={power}
          onChange={(e) => setPower(e.target.value)}
        />
        <br />
        <button onClick={runLoop}>Check</button>
        <h2>{result.join(", ")}</h2>
      </div>
    </div>
  );
};

export default ManyNumber;
