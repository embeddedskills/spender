import { createSlice } from "@reduxjs/toolkit";

const expensesInitialState = {
  expensesData: JSON.parse(localStorage.getItem("expenses")),
};
if (!expensesInitialState.expensesData) {
  expensesInitialState.expensesData = [];
}

const expenseSlice = createSlice({
  name: "expenses",
  initialState: expensesInitialState,
  reducers: {
    addExpense(state, action) {
      state.expensesData.push(action.payload);
      localStorage.setItem("expenses", JSON.stringify(state.expensesData));
    },
    removeExpense(state, action) {
      state.expensesData = state.expensesData.filter(
        (expense) => expense.key !== action.payload
      );
      localStorage.setItem("expenses", JSON.stringify(state.expensesData));
    },
  },
});

export const expensesActions = expenseSlice.actions;

export default expenseSlice.reducer;
