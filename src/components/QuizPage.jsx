import React, { useState } from "react";
import { Container } from "react-bootstrap";


const QuizPage = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Venus", "Jupiter", "Mars"],
      correctAnswer: "Jupiter",
    },
    {
      question: "in which coaching of hisar ankit is studying",
      options: ["radialcode", "kodu", "okkcode"],
      correctAnswer: "radialcode",
    },
    {
      question: "what is the name of ankit village",
      options: ["agroha", "hisar", "siwani"],
      correctAnswer: "agroha",
    },
    {
      question: "what is the name of ankit village",
      options: ["agroha", "hisar", "siwani"],
      correctAnswer: "agroha",
    },
    // Add more questions
  ];
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleOptionChange = (questionIndex, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };
// console.log(score)
  return (
    <Container>
      <div className="d-flex justify-content-center flex-column pt-5">
        <div className="mw_500 ms-auto me-auto ">
          {questions.map((question, index) => (
            <div key={index} className="question">
              <p>{question.question}</p>
              <div className="d-flex justify-content-between">
                {question.options.map((option, optionIndex) => (
                  <label key={optionIndex}>
                    <input
                      type="radio"
                      name={`q${index}`}
                      value={option}
                      onChange={() => handleOptionChange(index, option)}
                      checked={answers[index] === option}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center pt-4">
          <div className="mw_500">
            <button onClick={calculateScore}>Submit</button>
            <p>Your score: {score}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default QuizPage;
 