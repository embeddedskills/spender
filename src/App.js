import home from './components/home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>{home()}</Router>
  );
}

export default App;
