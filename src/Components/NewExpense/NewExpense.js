import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = () => {
  const [isShown, setIsShown] = useState();

  function isShownHandler() {
    setIsShown((previsShown) => {
      return !previsShown;
    });
  }
  return (
    <div className="new-expense">
      {isShown && <ExpenseForm isShown={isShownHandler} />}
      {!isShown && <button onClick={isShownHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
