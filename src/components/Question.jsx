import React, { useState } from 'react';

const Question = ({ question, options, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="question">
      <p>{question}</p> 
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option${index}`}
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          <label htmlFor={`option${index}`}>{option}</label>
        </div>
      ))}
      <button onClick={() => handleAnswer(selectedOption)}>Submit Answer</button>
    </div>
  );
};

export default Question;
