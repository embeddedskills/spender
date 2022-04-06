import { useContext } from "react";

import Card from "./UI/Card";
import "./ExpenseItem.css";
import ExpenseContext from "../Store/Context";

const ExpenseItem = (props) => {
  const { removeExpense } = useContext(ExpenseContext);

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  function removeHandler() {
    removeExpense(props.key2);
  }

  return (
    <li>
      <Card className="expense-item">
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__year">{year}</div>
          <div className="expense-date__day">{day}</div>
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">€{props.amount}</div>
          <button onClick={removeHandler}>Remove</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
