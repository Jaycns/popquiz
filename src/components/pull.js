import { useEffect, useRef } from "react";
import { React, useState } from "react";
import "../App.css";
import questions from "./questions";
import Countdown from "./previous";
export default function Pull(props) {
  
  var length = questions.length;
  var position = Math.floor(Math.random() * length);
  var trop = questions[position];
  const timer = useRef();


  const [add, setAdd] = useState(position);
  const [rop, setTrop] = useState([]);
  function handleAdd(event) {
    setAdd((prevCount) => prevCount + 1);
    event.preventDefault();
  }
  function handleMinus() {
    setAdd((prevCount) => prevCount - 1);
    trop = questions[position - 1];
  }
  function handleChange(val) {
    timer.current.innerHTML = val;
  }

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
          <button>
            <div className="sez" />
            {trop.options.a}
          </button>

          <button>
            <div className="sez" />
            {trop.options.b}
          </button>

          <button>
            <div className="sez" />
            {trop.options.c}
          </button>

          <button>
            <div className="sez" />
            {trop.options.d}
          </button>
        </div>

        <div className="zero">
          <button
            className="zin"
            style={{ visibility: add == 1 ? "hidden" : "visible" }}
            onClick={handleMinus}
            value={trop.id}
          >
            Previous
          </button>
          <button
            className="zin"
            onClick={handleAdd}
            style={{ visibility: add == 20 ? "hidden" : "visible" }}
            onCheck={add == 20}
            value={trop.id}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
