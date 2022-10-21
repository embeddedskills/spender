import { useSelector } from "react-redux";

import "./Statistics.scss";

const Statistics = () => {
  let { incomeData } = useSelector((state) => state.income);
  let { expensesData } = useSelector((state) => state.expenses);

  let totalIncome = 0;
  for (let object of incomeData) {
    totalIncome += JSON.parse(object.amount);
  }
  let totalExpenses = 0;
  for (let object of expensesData) {
    totalExpenses += JSON.parse(object.amount);
  }
  let totalAmount = 0;
  totalAmount = totalIncome - totalExpenses;

  let color;
  totalAmount < 0 ? (color = "red") : (color = "");

  return (
    <>
      <div className="totals">
        <h2>Total Budget</h2>
        <p style={(color = { color })}>{totalAmount}</p>
        <h2>Total Income</h2>
        <p>{totalIncome > 0 ? totalIncome : "No Income found"}</p>
        <h2>Total Expenses</h2>
        <p>{totalExpenses > 0 ? totalIncome : "No Expenses found"}</p>
      </div>
    </>
  );
};

export default Statistics;
