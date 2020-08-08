export enum Difficulty {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}

export const fetchQuiz = async (amount: number, difficulty: Difficulty) => {
  const res = await fetch(API_URL);
  const data = await res.json();
  console.table(data);
  return data;
};
