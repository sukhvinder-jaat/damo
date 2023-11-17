import { useState } from "react";

const Quib = () => {
  const [value, setValue] = useState(0);
  const [power, setPower] = useState(0);
  const [myResult, setMyResult] = useState(null);

  console.log(value);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="number"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Power"
          onChange={(e) => setPower(e.target.value)}
        ></input>
        <br />
        <button type="submit" onClick={() => setMyResult(value ** power)}>
          Check
        </button>
        <h2>{myResult}</h2>
      </div>
    </div>
  );
};

export default Quib;
