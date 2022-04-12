import { createContext } from "react";

const StatisticsContext = createContext({
  getExpenses: (data) => {},
  getIncome: (data) => {},
  providedExpenses: [],
  provideIdncome: [],
  balance: null,
});

export default StatisticsContext;
