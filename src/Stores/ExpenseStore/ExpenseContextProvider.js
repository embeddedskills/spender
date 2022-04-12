import { useState, useEffect } from "react";
import ExpenseContext from "./ExpenseContext";

function ExpenseContextProvider(props) {
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
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(addedExpenses));
  }, [addedExpenses]);

  const ExpContext = {
    expenses: addedExpenses,
    totalExpenses: addedExpenses.length,
    addExpense: addExpensesHandler,
    removeExpense: removeExpensesHandler,
  };

  return (
    <ExpenseContext.Provider value={ExpContext}>
      {props.children}
    </ExpenseContext.Provider>
  );
}
export default ExpenseContextProvider;
