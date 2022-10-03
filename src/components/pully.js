import { React, useState, useContext, useEffect } from "react";
import "../App.css";
import SelectOptions from "./options";
import AppContext from "../context/context";
import Pagination from "./pagination";

export default function Pully() {
  const { currentPage, oneQuestion, handlePrev, handleNext } =
    useContext(AppContext);
  const [time, setTime] = useState(20);
  const handleTime = () => {
    if (time > 0) setTime((prev) => prev - 1);
  };
  useEffect(() => {
    const timer = setInterval(handleTime, 60000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="boxes">
      <div className="bax">
        <div className="baxie">
          <p>
            Time-left: <span>{time}</span>min(s)
          </p>
        </div>
        <div className="boxie">
          <h1>Question </h1>
          <p>
            <span>{currentPage}</span>/30
          </p>
        </div>
        <div className="potie">
          <p>
            Choose any of the options that seems to be the answer to the current
            question asked
          </p>
        </div>
        {oneQuestion.map((trop) => {
          return <SelectOptions key={trop.id} trop={trop} />;
        })}

        <div className="zero">
          <div className="ins">
            <button
              className="zin"
              onClick={handlePrev}
              style={{ visibility: currentPage === 1 ? "hidden" : "visible" }}
              // onClick={handleMinus}
            >
              Previous
            </button>
            <button
              className="zin"
              onClick={handleNext}
              style={{ visibility: currentPage === 30 ? "hidden" : "visible" }}
            >
              Next
            </button>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
