import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const minutes: number = Math.floor(secondsRemaining / 60);
  const seconds: number = Math.floor(secondsRemaining % 60);
  useEffect(
    function () {
      const interval: NodeJS.Timeout = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(interval);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
