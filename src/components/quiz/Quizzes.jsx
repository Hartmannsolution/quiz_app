import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./quizzes.css";

const Quizzes = ({ quizzesObj }) => {
  return (
    <>
      {/* <ol>
    {quizzes.map((quiz)=>{
        <li key={quiz.name}><QuizDetails quizElements={quiz.data}/></li>

    })}
    </ol> */}
      <table className="linkstable">
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sem 2</td>
            <td>
              <Link to="network">Computer networks with java</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Outlet context={[quizzesObj]} />
    </>
  );
};

export default Quizzes;
