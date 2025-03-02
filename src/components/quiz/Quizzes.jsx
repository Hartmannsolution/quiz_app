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
          <tr> <th>Semester</th> <th>Link</th> </tr>
        </thead>
        <tbody>
          <tr> <td>Sem 2</td> <td className="link-table-item"> <Link to="network">Computer networks with java</Link> </td> </tr>
          <tr> <td>Sem 2</td> <td className="link-table-item"> <Link to="threads">Threads in java</Link> </td> </tr>
          <tr> <td>Sem 3</td> <td className="link-table-item"> <Link to="reactjs">React JS</Link> </td> </tr>
          <tr> <td>Sem 3</td> <td className="link-table-item"> <Link to="router">React Router</Link> </td> </tr>
          <tr> <td>Sem 4</td> <td className="link-table-item"> <Link to="graphql_backend">GraphQL Backend</Link> </td> </tr>
          <tr> <td>Sem 4</td> <td className="link-table-item"> <Link to="graphql_frontend">GraphQL Client</Link> </td> </tr>
          <tr> <td>Privat</td> <td className="link-table-item"> <Link to="trailer_license">Trailer License</Link> </td> </tr>
        </tbody>
      </table>
      <Outlet context={[quizzesObj]} />
    </>
  );
};

export default Quizzes;
