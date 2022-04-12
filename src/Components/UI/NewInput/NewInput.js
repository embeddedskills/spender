import { useState } from "react";
import "./NewInput.css";
import InputForm from "./InputForm";
import { useContext } from "react";
import ExpenseContext from "../../../Stores/ExpenseStore/ExpenseContext";
import IncomeContext from "../../../Stores/IncomeStore/IncomeContext";

const NewInput = (props) => {
  const [isShown, setIsShown] = useState();
  const { addExpense } = useContext(ExpenseContext);
  const { addIncome } = useContext(IncomeContext);

  function isShownHandler() {
    setIsShown((previsShown) => {
      return !previsShown;
    });
  }

  function addItemHandler(data) {
    if (props.addItem == "expense") {
      addExpense(data);
    } else {
      addIncome(data);
    }
  }
  return (
    <div className="new-input">
      {isShown && (
        <InputForm
          isShown={isShownHandler}
          name={props.name}
          addItem={addItemHandler}
        />
      )}
      {!isShown && (
        <button onClick={isShownHandler}>Add New {props.name}</button>
      )}
    </div>
  );
};

export default NewInput;

// props.name ==> i.e. name="Expense"/"Income"
