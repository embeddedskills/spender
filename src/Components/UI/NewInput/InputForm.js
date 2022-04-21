import { useState } from "react";

import "./InputForm.css";

const InputForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTag, setEnteredTag] = useState("Food");
  let tagNames = [
    "Food",
    "Drinks",
    "Clothes",
    "Bills",
    "Supermarket",
    "Crypto",
    "Computer-related",
  ];

  function titleHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function amountHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateHandler(event) {
    setEnteredDate(event.target.value);
  }
  function tagHandler(event) {
    setEnteredTag(event.target.value);
  }

  function formHandler(event) {
    event.preventDefault();
    const data = {
      key: enteredTitle + Math.random(),
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
      tag: enteredTag,
    };

    props.addItem(data);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    props.isShown();
  }

  return (
    <form onSubmit={formHandler}>
      <div className="new-input__controls">
        <div className="new-input__control">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            type="text"
            value={enteredTitle}
            onChange={titleHandler}
            required
          />
        </div>
        <div className="new-input__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            type="number"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={amountHandler}
            required
          />
        </div>
        <div className="new-input__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={enteredDate}
            onChange={dateHandler}
            required
          />
        </div>
        <div className="new-input__control">
          <label htmlFor="tags">Tags</label>
          <select
            id="tags"
            name="tags"
            type="check"
            value={enteredTag}
            onChange={tagHandler}
            required
          >
            {tagNames.map((tag) => {
              return <option key={tag}>{tag}</option>;
            })}
          </select>
        </div>
        <div className="new-input__actions">
          <button onClick={props.isShown}>Cancel</button>
          <button type="submit">Add {props.name}</button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
