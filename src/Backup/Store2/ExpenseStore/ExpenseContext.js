import { createContext } from "react";

const ExpenseContext = createContext({
  totalExpenses: null,
  expenses: [],
  addExpense: (newExpense) => {},
  removeExpense: (expenseId) => {},
  shownTags: null,
  setTag: () => {},
  filterByTags: (objectsArray) => {},
});
export default ExpenseContext;
