
import { useQuiz, deleteQuestion } from "../redux/quiz"
import DeleteCSS from "./Delete.module.css"

export default function Questions(){

  const { questions } = useQuiz()

  function handleDelete(questionID) {
    if(questions.length > 1) {
      deleteQuestion(questionID)
    }  
  }

  return(
    <div className={DeleteCSS.divContainer}>
      <h1>Questions:</h1>
      {questions.map((q) => {
        return( <div key={q.id} className={DeleteCSS.container}>
          <p className={DeleteCSS.maxQW}>{q.title}</p> <button className={DeleteCSS.buttonSpace}onClick={() => handleDelete(q.id)}>Delete</button>
          </div>)
        })}
    </div>
  )
}