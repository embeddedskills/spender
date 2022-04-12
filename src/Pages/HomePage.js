import Statistics from "../Components/Statistics/Statistics";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <header className="home__header">
        <h2 className="home__title">Spender</h2>
        <h3 className="home__subtitle">Track your spendings</h3>
        <Statistics />
      </header>
    </>
  );
};

export default Home;
