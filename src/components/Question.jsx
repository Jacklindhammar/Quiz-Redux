import { useQuiz, selectAnswer, nextQuestion, setAnswers } from "../redux/quiz"
import { shuffle } from "../shuffle"
import { useEffect } from "react"
import "../app.css"

export default function Question() {

  const { questions, questionIndex, hasAnswered, answers } = useQuiz()
  const currentQuestion = questions[questionIndex]

  useEffect(() => {
    setAnswers(currentQuestion)
    console.log(currentQuestion, "currentQ")
    console.log(answers, "answers!")
  }, [])

  return (
    <div className="maxw">
      <div className="title-box">
        {currentQuestion.title}
      </div>

      <div className="answers">
        {answers.map((answer, index) => {
          const letter = ["1. ", "X. ", "2. "]
          return (
            <div key={index} className="standard-marg">
              <button 
                onClick = {() => selectAnswer(answer)}
                className={hasAnswered && answer === currentQuestion.correct ? "correct-class" : ""}
               >
                  {letter[index]}
                  {answer}  
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}