import "./App.css";
import Form from "./components/form";
import Logo from "./components/appLogo.js";
import React from "react";
import circle from "./images/yellow_circle.png";
import half from "./images/half_circle.png";
import big from "./images/big_circle.png";
import purple from "./images/purple_circle.png";
import spiral from "./images/spiral.png";
import yellow from "./images/yellow_circle.png";


function App() {
  return (
    <div className="ent">
      <img src={circle} className="mg1" />
      <img src={half} className="mg2" />
      <img src={big} className="mg3" />
      <img src={purple} className="mg4" />
      <img src={spiral} className="mg5" />
      <img src={yellow} className="mg6" />
      
      <div className="box">
        <Form />
        <Logo />
      </div>
    </div>
  );
}

export default App;
