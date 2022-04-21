import Expenses from "../Components/Expenses/Expenses";
import NewInput from "../Components/UI/NewInput/NewInput";

const ExpensesPage = () => {
  return (
    <>
      <NewInput addItem={"expense"} name={"Expense"} />
      <Expenses />
    </>
  );
};

export default ExpensesPage;
