import { useContext } from "react";

import "./Expenses.css";
import Card from "./UI/Card";
import ExpenseContext from "../Store/Context";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = () => {
  const { shownYear, expenses } = useContext(ExpenseContext);

  const expensesShown = expenses.filter(
    (expense) => expense.date.getFullYear() == shownYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter expenseItems={expenses} />
      <ExpensesChart expenses={expensesShown} />
      <ExpensesList items={expensesShown} />
    </Card>
  );
};
export default Expenses;
