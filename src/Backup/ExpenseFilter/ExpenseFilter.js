import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const { shownYear, selectYear, filterYear } = useContext(YearContext);

  const extractedYears = props.expenseItems.map((item) => {
    return item.date.getFullYear();
  });
  const filteredYears = filterYear(props.expenseItems);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="yearSelect">Filter By Year</label>
        <select
          name="nameSelect"
          value={shownYear}
          onChange={(e) => selectYear(e.target.value)}
        >
          <option value="all">All expenses</option>
          {filteredYears.map((year) => {
            return <option key={year}>{year}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
