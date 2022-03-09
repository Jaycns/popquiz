import { useRef } from "react";
import { React, useState } from "react";
import "../App.css";
import questions from "./questions";
import Countdown from "./previous";
import Pagination from "./pagination";

export default function Pull() {
  const length = questions.length;
  // var position = Math.floor(Math.random() * length);
  let trop = {};
  const timer = useRef();

  const [questionList, setQuestionList] = useState(() => [getQuestion()]);

  function getQuestion() {
    const newIndex = Math.floor(Math.random() * length);
    const question = questions[newIndex];
    return question;
  }

  const [add, setAdd] = useState(1);

  function handleAdd() {
    const question = getQuestion();
    setQuestionList([...questionList, question]);
    setAdd((prevCount) => prevCount + 1);
  }

  function handleMinus() {
    setAdd((prevCount) => prevCount - 1);
  }

  function handleChange(val) {
    timer.current.innerHTML = val;
  }
  function setAnswer(answer) {
    const index = questionList.findIndex((question) => question.id === trop.id);
    const newQuestion = JSON.parse(JSON.stringify(questionList));
    newQuestion[index].selectedAnswer = answer;

    setQuestionList(newQuestion);
    // console.log(questionList);
  }

  trop = questionList[add - 1];
  const questionsPerPage = 1;
  const totalQuestions = 20;

  return (
    <div className="boxes">
      <Countdown handleTimer={handleChange} />
      <div className="bax">
        <div className="baxie">
          <p>
            Time-left: <span ref={timer}>20</span>min(s)
          </p>
        </div>
        <div className="boxie">
          <h1>Question </h1>
          <p>
            <span> {add}</span>/20
          </p>
        </div>
        <div className="potie">
          <p>
            Choose any of the options that seems to be the answer to the current
            question asked
          </p>
        </div>

        <div className="pots">
          <p>{trop.question}</p>
        </div>
        <div className="groupie">
          <button
            className={
              trop.selectedAnswer === trop?.options?.a ? "selected" : ""
            }
            onClick={() => setAnswer(trop?.options?.a)}
          >
            <div className="sez" />
            {trop?.options?.a}
          </button>

          <button
            className={
              trop.selectedAnswer === trop?.options?.b ? "selected" : ""
            }
            onClick={() => setAnswer(trop?.options?.b)}
          >
            <div className="sez" />
            {trop?.options?.b}
          </button>

          <button
            className={
              trop.selectedAnswer === trop?.options?.c ? "selected" : ""
            }
            onClick={() => setAnswer(trop?.options?.c)}
          >
            <div className="sez" />
            {trop?.options?.c}
          </button>

          <button
            className={
              trop.selectedAnswer === trop?.options?.d ? "selected" : ""
            }
            onClick={() => setAnswer(trop?.options?.d)}
          >
            <div className="sez" />
            {trop?.options?.d}
          </button>
        </div>

        <div className="zero">
          <button
            className="zin"
            style={{ visibility: add === 1 ? "hidden" : "visible" }}
            onClick={handleMinus}
          >
            Previous
          </button>
          <button
            className="zin"
            onClick={handleAdd}
            style={{ visibility: add === 20 ? "hidden" : "visible" }}
          >
            Next
          </button>
          <Pagination
            totalQuestions={totalQuestions}
            questionsPerPage={questionsPerPage}
            add={add}
            question={questionList}
            setQuestionList={setQuestionList}
            handleAdd={handleAdd}
            handleMinus={handleMinus}
          />
        </div>
      </div>
    </div>
  );
}
