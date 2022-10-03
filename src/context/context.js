import React, { createContext, useState, useCallback } from "react";
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
  const phoneMedia = window.matchMedia("(max-width: 768px)").matches;
  const stateActions = {
    handlePrev,
    handleNext,
    setAnswer,
    closePop,
    openPop,
    handleChange,
    handleNavChange,
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
        ...stateActions,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
