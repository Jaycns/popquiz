import React, { useState, useEffect, useRef } from "react";

function Countdown({ handleTimer }) {
  //   const countDate = new Date("May 17, 2022 00:00:00");
  //   const now = new Date().getTime();
  //   const gap = countDate - now;

  //   const second = 1000;
  //   const minute = second * 60;
  //   const hour = minute * 60;
  //   const day = hour * 24;

  //   const textDay = Math.floor(gap / day);
  //   const textHour = Math.floor(gap % day) / hour;
  //   const textMinute = Math.floor(gap % hour) / minute;
  //   const textSecond = Math.floor(gap % minute) / second;
  //  console.log(textMinute);
  var [counter, setCounter] = useState(null);
  const timer = useRef(0);
  console.log(counter);
  useEffect(() => {
    timer.current.innerHTML = 20;
    let min = setInterval(() => {
      if (timer.current.innerHTML != 0) {
        timer.current.innerHTML -= 1;
        handleTimer(timer.current.innerHTML);
      }
    }, 6000);
    setCounter(min);

    return () => {
      clearInterval(min);
    };
  }, []);

  return (
    <h1 ref={timer} style={{ display: "none" }}>
      {timer.current.innerHTML}
    </h1>
  );
}
export default Countdown;
