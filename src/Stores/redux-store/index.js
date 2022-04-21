import { configureStore } from "@reduxjs/toolkit";

import expensesReducer from "./expensesSlice";
import incomeReducer from "./incomeSlice";

const store = configureStore({
  reducer: { income: incomeReducer, expenses: expensesReducer },
});

export default store;
