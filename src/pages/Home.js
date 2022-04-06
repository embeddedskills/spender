import "./Home.scss";
import NewExpense from "../Components/NewExpense/NewExpense";
import Expenses from "../Components/Expenses";

const NewHome = () => {
  return (
    <>
      <header className="home__header">
        <h2 className="home__title">Spender</h2>
        <h3 className="home__subtitle">Track your spendings</h3>
      </header>
      <NewExpense />
      <Expenses />
    </>
  );
};

export default NewHome;
