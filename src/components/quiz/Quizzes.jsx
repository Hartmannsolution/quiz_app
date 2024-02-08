import React, {useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'
import './quizzes.css'

const Quizzes = ({quizzesObj}) => {

  return (
    <>
    {/* <ol>
    {quizzes.map((quiz)=>{
        <li key={quiz.name}><QuizDetails quizElements={quiz.data}/></li>

    })}
    </ol> */}
    <Link to="network">Computer networks with java</Link>
    <Outlet context={[quizzesObj]}/>
    </>
  )
}

export default Quizzes