import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const QuestionPaper = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const questions = [
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
    },
    {
      question: 'Which animal is known as the "Ship of the Desert?"',
      options: ['Camel', 'Cat', 'dog', 'rat'],
      correctAnswer: 'Camel',
    },
    // Add more questions here
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const calculateTotalScore = () => {
    // Assuming each question carries 1 point
    return answers.reduce((score, answer, index) => {
      const question = questions[index];
      return score + (answer === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  return (
    <div className="question-paper">
      {currentQuestionIndex < questions.length ? (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result totalScore={calculateTotalScore()} />
      )}
    </div>
  );
};

export default QuestionPaper;
