import React from "react";
import "../App.css";
import logo from "../images/school_logo.png";

export default function Laga() {
  return (
    <div className="lagobox">
      <div className="lagox">
        <div className="hause">
          <img src={logo} alt="" />
          <h1>Faculty of Engineering And Technology</h1>
        </div>
        <div className="lags">
          <div className="sag">
            <p>
              Start Time::<span> 08:51</span>
            </p>
            <p>
              Start Time::<span> 08:51</span>
            </p>
          </div>

          <p className="las">COMPUTER PROGRAMMING</p>

          <p className="last">HTML AND JAVASCRIPT</p>

          <p className="btns">END TEST</p>
        </div>
      </div>
    </div>
  );
}
