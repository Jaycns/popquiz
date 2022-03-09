import React from "react";
import Surge from "../images/surge.svg";
import Nosurge from "../images/no_surge.svg";
import "../App.css";

export default function Pagination({
  totalQuestions,
  questionsPerPage,
  add,
  question,
  setQuestionList,
  handleAdd,
  handleMinus,
}) {
  const pageNumber = [];
  //   const [thisquestion, setThisQuestions] = useState(trop);
  //   const [thisset, setThisSet] = useState(question);
  //   //   function handleChange(event) {
  //   //     setThisQuestions(event.target.value);
  //   //   }
  //   function handleClick(event) {
  //     setThisQuestions(event.target.value);
  //     setThisSet(thisquestion);
  //   }
  for (let i = 20; i <= totalQuestions / questionsPerPage; i++) {
    pageNumber.push(i);
  }

  let nextArray = [];
  for (let i = 11; i <= 20; i++) nextArray.push(i);
  console.log(question);
  return (
    <div className="navis">
      <div
        className="agination"
        style={{ visibility: add <= 10 ? "visible" : "hidden" }}
      >
        {[...Array(10).keys()].map((item, index) => {
          return (
            <p
              className={question[item]?.selectedAnswer ? "surge" : "black"}
              key={index}
            >
              {item + 1}
            </p>
          );
        })}
        <img src={Nosurge} alt="flash pass" onClick={handleAdd}></img>
      </div>
      <div
        className="pagination"
        style={{ visibility: add > 10 ? "visible" : "hidden" }}
      >
        <img src={Surge} alt="flash pass" onClick={handleMinus}></img>
        {nextArray.map((item, index) => {
          return (
            <p
              className={question[item - 1]?.selectedAnswer ? "surge" : "black"}
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
