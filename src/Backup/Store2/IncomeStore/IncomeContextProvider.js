import { useState, useEffect } from "react";
import IncomeContext from "./IncomeContext";

function IncomeContextProvider(props) {
  let initialState = JSON.parse(localStorage.getItem("income"));

  if (!initialState) {
    initialState = [];
  }

  for (const item of initialState) {
    item.date = new Date(item.date);
  }

  const [addedIncome, setAddedIncome] = useState(initialState);

  function addIncomeHandler(newIncome) {
    setAddedIncome((prevAddedIncome) => {
      return prevAddedIncome.concat(newIncome);
    });
  }

  function removeIncomeHandler(incomeKey) {
    setAddedIncome((prevAddedIncome) => {
      return prevAddedIncome.filter((income) => income.key !== incomeKey);
    });
  }
  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(addedIncome));
  }, [addedIncome]);

  const InContext = {
    income: addedIncome,
    totalIncome: addedIncome.length,
    addIncome: addIncomeHandler,
    removeIncome: removeIncomeHandler,
  };

  return (
    <IncomeContext.Provider value={InContext}>
      {props.children}
    </IncomeContext.Provider>
  );
}
export default IncomeContextProvider;
