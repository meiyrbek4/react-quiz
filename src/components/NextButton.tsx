import { useQuiz } from "../contexts/QuizContext";

export default function NextButton() {
  const { dispatch, index, numQuestions } = useQuiz();

  function handleDispatch() {
    if (index < numQuestions - 1) {
      return dispatch({ type: "nextAnswer" });
    } else if (index === numQuestions - 1) {
      return dispatch({ type: "finished" });
    }
  }

  return (
    <button className="btn btn-ui" onClick={() => handleDispatch()}>
      Next
    </button>
  );
}
