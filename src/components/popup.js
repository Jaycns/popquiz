import React from "react";
import "../App.css";
import { FiXCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
function Popoff(props) {

  return (
    <div style={{ display: props.pop ? "block" : "none" }} className="popout">
      <FiXCircle className="paps" onClick={props.handleChange} />
      <div className="pops">
        <h1>Read Carefully !!!</h1>
      </div>
      <div className="poper">
        <ul>
          <li>
            There are 2 categories and a total of 20 questions to be answered.
            Please do not click submit or end test unless you are sure of
            submitting
          </li>
          <li>Your examination ID is .</li>
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
        <button className="butn">Start Test</button>
      </Link>
    </div>
  );
}
export default Popoff;
