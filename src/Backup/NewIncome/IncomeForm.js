import { useRef, useContext } from "react";
import Context from "../../../Stores/Context";

import "./IncomeForm.css";

const IncomeForm = (props) => {
  const enteredAmount = useRef();
  const enteredDate = useRef();
  const enteredTitle = useRef();

  const { addExpense } = useContext(Context);

  function formHandler(event) {
    event.preventDefault();
    const expenseData = {
      key: enteredTitle.current.value + Math.random(),
      title: enteredTitle.current.value,
      amount: enteredAmount.current.value,
      date: new Date(enteredDate.current.value),
    };
    addExpense(expenseData);
    enteredAmount.current.value = "";
    enteredDate.current.value = "";
    enteredTitle.current.value = "";
    props.isShown();
  }

  return (
    <form onSubmit={formHandler}>
      <div className="new-income__controls">
        <div className="new-income__control">
          <label htmlFor="title">Title</label>
          <input name="title" type="text" ref={enteredTitle} required />
        </div>
        <div className="new-income__control">
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            type="number"
            min="0.1"
            step="0.1"
            ref={enteredAmount}
            required
          />
        </div>
        <div className="new-income__control">
          <label htmlFor="date">Date</label>
          <input name="date" type="date" ref={enteredDate} required />
        </div>
        <div className="new-income__actions">
          <button onClick={props.isShown}>Cancel</button>
          <button type="submit">Add Income</button>
        </div>
      </div>
    </form>
  );
};

export default IncomeForm;
