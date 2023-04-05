import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useQuiz, deleteQuestion, startQuiz } from './redux/quiz'
import { Link, Route, Routes } from "react-router-dom"


import Add from './components/Add'
import Update from "./components/Update"
import Quiz from "./components/Quiz"
import Delete from './components/Delete'
import Admin from './components/Admin'

function App() {
  
  const { questions, quizStarted, showResult } = useQuiz()

  return ( 
    
      <div>

        <div>  
          <Link className= "adminquiz" to="/admin">Admin</Link>
          <Link className= "adminquiz" to="/quiz">Quiz</Link> 
        </div>
              
        <Routes>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
        </Routes>
        
      </div>
    
  )
}

export default App
