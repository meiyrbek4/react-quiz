import { useQuiz } from "../contexts/QuizContext";

export default function Progress() {
  const { numQuestions, index, fullPoints, points, answer } = useQuiz();

  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numQuestions}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        Progress {points} / {fullPoints}
      </p>
    </header>
  );
}
