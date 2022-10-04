import React from "react";
import "../App.css";
import logo from "../images/school_logo.png";

export default function Laga({ handleOpen }) {
  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const start = [hours, minutes].join(":");
  const stop = [hours, minutes + 20].join(":");

  return (
    <div className="lagobox">
      <div className="lagox">
        <div className="hause">
          <img src={logo} alt="picser" />
          <h1>Faculty of Engineering And Technology</h1>
        </div>
        <div className="lags">
          <div className="sag">
            <p>
              Start Time::<span> {start}</span>
            </p>
            <p>
              Stop Time::<span> {stop}</span>
            </p>
          </div>

          <p className="las">COMPUTER PROGRAMMING</p>

          <p className="last">HTML AND JAVASCRIPT</p>

          <p className="btns" onClick={handleOpen}>
            END TEST
          </p>
        </div>
      </div>
    </div>
  );
}
