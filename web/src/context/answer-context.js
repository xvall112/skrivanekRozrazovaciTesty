import React, { useState, createContext } from "react";

export const AnswerContext = createContext();

export function AnswerProvider({ children }) {
  const [answers, setAnswers] = useState([]);

  return (
    <AnswerContext.Provider value={{ answers, setAnswers }}>
      {children}
    </AnswerContext.Provider>
  );
}
