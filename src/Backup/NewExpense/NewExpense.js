import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

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
