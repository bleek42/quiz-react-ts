import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuiz, Difficulty } from './components/config';

const allQuestions = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.table(fetchQuiz(allQuestions, Difficulty.easy));

  const startQuiz = async () => {};

  const checkAnswer = (ev: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>quiz app</h1>
      <p>bitches</p>
      {/* <QuestionCard
        quesNum={number + 1}
        totalQues={allQuestions}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : null}
        callback={checkAnswer}
      /> */}
      <button className="start-button" onClick={startQuiz}>
        Start Quiz
      </button>
      <button className="next-question" onClick={nextQuestion}>
        Next
      </button>
      <p className="score">Score:</p>
      <p className="loading">loading...</p>
    </div>
  );
};

export default App;
