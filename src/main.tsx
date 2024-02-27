import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import "./index.css";
// import quizzesObj from "./quizzes/questions.json";
// import RandomGroup from "./components/randomGroup/RandomGroup";
// import BreakTimer from "./components/breakTimer/BreakTimer";
import DesignPatternsViewer from "./components/DesignPatternsViewer";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App />} >
      {/* <Route path="quizzes" element={<Quizzes quizzesObj={quizzesObj} errorElement={<ErrorPage />}/>}>
        <Route path=":name" element={<QuizDetails/>} errorElement={<ErrorPage />}/>
      </Route>
    <Route path="/group" element={<RandomGroup/>} />
    <Route path="/about" element={<About/>} /> */}
    <Route path="/designpatterns" element={<DesignPatternsViewer/>} />
    </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

