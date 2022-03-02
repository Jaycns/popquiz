import React from "react";
import "../App.css";
import passport from "../images/passport.png";

function Header() {
  return (
    <div className="headerbox">
      <img src={passport} alt="passport here" className="passport" />
      <p>
        Welcome, <br/>Please sign in to your test
      </p>
    </div>
  );
}
export default Header;
