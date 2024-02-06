import { useState, useEffect } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import getQuizzes from "../../quizzes/quizFacade";
import "./quizes.css";

export default () => {
  let navigate = useNavigate();
  const [dataFromJsonFiles, setDataFromJsonFiles] = useState([]);
  useEffect(() => {
    // setJsonFiles(getQuizes());
    (async () => {
      const quizzes = await getQuizzes();
      try{
        const jsonDataPromises = quizzes.map((quiz) => import(`../../quizzes/${quiz}`));
        const resolvedData = await Promise.all(jsonDataPromises);
        console.log('RESOLVED DATA: ',resolvedData);
        setDataFromJsonFiles(data);

    } catch (error) {
      console.log(error);
    }


    })();
  }, []);

  return (
    <>
      <h1>Quizes</h1>
      <button onClick={() => navigate("new")}>New Quiz</button>
      <Outlet />
    </>
  );
};
