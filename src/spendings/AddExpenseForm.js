import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="expenseform">
        <div className="expenseform__name">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            className=""
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="expenseform__cost">
          <label htmlFor="cost">Cost</label>
          <input
            required="required"
            type="text"
            className=""
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
        <div className="expenseform__submit">
          <button type="submit" className="">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
