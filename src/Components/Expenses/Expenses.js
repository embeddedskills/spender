import { useDispatch, useSelector } from "react-redux";

import "./Expenses.css";
import Card from "../UI/Card";
import ItemsList from "../UI/Items-ItemsList/ItemsList";
import Filter from "../UI/Filter";
import Chart from "../UI/Chart/Chart";
import { expensesActions } from "../../Stores/redux-store/expensesSlice";
import useFilter from "../../Hooks/useFilter";

const Expenses = () => {
  const [selectedYear, selectYearHandler, filterYearHandler] =
    useFilter("year");

  const [selectedTag, selectTagHandler, filterTagHandler] = useFilter("tag");

  const dispatch = useDispatch();
  const removeExpenseHandler = (key2) => {
    dispatch(expensesActions.removeExpense(key2));
  };

  let expenseData = useSelector((state) => state.expenses.expensesData);
  let immutableExpenses = JSON.parse(JSON.stringify(expenseData));
  for (const item of immutableExpenses) {
    item.date = new Date(item.date);
  }

  let expensesCharted = immutableExpenses;
  if (selectedYear !== "all") {
    expensesCharted = immutableExpenses.filter(
      (expense) => expense.date.getFullYear() == selectedYear
    );
  }

  let expensesListed = expensesCharted;
  if (selectedTag !== "all") {
    expensesListed = expensesCharted.filter(
      (expense) => expense.tag == selectedTag
    );
  }

  return (
    <Card className="expenses">
      <Filter
        name="Year"
        array={filterYearHandler(immutableExpenses)}
        setValue={selectYearHandler}
      />
      <Chart data={expensesListed} />
      <Filter
        name="Category"
        array={filterTagHandler(expensesCharted)}
        setValue={selectTagHandler}
      />
      <ItemsList
        items={expensesListed}
        removeItem={removeExpenseHandler}
        name="expenses"
      />
    </Card>
  );
};
export default Expenses;
