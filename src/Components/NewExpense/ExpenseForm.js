import { useRef, useContext } from "react";
import ExpenseContext from "../../Store/Context";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const enteredAmount = useRef();
  const enteredDate = useRef();
  const enteredTitle = useRef();

  const { addExpense } = useContext(ExpenseContext);

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
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input name="title" type="text" ref={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            type="number"
            min="0.1"
            step="0.1"
            ref={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input name="date" type="date" ref={enteredDate} />
        </div>
        <div className="new-expense__actions">
          <button onClick={props.isShown}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
