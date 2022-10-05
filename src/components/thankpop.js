import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import passport from "../images/passport.png";
import AppContext from "../context/context";

function ThankPop() {
  const { handleCloseThankPop } = useContext(AppContext);
  return (
    <>
      <div className="blur"></div>
      <div className="popout end thank">
        <div className="pops">
          <img src={passport} alt="passport here" className="passport pop" />
        </div>
        <div className="poper end">
          <p>
            Thank you for participating in our exam. Your score will be
            communicated to you shortly.
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
