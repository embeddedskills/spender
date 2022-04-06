import React from "react";
import AddExpenseForm from "./AddExpenseForm";
import Allowance from "./Allowance";
import ExpanseList from "./ExpenseList";
import Expenses from "./Expenses";
import Remaining from "./Remaining";
import { AppProvider } from "../../context/AppContext";
import "../../assets/css/spendings.scss";

const Spendings = () => {
  return (
    <AppProvider>
      <div className="spendings">
        <div className="spendings__wrapper">
          <div className="spendings__total">
            <Allowance />
            <Remaining />
            <Expenses />
          </div>
          <div className="spendings__details">
            <h2>Details:</h2>
            <div className="spendings__expenses">
              <ExpanseList />
            </div>
          </div>
          <div className="spendings__form">
            <h2>Add Expense</h2>
            <div className="spendings__form__add">
              <AddExpenseForm />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default Spendings;
