import { useEffect } from "react";
import { createContext, useState } from "react";

const ExpenseContext = createContext({
  totalExpenses: null,
  expenses: [],
  addExpense: (newExpense) => {},
  removeExpense: (expenseId) => {},
  filterYear: (year) => {},
  shownYear: null,
  selectYear: (year) => {},
});

export function ExpenseContextProvider(props) {
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
  const [selectedYear, setSelectedYear] = useState("");

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

  return (
    <ExpenseContext.Provider value={context}>
      {props.children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
