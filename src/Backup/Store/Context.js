import { createContext } from "react";

const Context = createContext({
  totalExpenses: null,
  expenses: [],
  addExpense: (newExpense) => {},
  removeExpense: (expenseId) => {},
  filterYear: (year) => {},
  shownYear: null,
  selectYear: (year) => {},
});

export default Context;
