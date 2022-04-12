import Expenses from "../Components/Expenses/Expenses";
import ExpenseContextProvider from "../Stores/ExpenseStore/ExpenseContextProvider";
import YearContextProvider from "../Stores/YearAndTagStore/YearAndTagContextProvider";
import NewInput from "../Components/UI/NewInput/NewInput";

const ExpensesPage = () => {
  return (
    <YearContextProvider>
      <ExpenseContextProvider>
        <NewInput addItem={"expense"} name={"Expense"} />
        <Expenses />
      </ExpenseContextProvider>
    </YearContextProvider>
  );
};

export default ExpensesPage;
