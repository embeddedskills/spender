import Item from "../UI/Items-ItemsList/Item";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No expenses found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <Item
          name="expenses"
          key={item.key}
          key2={item.key}
          title={item.title}
          amount={item.amount}
          date={item.date}
          tag={item.tag}
          removeItem={props.removeItem}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
