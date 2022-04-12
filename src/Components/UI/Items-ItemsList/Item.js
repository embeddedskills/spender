import Card from "../Card";
import "./Item.css";

const Item = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  function removerHandler() {
    props.removeItem(props.key2);
  }

  return (
    <li>
      <Card className="item">
        <div className="date">
          <div className="date__month">{month}</div>
          <div className="date__year">{year}</div>
          <div className="date__day">{day}</div>
        </div>
        <div className="item__description">
          <h2>{props.title}</h2>
          <h5>{props.tag}</h5>
          <div className="item__price">€{props.amount}</div>
          <button onClick={removerHandler}>Remove</button>
        </div>
      </Card>
    </li>
  );
};

export default Item;
