import React, { useState, useEffect } from 'react';

const TextAnimation = () => {
  const text = "HARSHITHA U";
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    var index = 0;
    
    const timer = setInterval(() => {
      if (index < text.length) {
        setVisibleText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 400); // Adjust the interval duration (in milliseconds) to control the speed of text appearance

    return () => {
      clearInterval(timer);
    };
  }, []);

  const harsh={
    fontSize: '3em', 
    fontStyle: 'italic',
    fontFamily : "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif'"
  };

  return <div style={harsh}>{visibleText}</div>;
};

export default TextAnimation;
