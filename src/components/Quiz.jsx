import { useQuiz, nextQuestion, resetQuiz, checkCorrect, startQuiz } from "../redux/quiz"
import Question from "./Question"
import QuizCSS from "./Quiz.module.css"
import "../App.css"
export default function Quiz() {

  const { questionIndex, questions, score, showResult, quizStarted } = useQuiz()
  
  return(

    <div className={QuizCSS.quizCont}>
      {!quizStarted && <button onClick={startQuiz}>Start quiz!</button>}

      {showResult && quizStarted &&
        <div className="flex-col center font2">
          <h1>Result</h1>
          <h3>You got {score} / {questions.length} correct!</h3>
          <button onClick={resetQuiz}>Restart quiz</button>
        </div>
      }
      
      {!showResult && quizStarted &&
        <div className="flex-col center font2 font-size-m">
          <div className={QuizCSS.score}>
            <div>Question {questionIndex+1}/{questions.length}</div>
            <div className="space">Score: {score}</div>
          </div>
          <Question /> 
          <button onClick={() => nextQuestion()}>Next question</button>  
        </div>
      }   
    </div>
  )
}