import { useContext } from "react";

import "./Income.css";
import YearContext from "../../Stores/YearAndTagStore/YearAndTagContext";
import IncomeContext from "../../Stores/IncomeStore/IncomeContext";
import Card from "../UI/Card";
import ItemsList from "../UI/Items-ItemsList/ItemsList";
import Filter from "../UI/Filter";
import Chart from "../UI/Chart/Chart";

const Income = () => {
  const { income, addIncome } = useContext(IncomeContext);
  const { shownYear, selectYear, filterYear, shownTags, setTag, filterByTags } =
    useContext(YearContext);

  let incomeCharted = income;
  if (shownYear !== "all") {
    incomeCharted = income.filter(
      (income) => income.date.getFullYear() == shownYear
    );
  }

  let incomeListed = incomeCharted;
  if (shownTags !== "all") {
    incomeListed = incomeCharted.filter((income) => income.tag == shownTags);
  }

  return (
    <Card className="income">
      <Filter name="Year" array={filterYear(income)} setValue={selectYear} />
      <Chart data={incomeCharted} />
      <Filter
        name="Tag"
        array={filterByTags(incomeCharted)}
        setValue={setTag}
      />
      <ItemsList items={incomeListed} removeItem={addIncome} name="income" />
    </Card>
  );
};
export default Income;
