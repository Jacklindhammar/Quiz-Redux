import { createReduxModule } from "hooks-for-redux"
import { shuffle } from "../shuffle"

const initialState = {
    hasAnswered: false,
    quizStarted: false,
    showResult: false,
    questionIndex: 0,
    currentAnswer: "",
    score: 0,
    questions: [
    {
        id: 1,
        title: "Hur många guldbollar har Zlatan Ibrahimovic vunnit?",
        false1: "Nio",
        false2: "Tio",
        correct: "Tolv"
    },
    {
        id: 2,
        title: "Vad heter den nuvarande sångaren i rockbandet AC/DC?",
        false1: "Bon Scott",
        false2: "Angus Young",
        correct: "Brian Johnson",
    },
    {
        id: 3,
        title: "Hur många VM-guld har Brasilien i fotboll?",
        false1: "Fyra",
        false2: "Sju",
        correct: "Fem",
        
    } 
    ],   
    answers: [],
}

export const [useQuiz, { 
    addQuestion, updateQuestion, deleteQuestion, nextQuestion, 
    checkCorrect, startQuiz, resetQuiz, setAnswers, selectAnswer 
    }] = createReduxModule("quiz", initialState, {
       
        addQuestion: (state, question) => {
            return {...state, questions: [...state.questions, question]}
        },

        updateQuestion: (state, { title, newTitle, correct, false1, false2 }) => {
            
            const copyQuestions = [...state.questions]
            copyQuestions.map(question => {
                console.log(question, "question in map")
                if(question.title.toLowerCase() == title.toLowerCase()){
                    question.title = newTitle   
                    question.correct = correct
                    question.false1 = false1
                    question.false2 = false2   
                }
            })
            return {...state, questions: copyQuestions}     
        },

        deleteQuestion: (state, id) => {  
            return {...state,
                questions: state.questions.filter(question => {
                    if(question.id != id){
                        return question
                    }
                })
            }
        },

        nextQuestion: (state) => {
            
            const showResult = state.questionIndex === state.questions.length-1;
            const questionIndex = showResult ? state.questionIndex : state.questionIndex+1;
            const answers = shuffle(state.questions[questionIndex])

            console.log(questionIndex,showResult, "current and showresult")
            return {...state, questionIndex, showResult, answers, hasAnswered: false}
        },

        checkCorrect: (state, answer) => {
            console.log(answer, "ANSWER")
            const current = state.currentQuestion
            const copyQ = [...state.questions]

            if(answer === copyQ[current].correctAnswer) {
                console.log("CORRECTO", answer)
                return {...state, score: state.score + 1}
            } else return {...state}
        },

        setAnswers: (state, answers) => {
            const newAnswers = shuffle(answers)
            return {...state, answers: newAnswers}
        },

        selectAnswer: (state, answer) => {
            
            const score = 
                answer === state.questions[state.questionIndex].correct &&
                state.hasAnswered === false ?
                state.score + 1 : state.score
            return {...state, currentAnswer: answer, score, hasAnswered: true}
        },

        resetQuiz: () => {
                return initialState
                
        },

        startQuiz: (state) => {
            return {...state, quizStarted: true}
        }
              
    })
























/* const question1 = {
    id: 1,
    title: "Vad heter huvudstaden i Sverige?",
    alt: ["Malmö", "Göteborg", "Stockholm"],
    correctAnswer: 2
}

const question2 = {
    id: 2,
    title: "Vad heter huvudstaden i Sverige?",
    alt: ["Malmö", "Göteborg", "Stockholm"],
    correctAnswer: 2
} */



