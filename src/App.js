import { Route, Routes } from "react-router-dom";

import "./App.css";
import Menu from "./Components/Menu/Menu";
import Home from "./Pages/HomePage";
import ExpensesPage from "./Pages/ExpensesPage";
import IncomePage from "./Pages/IncomePage";

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route index path="Home" element={<Home />} />
          <Route path="Expenses" element={<ExpensesPage />} />
          <Route path="Income" element={<IncomePage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Menu className="menu" />
    </>
  );
};

export default App;
