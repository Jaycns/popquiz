import { useEffect, useRef } from "react";
import { React, useState } from "react";
import "../App.css";
import questions from "./questions";

export default function Pull() {
  var length = questions.length;
  var position = Math.floor(Math.random() * length);
  var trop = questions[position];
  const [add, setAdd] = useState(1);

  //   function usePrevious(value) {
  //     const ref = useRef();
  //     useEffect(() => {
  //       ref.current = value;
  //     }, [value]);
  //     return ref.current;
  //   }
  function handleAdd() {
    setAdd(add + 1);
  }
  function handleMinus() {
    setAdd(add - 1);

    console.log(add);
  }
  return (
    <div className="boxes">
      <div className="bax">
        <div className="baxie">
          <p>Time-left: 16min(s)</p>
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
          <div className="zee">
            <div className="sez" />
            <p>{trop.options.a}</p>
          </div>
          <div className="zee">
            <div className="sez" />
            <p>{trop.options.b}</p>
          </div>
          <div className="zee">
            <div className="sez" />
            <p>{trop.options.c}</p>
          </div>
          <div className="zee">
            <div className="sez" />
            <p>{trop.options.d}</p>
          </div>
        </div>
        <div className="zero">
          <button
            className="zin"
            style={{ visibility: add == 1 ? "hidden" : "visible" }}
            onClick={handleMinus}
            onCheck={add == 1}
          >
            Previous
          </button>
          <button
            className="zin"
            onClick={handleAdd}
            style={{ visibility: add == 20 ? "hidden" : "visible" }}
            onCheck={add == 20}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
