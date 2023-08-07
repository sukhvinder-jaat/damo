import React, { useState, useEffect } from "react";

const ScrollToBottomButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`scroll-to-bottom-button ${isVisible ? "visible" : ""}`}>
        <button onClick={scrollToBottom}>Scroll to Bottom</button>
          </div>
          <div className="vh-100"></div>
          <div className="vh-100"></div>
          <div className="vh-100"></div>
    </>
  );
};

export default ScrollToBottomButton;
