import { useDispatch, useSelector } from "react-redux";

import "./Income.css";
import Card from "../UI/Card";
import ItemsList from "../UI/Items-ItemsList/ItemsList";
import Filter from "../UI/Filter";
import Chart from "../UI/Chart/Chart";
import { incomeActions } from "../../Stores/redux-store/incomeSlice";
import useFilter from "../../Hooks/useFilter";

const Income = () => {
  const [selectedYear, selectYearHandler, filterYearHandler] =
    useFilter("year");
  const [selectedTag, selectTagHandler, filterTagHandler] = useFilter("tag");

  const dispatch = useDispatch();
  const removeIncomeHandler = (key2) => {
    dispatch(incomeActions.removeIncome(key2));
  };

  let incomeData = useSelector((state) => state.income.incomeData);
  let immutableIncome = JSON.parse(JSON.stringify(incomeData));
  for (const item of immutableIncome) {
    item.date = new Date(item.date);
  }

  let incomeCharted = immutableIncome;
  if (selectedYear !== "all") {
    incomeCharted = immutableIncome.filter(
      (incom) => incom.date.getFullYear() == selectedYear
    );
  }

  let incomeListed = incomeCharted;
  if (selectedTag !== "all") {
    incomeListed = incomeCharted.filter((income) => income.tag == selectedTag);
  }

  return (
    <Card className="income">
      <Filter
        name="Year"
        array={filterYearHandler(immutableIncome)}
        setValue={selectYearHandler}
      />
      <Chart data={incomeListed} />
      <Filter
        name="Category"
        array={filterTagHandler(incomeCharted)}
        setValue={selectTagHandler}
      />
      <ItemsList
        items={incomeListed}
        removeItem={removeIncomeHandler}
        name="income"
      />
    </Card>
  );
};
export default Income;
