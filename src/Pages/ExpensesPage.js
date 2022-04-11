import Expenses from "../Components/Expenses/Expenses";
import ExpenseContextProvider from "../Stores/ExpenseStore/ExpenseContextProvider";
import YearContextProvider from "../Stores/YearAndTagStore/YearAndTagContextProvider";
import NewInput from "../Components/UI/NewInput/NewInput";

const ExpensesPage = () => {
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
      <ExpenseContextProvider
        value={{
          totalExpenses: null,
          expenses: [],
          addExpense: (newExpense) => {},
          removeExpense: (expenseId) => {},
        }}
      >
        <NewInput addItem={"expense"} name={"Expense"} />
        <Expenses />
      </ExpenseContextProvider>
    </YearContextProvider>
  );
};

export default ExpensesPage;
