import { useState } from "react";
import StatisticsContext from "./StatisticsContext";

const StatisticsContextProvider = (props) => {
  const [providedExpenses, getExpenses] = useState([]);
  const [provideIdncome, getIncome] = useState([]);

  function getExpensesHandler(newExpense) {
    getExpenses(newExpense);
  }
  function getIncomeHandler(newIncome) {
    getIncome(newIncome);
  }
  const expensesValues = providedExpenses.map((expense) => {
    return expense.amount;
  });
  const totalExpensesValue = expensesValues.reduce(
    (prev, next) => +prev + +next,
    0
  );
  const incomeValues = provideIdncome.map((inItem) => {
    return inItem.amount;
  });
  const totalIncomeValue = incomeValues.reduce(
    (prev, next) => +prev + +next,
    0
  );

  const balance = totalIncomeValue - totalExpensesValue;

  const StatContext = {
    getExpenses: getExpensesHandler,
    getIncome: getIncomeHandler,
    providedExpenses,
    provideIdncome,
    balance,
  };

  return (
    <StatisticsContext.Provider value={StatContext}>
      {props.children}
    </StatisticsContext.Provider>
  );
};

export default StatisticsContextProvider;
