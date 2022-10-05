import { React, useCallback, useContext } from "react";
import "../App.css";
import AppContext from "../context/context";
import questions from "./questions";

export default function SelectOptions({ trop }) {
  const { setAnswer } = useContext(AppContext);
  const handleAnswer = useCallback(
    (e) => {
      setAnswer(e.target.getAttribute("value"));
      const newList = Array.from(questions);
      const index = newList.findIndex((question) => {
        return question.id === trop.id;
      });
      const newTrop = newList[index];
      newTrop.selectedAnswer = e.target.value;
    },
    [trop, setAnswer]
  );
  
  return (
    <>
      <div className="pots">
        <p>{trop.question}</p>
      </div>
      <div className="groupie">
        <button
          onClick={handleAnswer}
          value={trop?.options?.a}
          className={trop.selectedAnswer === trop?.options?.a ? "selected" : ""}
        >
          <div className="sez" />
          {trop?.options?.a}
        </button>

        <button
          onClick={handleAnswer}
          value={trop?.options?.b}
          className={trop.selectedAnswer === trop?.options?.b ? "selected" : ""}
        >
          <div className="sez" />
          {trop?.options?.b}
        </button>

        <button
          onClick={handleAnswer}
          value={trop?.options?.c}
          className={trop.selectedAnswer === trop?.options?.c ? "selected" : ""}
        >
          <div className="sez" />
          {trop?.options?.c}
        </button>

        <button
          onClick={handleAnswer}
          value={trop?.options?.d}
          className={trop.selectedAnswer === trop?.options?.d ? "selected" : ""}
        >
          <div className="sez" />
          {trop?.options?.d}
        </button>
      </div>
    </>
  );
}
