import React, { createContext, useState, useCallback, useEffect } from "react";
import questions from "../components/questions";
const AppContext = createContext();
export function AppProvider(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [answer, setAnswer] = useState(null);
  const questionsPerPage = 1;
  const last = currentPage * questionsPerPage;
  const initial = last - questionsPerPage;
  const oneQuestion = questions.slice(initial, last);

  const handleNext = useCallback(() => {
    if (currentPage < 30) setCurrentPage((prev) => prev + 1);
  }, [currentPage]);
  const handlePrev = useCallback(() => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  }, [currentPage]);

  const [pop, setPop] = useState(false);
  const [idName, setIdName] = useState("");
  const [id, setId] = useState([]);

  const handleChange = useCallback((e) => {
    setIdName(e.target.value);
  }, []);
  const handleName = useCallback(() => {
    setId([...id, idName]);
  }, [id, idName]);

  function openPop() {
    setPop(true);
    handleName();
  }

  function closePop() {
    setPop(false);
  }
  const handleNavChange = (e) => {
    setCurrentPage(Number(e.target.getAttribute("id")));
  };
  const [pops, setPops] = useState(false);
  const handleOpen = () => setPops(true);
  const handleClose = () => setPops(false);
  const [thankPops, setThankPops] = useState(false);
  const handleThankPop = () => {
    setThankPops(true);
    setPops(false);
  };
  const handleCloseThankPop = () => setThankPops(false);
  const score = questions.filter(
    (items) => items.answer === items.selectedAnswer
  ).length;
  const [time, setTime] = useState(20);
  const handleTime = () => {
    if (time !== 0) setTime((prev) => prev - 1);
  };
  useEffect(() => {
    const timer = setInterval(handleTime, 60000);
    return () => clearInterval(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const phoneMedia = window.matchMedia("(max-width: 768px)").matches;
  const stateActions = {
    handlePrev,
    handleNext,
    setAnswer,
    closePop,
    openPop,
    handleChange,
    handleNavChange,
    handleThankPop,
    handleCloseThankPop,
    handleOpen,
    handleClose,
  };
  return (
    <AppContext.Provider
      value={{
        oneQuestion,
        // oneQues,
        questions,
        answer,
        currentPage,
        pop,
        idName,
        id,
        phoneMedia,
        thankPops,
        pops,
        score,
        time,
        ...stateActions,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
