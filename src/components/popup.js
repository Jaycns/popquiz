import React, { useContext } from "react";
import "../App.css";
import { FiXCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import AppContext from "../context/context";
function Popoff() {
  const { pop, closePop, id } = useContext(AppContext);

  return (
    <div style={{ display: pop ? "block" : "none" }} className="popout">
      <FiXCircle className="paps" onClick={closePop} />
      <div className="pops">
        <h1>Read Carefully !!!</h1>
      </div>
      <div className="poper">
        <ul>
          <li>
            There are 2 categories and a total of 30 questions to be answered.
            Please do not click submit or end test unless you are sure of
            submitting
          </li>
          <li>Your examination ID is {id}</li>
          <li>
            Any form of malpractice would render your test nullified, stick to
            the rules. GOOD LUCK!
          </li>
          <li>
            Exam duration:<b> 20 minutes</b>
          </li>
        </ul>
      </div>
      <Link to="/exam">
        <button className="butn" onClick={closePop}>
          Start Test
        </button>
      </Link>
    </div>
  );
}
export default Popoff;
