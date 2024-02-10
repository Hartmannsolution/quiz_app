import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

export default () => {
  const { name } = useParams();
  const [quizzesObj] = useOutletContext();
  const [quiz, setQuiz] = useState({ name: "", data: [] });

  useEffect(() => {
    const actualQuiz = quizzesObj.quizzes.find((quiz) => quiz.name === name);

    console.log("ACTUAL: ", actualQuiz);
    setQuiz(actualQuiz);
  });

  return (
      <>
      <h2>{quiz.name}</h2>
      <div className="quizzes">
      {quiz.data.map((element, index) => {
        return (
          <div className="quizelement">
            <QuizElement element={element} key={index} />
          </div>
        );
      })}
    </div>
    </>
  );
};

function QuizElement({ element }) {
  const [reveal, setReveal] = useState(false);
  return (
    <>
      <h3 onClick={() => setReveal(!reveal)}>{element.question}</h3>
      {reveal && <><br/><p>{
      element.answer.startsWith("##")?
      <code className="codesnippet">{element.answer.substring(2)}</code> :
      element.answer}</p><br/></>}
    </>
  );
}
