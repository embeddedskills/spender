import { useContext } from "react";

import "./Expenses.css";
import ExpenseContext from "../../Stores/ExpenseStore/ExpenseContext";
import YearContext from "../../Stores/YearAndTagStore/YearAndTagContext";
import Card from "../UI/Card";
import ItemsList from "../UI/Items-ItemsList/ItemsList";
import Filter from "../UI/Filter";
import Chart from "../UI/Chart/Chart";

const Expenses = () => {
  const { expenses, removeExpense } = useContext(ExpenseContext);
  const { shownYear, selectYear, filterYear, shownTags, setTag, filterByTags } =
    useContext(YearContext);

  let expensesCharted = expenses;
  if (shownYear !== "all") {
    expensesCharted = expenses.filter(
      (expense) => expense.date.getFullYear() == shownYear
    );
  }

  let expensesListed = expensesCharted;
  if (shownTags !== "all") {
    expensesListed = expensesCharted.filter(
      (expense) => expense.tag == shownTags
    );
  }

  return (
    <Card className="expenses">
      <Filter name="Year" array={filterYear(expenses)} setValue={selectYear} />
      <Chart data={expensesCharted} />
      <Filter
        name="Tag"
        array={filterByTags(expensesCharted)}
        setValue={setTag}
      />
      <ItemsList
        items={expensesListed}
        removeItem={removeExpense}
        name="expenses"
      />
    </Card>
  );
};
export default Expenses;
