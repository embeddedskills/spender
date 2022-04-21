import { createSlice } from "@reduxjs/toolkit";

const incomeInitialState = {
  incomeData: JSON.parse(localStorage.getItem("income")),
};
if (!incomeInitialState.incomeData) {
  incomeInitialState.incomeData = [];
}

const incomeSlice = createSlice({
  name: "income",
  initialState: incomeInitialState,
  reducers: {
    addIncome(state, action) {
      state.incomeData.push(action.payload);
      localStorage.setItem("income", JSON.stringify(state.incomeData));
    },
    removeIncome(state, action) {
      state.incomeData = state.incomeData.filter(
        (income) => income.key !== action.payload
      );
      localStorage.setItem("income", JSON.stringify(state.incomeData));
    },
  },
});

export const incomeActions = incomeSlice.actions;

export default incomeSlice.reducer;
