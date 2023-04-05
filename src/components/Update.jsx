import { updateQuestion } from "../redux/quiz"
import { useState } from "react"
import UpdateCSS from "./Update.module.css"
export default function Update() {

  const [newTitle, setNewTitle] = useState("")
  const [title, setTitle] = useState("")
  const [correct, setCorrect] = useState("")
  const [false1, setFalse1] = useState("")
  const [false2, setFalse2] = useState("")

/*   function handleUpdate() {
    updateQuestion({title, newTitle, correct, false1, false2})
  } */

  return (

    <div className={UpdateCSS.divContainer}>
      <h1>Update question</h1>
      <p>Current title:</p>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <p>New title:</p>
      <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      <p>Correct answer</p>
      <input type="text" value={correct} onChange={(e) => setCorrect(e.target.value)} />
      <p>False answer 1</p>
      <input type="text" value={false1} onChange={(e) => setFalse1(e.target.value)} />
      <p>False answer 2</p>
      <input type="text" value={false2} onChange={(e) => setFalse2(e.target.value)} /> 
      <button className={UpdateCSS.space} onClick={() => updateQuestion({title, newTitle, correct, false1, false2})}>Update question</button> 
    </div>
  )
}