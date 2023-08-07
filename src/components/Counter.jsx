import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrese = () => {
       if (count > 0) {
      setCount(count - 1);
    }
    };
 const reset = () => {
    setCount(0)
 }
  return (
    <div>
      <h1>Counter App</h1> 
      <div>{count}</div>
      <div>
        <button onClick={increase}>+</button>
              <button onClick={decrese}>-</button>
              <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default Counter;