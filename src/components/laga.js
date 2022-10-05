import React, { useContext } from "react";
import "../App.css";
import AppContext from "../context/context";
import logo from "../images/school_logo.png";

export default function Laga() {
  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const stopTime = (minutes + 20).toString();
  const stopHour =
    stopTime[0] === "6" ? hours + 1 : stopTime[0] === "7" ? hours + 1 : hours;

  const start = [hours, minutes].join(":");

  const tempMin =
    stopTime[0] === "6"
      ? stopTime.replace("6", "0")
      : stopTime[0] === "7"
      ? stopTime.replace("7", "1")
      : stopTime;
  const endTime = Number(tempMin);
  console.log({ mins: tempMin });
  const stop = [stopHour, endTime].join(":");
  const { handleOpen } = useContext(AppContext);
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
