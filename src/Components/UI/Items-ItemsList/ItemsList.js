import "./ItemsList.css";
import ExpenseItem from "./Item";

const ItemsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="itemsList__fallback"> No {props.name} found!</h2>;
  }

  return (
    <ul className="itemsList">
      {props.items.map((item) => (
        <ExpenseItem
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
export default ItemsList;
