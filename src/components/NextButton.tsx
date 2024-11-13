import { useQuiz } from "../contexts/QuizContext";

export default function NextButton() {
  const { dispatch, index, numQuestions } = useQuiz();
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextAnswer" })}
      >
        Next
      </button>
    ) as React.JSX.Element;

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    ) as React.JSX.Element;
}
