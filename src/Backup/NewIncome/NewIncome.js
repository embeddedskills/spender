import { useState } from "react";
import "./NewIncome.css";
import ExpenseForm from "./IncomeForm";

const NewIncome = () => {
  const [isShown, setIsShown] = useState();

  function isShownHandler() {
    setIsShown((previsShown) => {
      return !previsShown;
    });
  }
  return (
    <div className="new-income">
      {isShown && <ExpenseForm isShown={isShownHandler} />}
      {!isShown && <button onClick={isShownHandler}>Add New Income</button>}
    </div>
  );
};

export default NewIncome;
