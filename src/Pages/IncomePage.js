import Income from "../Components/Income/Income";
import YearContextProvider from "../Stores/YearAndTagStore/YearAndTagContextProvider";
import IncomeContextProvider from "../Stores/IncomeStore/IncomeContextProvider";
import NewInput from "../Components/UI/NewInput/NewInput";

const IncomePage = () => {
  return (
    <YearContextProvider>
      <IncomeContextProvider>
        <NewInput addItem={"income"} name={"Income"} />
        <Income />
      </IncomeContextProvider>
    </YearContextProvider>
  );
};

export default IncomePage;
