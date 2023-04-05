import { addQuestion, updateQuestion, useQuiz } from "../redux/quiz"
import { useState } from "react"
import AddCSS from "./Add.module.css"
import "../app.css"

export default function Add() {

  const [title, setTitle] = useState("")
  const [correct, setCorrect] = useState("")
  const [false1, setFalse1] = useState("")
  const [false2, setFalse2] = useState("")
  
  function handleAdd() {
    const newObj = {
      id: Date.now(), 
      title: title, 
      correctAnswer: correct, 
      false1: false1,
      false2: false2
    }
    if(newObj.title !== ""){
      addQuestion(newObj)
    }
    setTitle(""), setCorrect(""), setFalse1(""), setFalse2("")
  }

  return(
    <div className={AddCSS.divContainer}>
      <h1>Add question</h1>
      <div className={AddCSS.container}>
        <p className="font2">Title</p>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <p>Correct answer</p>
          <input type="text" value={correct} onChange={(e) => setCorrect(e.target.value)}/>
        <p>False answer 1</p>
          <input type="text" value={false1} onChange={(e) => setFalse1(e.target.value)}/>
        <p>False answer 2</p>
          <input type="text" value={false2} onChange={(e) => setFalse2(e.target.value)}/>
        <button className={AddCSS.space} onClick={() => handleAdd()}>Add question</button>
      </div>
    </div>
  )
}