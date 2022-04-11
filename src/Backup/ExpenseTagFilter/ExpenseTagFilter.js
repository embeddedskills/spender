import { useContext } from "react";
import ExpenseContext from "../../../Stores/ExpenseStore/ExpenseContext";

import "./ExpenseTagFilter.css";

const ExpenseTagFilter = (props) => {
  const { tags, selectedTag, setTag } = useContext(ExpenseContext);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="tagSelect">Filter by Tag:</label>
        <select name="tagSelect" onChange={(e) => setTag(e.target.value)}>
          <option value="all">All tags</option>
          {tags.map((tag) => {
            return <option key={tag}>{tag}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseTagFilter;

//να το κανω filter αντι για sorting.
