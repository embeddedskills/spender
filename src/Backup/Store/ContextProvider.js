import { useState, useEffect } from "react";
import Context from "./Context";

function ContextProvider(props) {
  let initialState = JSON.parse(localStorage.getItem("expenses"));

  if (!initialState) {
    initialState = [];
  }

  for (const item of initialState) {
    item.date = new Date(item.date);
  }

  const [addedExpenses, setAddedExpenses] = useState(initialState);

  function addExpensesHandler(newExpense) {
    setAddedExpenses((prevAddedExpenses) => {
      return prevAddedExpenses.concat(newExpense);
    });
  }

  function removeExpensesHandler(expenseKey) {
    setAddedExpenses((prevAddedExpenses) => {
      return prevAddedExpenses.filter((expense) => expense.key !== expenseKey);
    });
  }
  const [selectedYear, setSelectedYear] = useState("all");

  function selectYearHandler(year) {
    setSelectedYear(year);
  }

  function filterYearHandler(filteredYear) {
    setSelectedYear((prevselectedYear) => {
      return prevselectedYear.filter((year) => year === filteredYear);
    });
  }

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(addedExpenses));
  }, [addedExpenses]);

  const context = {
    expenses: addedExpenses,
    totalExpenses: addedExpenses.length,
    addExpense: addExpensesHandler,
    removeExpense: removeExpensesHandler,
    shownYear: selectedYear,
    filterYear: filterYearHandler,
    selectYear: selectYearHandler,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}
export default ContextProvider;
