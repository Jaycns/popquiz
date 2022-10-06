import React, { useContext } from "react";
import Header from "./header";
import "../App.css";
import Popoff from "./popup";
import AppContext from "../context/context";
function Form() {
  const { pop, openPop, idName, handleChange } = useContext(AppContext);
  return (
    <div className="fieldbox">
      <div className="formbox">
        <Popoff pop={pop} />
        <Header />

        <input
          type="text"
          className=""
          required="name"
          placeholder="Enter name"
          value={idName}
          onChange={handleChange}
        />
        <input
          type="number"
          required="matric no"
          placeholder="Enter pin (numbers only)"
        />

        <div className="btn" onClick={openPop}>
          <p>Start Test</p>
        </div>
      </div>
    </div>
  );
}
export default Form;
