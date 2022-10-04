import React, { useContext, useState } from "react";
import Surge from "../images/surge.svg";
import Nosurge from "../images/no_surge.svg";
import "../App.css";
import AppContext from "../context/context";

export default function Pagination() {
  const { questions, handleNavChange } = useContext(AppContext);
  let lastArray = [];
  for (let i = 1; i <= 30; i++) lastArray.push(i);
  const [currentNav, setCurrentNav] = useState(1);
  const handleNav = () => {
    if (currentNav <= 2) setCurrentNav((prev) => prev + 1);
  };
  const handleNavPrev = () => {
    if (currentNav >= 1) setCurrentNav((prev) => prev - 1);
  };
  const navperPage = 10;
  const lastNav = navperPage * currentNav;
  const initialArray = lastNav - navperPage;
  const navigate = lastArray.slice(initialArray, lastNav);
  return (
    <div className="navis">
      <div className="agination">
        <img
          src={Surge}
          alt="flash pass"
          onClick={handleNavPrev}
          style={{ visibility: currentNav === 1 ? "hidden" : "visible" }}
        />
        {navigate.map((item, index) => {
          return (
            <p
              className={
                questions[item - 1]?.selectedAnswer ? "surge" : "black"
              }
              key={index}
              id={item}
              onClick={handleNavChange}
            >
              {item}
            </p>
          );
        })}
        <img
          src={Nosurge}
          alt="flash pass"
          onClick={handleNav}
          style={{ visibility: currentNav === 3 ? "hidden" : "visible" }}
        />
      </div>
    </div>
  );
}
