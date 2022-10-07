import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import passport from "../images/passport.png";
import AppContext from "../context/context";

function ThankPop() {
  const { handleCloseThankPop, score, time } = useContext(AppContext);
  return (
    <>
      <div className="blur"></div>
      <div className="popout end thank">
        <div className="pops">
          <img src={passport} alt="passport here" className="passport pop" />
        </div>
        <div className="poper end">
          <p>
            {time <= 0 ? <span>Hey! You ran out of time.</span> : ""}Thank you
            for participating in our exam. You scored {score}.{" "}
            {score >= 20 ? (
              <span>Congrats! You could be a genius</span>
            ) : (
              <span>Oh well! Better luck next time</span>
            )}
          </p>
        </div>
        <Link to="/">
          <button className="butn" onClick={handleCloseThankPop}>
            Ok
          </button>
        </Link>
      </div>
    </>
  );
}
export default ThankPop;
