import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

export default () => {
  const { name } = useParams();
  const [quizzesObj] = useOutletContext();
  const [quiz, setQuiz] = useState({ name: "", data: [] });

  useEffect(() => {
    console.log("name: ", name);
    const actualQuiz = quizzesObj.quizzes.find((quiz) => quiz.name === name);
    console.log("EXPECTED: ", name);

    console.log("ACTUAL: ", actualQuiz);
    setQuiz(actualQuiz);
  });
  const formatQuizName = (name) => {
    return name.split("_").map(part=>part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  }

  return (
    <>
      <h2>{formatQuizName(quiz.name)}</h2>
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

  const encodeJsx = (str) => {
    const isCode = str.startsWith("##");
    const lines = str.split("§§");
    console.log("LINES: ", lines);
    const content = lines.map((line) => {
      if (line.startsWith("##")) {
        // if first line
        return line.substring(2);
      } else {
        return (
          <>
            <br />
            {line}
          </>
        );
      }
    });
    return isCode ? <code className="codesnippet">{content}</code> : content;
  };

  return (
    <>
      <h3 className="question" onClick={() => setReveal(!reveal)}>{element.question}</h3>
      {reveal && (
        <>
          <br />
          <p className="answer">
              {encodeJsx(element.answer)}
          </p>
          <br />
        </>
      )}
    </>
  );
}
