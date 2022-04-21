import { useState } from "react";
import { useDispatch } from "react-redux";

import "./NewInput.css";
import InputForm from "./InputForm";
import { expensesActions } from "../../../Stores/redux-store/expensesSlice";
import { incomeActions } from "../../../Stores/redux-store/incomeSlice";

const NewInput = (props) => {
  const [isShown, setIsShown] = useState();
  const dispatch = useDispatch();

  const addExpenseHandler = (data) => {
    dispatch(expensesActions.addExpense(data));
  };
  const addIncomeHandler = (data) => {
    dispatch(incomeActions.addIncome(data));
  };

  const addItemHandler = (data) => {
    if (props.addItem == "expense") {
      addExpenseHandler(data);
    } else {
      addIncomeHandler(data);
    }
  };

  function isShownHandler() {
    setIsShown((previsShown) => {
      return !previsShown;
    });
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
