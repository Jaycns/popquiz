import React from "react";
import "../App.css";
import logo from "../images/school_logo.png";

function Logo() {
  return (
    <div className="logobox">
      <div className="house">
        <img src={logo} alt="picer" />
        <h1>Faculty of Engineering And Technology</h1>
        <div className="quiz-app">
          <p>Quiz App</p>
        </div>
      </div>
    </div>
  );
}
export default Logo;
