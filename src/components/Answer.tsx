import React from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

export default function Answer() {
  const { questions, index } = useQuiz();
  const question = questions[index];
  return (
    <div className="answer">
      <h3>{question.question}</h3>
      <Options question={question} />
      {/* {answer && (
        <div>
          <p>{Date.now()}</p>
          {!isLastAnswer ? (
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "nextAnswer" })}
            >
              Next
            </button>
          ) : (
            <button className="btn btn-ui">End</button>
          )}
        </div>
      )} */}
    </div>
  );
}
