import { useContext } from "react";
import StatisticsContext from "../../Stores/StatisticsStore/StatisticsContext";

const Statistics = () => {
  const { balance } = useContext(StatisticsContext);

  return <div>{balance}</div>;
};

export default Statistics;
