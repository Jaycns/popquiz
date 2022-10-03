import "./App.css";
import Form from "./components/form";
import Logo from "./components/appLogo.js";
import circle from "./images/yellow_circle.png";
import half from "./images/half_circle.png";
import big from "./images/big_circle.png";
import purple from "./images/purple_circle.png";
import spiral from "./images/spiral.png";
import yellow from "./images/yellow_circle.png";
import AppContext from "./context/context";
import React, { useContext } from "react";
function App() {
  const { phoneMedia } = useContext(AppContext);
  return (
    <div className="ent">
      {!phoneMedia && (
        <>
          <img src={circle} alt="pic here" className="mg1" />
          <img src={half} alt="pic here" className="mg2" />
          <img src={big} alt="pic here" className="mg3" />
          <img src={purple} alt="pic here" className="mg4" />
          <img src={spiral} alt="pic here" className="mg5" />
          <img src={yellow} alt="pic here" className="mg6" />
        </>
      )}
      <div className="box">
        <Form />
        <Logo />
      </div>
    </div>
  );
}

export default App;
