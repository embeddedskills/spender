import { useContext } from "react";
import ExpenseContext from "../../Store/Context";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const { shownYear, selectYear } = useContext(ExpenseContext);

  const extractedYears = props.expenseItems.map((item) => {
    return item.date.getFullYear();
  });

  const filteredYears = extractedYears.filter(
    (year, index) => index === extractedYears.indexOf(year)
  );

  const renderedYear = filteredYears.map((year) => {
    return <option key={year}>{year}</option>;
  });

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="yearSelect">Filter By Year</label>
        <select
          name="nameSelect"
          value={shownYear}
          onChange={(e) => selectYear(e.target.value)}
        >
          {renderedYear}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

// onChange ή onClick with eventHandler forwarding the action with props or dispatching to store
