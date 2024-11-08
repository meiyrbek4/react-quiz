import { useQuiz } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, fullPoints, highscore, dispatch } = useQuiz();

  const percentage = (points / fullPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🏆";
  if (percentage >= 80 && 100 < percentage) emoji = "🥈";
  if (percentage >= 50 && 80 < percentage) emoji = "🥉";
  if (percentage > 0 && 50 < percentage) emoji = "🎗";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        {emoji} You scored {points} our of {fullPoints} {Math.ceil(percentage)}%
      </p>
      <p>(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
