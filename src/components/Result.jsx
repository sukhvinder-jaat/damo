import React from 'react';

const Result = ({ totalScore }) => {
  return (
    <div className="result">
      <h2>Result</h2>
      <p>Total Score: {totalScore}</p>
    </div>
  );
};

export default Result;
