import React, { useContext } from "react";
import "../App.css";
import AppContext from "../context/context";

function EndPop() {
  const { handleThankPop, handleClose } = useContext(AppContext);

  return (
    <>
      <div className="blur"></div>
      <div className="popout end">
        <div className="pops">
          <h1>Read Carefully !!!</h1>
        </div>
        <div className="poper end">
          <p>Are you sure you want to end this exam?</p>
        </div>
        <div className="btn-holder">
          <button className="butn" onClick={handleThankPop}>
            Yes
          </button>

          <button className="butn" onClick={handleClose}>
            No
          </button>
        </div>
      </div>
    </>
  );
}
export default EndPop;
