import React, { createContext, useState } from "react";

export const QuestionContext = createContext();

const ContextsProvider = ({ children }) => {
  //   const [isReady, setIsready] = useState(true);

  const [activeQuestion, setActiveQuestion] = useState(1);
  const allQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [q, setQ] = useState([]);

  const handleYes = () => {
    const newQuestions = [];

    setTimeout(() => {
      for (let i = 0; i < activeQuestion; i++) {
        const n = allQuestions[i];
        if (n !== undefined) {
          newQuestions.push(n);
        }
      }
      setActiveQuestion(activeQuestion + 1);
      setQ(newQuestions);
    }, 1500);
  };
  const value = {
    handleYes,
    q,
  };
  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};

export default ContextsProvider;
