import React from 'react';

interface CardProps {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  quesNum: number;
  totalQues: number;
}

const QuestionCard: React.FC<CardProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  quesNum,
  totalQues,
}) => (
  <div>
    <p>Question</p>
    <p>
      Question: {quesNum} / {totalQues}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer) => (
        <div>
          <button disabled={userAnswer} onClick={callback}></button>
          <span dangerouslySetInnerHTML={{ __html: answer }}></span>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
