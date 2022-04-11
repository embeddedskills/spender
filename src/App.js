import "./App.css";
import Menu from "./Components/Menu/Menu";
import Home from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ExpensesPage from "./Pages/ExpensesPage";
import IncomePage from "./Pages/IncomePage";

const App = () => {
  return (
    <div className="container">
      <main>
        <Routes>
          <Route index path="Home" element={<Home />} />
          <Route path="Expenses" element={<ExpensesPage />} />
          <Route path="Income" element={<IncomePage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Menu className="menu" />
    </div>
  );
};

export default App;
