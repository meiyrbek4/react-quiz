export interface QuestionType {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export interface StateType {
  questions: QuestionType[];
  status: "loading" | "ready" | "error" | "active" | "finished";
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number;
}

export type ActionType =
  | { type: "dataReceived"; payload: QuestionType[] }
  | { type: "dataFailed" }
  | { type: "startTest" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextAnswer" }
  | { type: "finished" }
  | { type: "restart" }
  | { type: "tick" };

export interface ContextType extends StateType {
  numQuestions: number;
  fullPoints: number;
  dispatch: React.Dispatch<ActionType>;
}
