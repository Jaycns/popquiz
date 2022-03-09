import React from "react";
import Header from "./header";
import "../App.css";
import { useState } from "react";
import Popoff from "./popup";
function Form() {
  const [pop, setPop] = useState(false);
  const [names, setNames] = useState("");

  function handleClick() {
    setPop(true);
  }
  function handleName(event) {
    setNames(event.target.value);
    console.log(event.target.value);
  }
  function handleChange() {
    setPop(false);
  }
  return (
    <div className="fieldbox">
      <div className="formbox">
        <Popoff pop={pop} handleChange={handleChange} handleName={handleName} />
        <Header />

        <input
          type="text"
          className=""
          value={names}
          required="name"
          onChange={handleName}
          placeholder="Enter name"
        />
        <input
          type="number"
          required="matric no"
          placeholder="Enter matric no e.g MSQ100L20"
        />

        <div className="btn">
          <p onClick={handleClick}>Start Test</p>
        </div>
      </div>
    </div>
  );
}
export default Form;
