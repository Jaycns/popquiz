import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function EndPop({ handleClose }) {
  return (
    <div className="popout end">
      <div className="pops">
        <h1>Read Carefully !!!</h1>
      </div>
      <div className="poper end">
        <p>Are you sure you want to end this exam?</p>
      </div>
      <div className="btn-holder">
        <Link to="/">
          <button className="butn">Yes</button>
        </Link>
        <button className="butn" onClick={handleClose}>
          No
        </button>
      </div>
    </div>
  );
}
export default EndPop;
