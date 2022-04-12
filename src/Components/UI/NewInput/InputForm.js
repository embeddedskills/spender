import { useRef } from "react";

import "./InputForm.css";

const InputForm = (props) => {
  const enteredAmount = useRef();
  const enteredDate = useRef();
  const enteredTitle = useRef();
  const enteredTag = useRef();

  let tagNames = [
    "Food",
    "Drinks",
    "Clothes",
    "Bills",
    "Supermarket",
    "Crypto",
    "Computer-related",
  ];

  function formHandler(event) {
    event.preventDefault();
    const Data = {
      key: enteredTitle.current.value + Math.random(),
      title: enteredTitle.current.value,
      amount: enteredAmount.current.value,
      date: new Date(enteredDate.current.value),
      tag: enteredTag.current.value,
    };
    props.addItem(Data);
    enteredAmount.current.value = "";
    enteredDate.current.value = "";
    enteredTitle.current.value = "";
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
            ref={enteredTitle}
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
            ref={enteredAmount}
            required
          />
        </div>
        <div className="new-input__control">
          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" ref={enteredDate} required />
        </div>
        <div className="new-input__control">
          <label htmlFor="tags">Tags</label>
          <select id="tags" name="tags" type="check" ref={enteredTag} required>
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
