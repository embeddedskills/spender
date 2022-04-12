import { useContext, useEffect } from "react";

import "./Income.css";
import YearContext from "../../Stores/YearAndTagStore/YearAndTagContext";
import IncomeContext from "../../Stores/IncomeStore/IncomeContext";
import Card from "../UI/Card";
import ItemsList from "../UI/Items-ItemsList/ItemsList";
import Filter from "../UI/Filter";
import Chart from "../UI/Chart/Chart";
import StatisticsContext from "../../Stores/StatisticsStore/StatisticsContext";

const Income = () => {
  const { income, removeIncome } = useContext(IncomeContext);
  const { shownYear, selectYear, filterYear, shownTags, setTag, filterByTags } =
    useContext(YearContext);
  const { getIncome } = useContext(StatisticsContext);

  useEffect(() => {
    getIncome(income);
  }, [income]);

  let incomeCharted = income;
  if (shownYear !== "all") {
    incomeCharted = income.filter(
      (incom) => incom.date.getFullYear() == shownYear
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
        name="Category"
        array={filterByTags(incomeCharted)}
        setValue={setTag}
      />
      <ItemsList items={incomeListed} removeItem={removeIncome} name="income" />
    </Card>
  );
};
export default Income;
