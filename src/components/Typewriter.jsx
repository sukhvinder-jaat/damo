import React, { useState, useEffect } from 'react';
import './Typewriter.css'; // Import your CSS file

const Typewriter = () => {
  const text = "Accessibility in design is of paramount importance. It ensures that digital products, websites, and physical spaces are usable and inclusive for everyone, regardless of their abilities, disabilities, or impairments. Implementing accessibility principles is not just a legal requirement in many regions but also a moral and ethical obligation. It encompasses a wide range of considerations, such as visual, auditory, cognitive, and motor impairments, and strives to make technology and information accessible to all.";

  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 50); // Adjust the time interval (in milliseconds) to control typing speed

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [currentIndex]);

  return (
    <div className="typewriter-container">
      <div className="typewriter-text">
        {displayText}
      </div>
    </div>
  );
};

export default Typewriter;
