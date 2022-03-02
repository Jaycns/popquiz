import React from "react";
// import question from "./questions";
import "../App.css";
import Pull from "./pull";
import Laga from "./laga.js";
import circle from "../images/yellow_circle.png";
import half from "../images/half_circle.png";
import big from "../images/big_circle.png";
import purple from "../images/purple_circle.png";
import spiral from "../images/spiral.png";
import yellow from "../images/yellow_circle.png";

function Field() {
  return (
    <div className="ent">
      <img src={circle} className="mg1" alt="" />
      <img src={half} className="mg2" alt="" />
      <img src={big} className="mg3" alt="" />
      <img src={purple} className="mg4" alt="" />
      <img src={spiral} className="mg5" alt="" />
      <img src={yellow} className="mg6" alt="" />

      <div className="box">
        <Pull />
        <Laga />
      </div>
    </div>
  );
}
export default Field;
