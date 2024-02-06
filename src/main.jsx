import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import Quizzes from "./components/quiz/Quizzes";
import QuizDetails from "./components/quiz/QuizDetails";
import ErrorPage from "./components/error-page";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import "./index.css";
import quizzesObj from "./quizzes/network.json";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App />} >
      <Route path="quizzes" element={<Quizzes quizzesObj={quizzesObj} errorElement={<ErrorPage />}/>}>
        <Route path=":name" element={<QuizDetails/>} errorElement={<ErrorPage />}/>
      </Route>
    <Route path="/about" element={<About/>} />
    </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function About() {
  return (
  <>
  <h1>About this site</h1>;
  <p>This is site that is used for making classroom quizes for Datamatiker students at Cphbusiness in Lyngby</p>
  </>);
}
