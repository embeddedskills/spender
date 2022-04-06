import "./App.css";
import Menu from "./pages/Menu";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="container">
      <main>
        <Home />
      </main>
      <Menu className="menu" />
    </div>
  );
};

export default App;
