
export const shuffle = (question) => {
  const shuffledAnswers = [
    question.correct, 
    question.false1,
    question.false2
  ]
  
  return shuffledAnswers
    .map((answer) => ({ sort: Math.random(), value: answer}))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value)
}