import React, { useContext } from "react";
// import question from "./questions";
import "../App.css";
import Pully from "./pully";
import Laga from "./laga.js";
import circle from "../images/yellow_circle.png";
import half from "../images/half_circle.png";
import big from "../images/big_circle.png";
import purple from "../images/purple_circle.png";
import spiral from "../images/spiral.png";
import yellow from "../images/yellow_circle.png";
import EndPop from "./endpop";
import ThankPop from "./thankpop";
import AppContext from "../context/context";

function Field() {
  const { thankPops, pops, time } = useContext(AppContext);
  return (
    <>
      {thankPops || (time <= 0 && <ThankPop />)}
      {pops && <EndPop />}
      <div className="ent">
        <img src={circle} className="mg1" alt="my little pic" />
        <img src={half} className="mg2" alt="my little pic" />
        <img src={big} className="mg3" alt="my little pic" />
        <img src={purple} className="mg4" alt="my little pic" />
        <img src={spiral} className="mg5" alt="my little pic" />
        <img src={yellow} className="mg6" alt="my little pic" />
        <div className="footer">
          <p>Designed by © Jaycn</p>
        </div>
      </div>
      <div className="box">
        <Pully />
        <Laga />
      </div>
    </>
  );
}
export default React.memo(Field);
