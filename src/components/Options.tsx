import React from "react";
import { useQuiz } from "../contexts/QuizContext";
import { QuestionType } from "../contexts/Interfaces";

export default function Options({ question }: { question: QuestionType }) {
  const { dispatch, answer } = useQuiz();
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            answer !== null &&
            (index === question.correctOption ? "correct" : "wrong")
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={answer !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
