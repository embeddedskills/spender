import Income from "../Components/Income/Income";
import YearContextProvider from "../Stores/YearAndTagStore/YearAndTagContextProvider";
import IncomeContextProvider from "../Stores/IncomeStore/IncomeContextProvider";
import NewInput from "../Components/UI/NewInput/NewInput";

const IncomePage = () => {
  return (
    <YearContextProvider
      value={{
        shownYear: null,
        selectYear: (year) => {},
        filterYear: (yearArray) => {},
        shownTags: null,
        setTag: () => {},
        filterByTags: (objectsArray) => {},
      }}
    >
      <IncomeContextProvider
        value={{
          totalIncome: null,
          income: [],
          addIncome: (newExpense) => {},
          removeIncome: (expenseId) => {},
        }}
      >
        <NewInput addItem={"income"} name={"Income"} />
        <Income />
      </IncomeContextProvider>
    </YearContextProvider>
  );
};

export default IncomePage;
