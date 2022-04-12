import { createContext } from "react";

const IncomeContext = createContext({
  totalIncome: null,
  income: [],
  addIncome: (newExpense) => {},
  removeIncome: (expenseId) => {},
});
export default IncomeContext;
