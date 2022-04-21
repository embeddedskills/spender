import { NavLink } from "react-router-dom";

import "./menuContent.scss";

const MenuContent = (props) => {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Income">Income</NavLink>
            </li>
            <li>
              <NavLink to="/Expenses">Expenses</NavLink>
            </li>
            <li>Settings</li>
            <li>Help</li>
          </ul>
        </div>
        <span className="close" onClick={props.onClick}>
          X
        </span>
      </div>
    </>
  );
};

export default MenuContent;
