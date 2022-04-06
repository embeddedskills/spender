import React, { useState } from "react";
import ReactDOM from "react-dom";

import Backdrop from "../Components/UI/Backdrop";
import MenuContent from "../Components/Menu/MenuContent";
import "./menu.scss";

/**
 * Header menu function
 *
 * @returns
 */

const Menu = () => {
  const [menuIsToggled, setMenuIsToggled] = useState(false);

  const toggleHandler = () => {
    setMenuIsToggled((initialState) => !initialState);
  };

  return (
    <div className="menu">
      <div className="menu__title" onClick={toggleHandler}>
        MENU
      </div>
      {menuIsToggled && <MenuContent onClick={toggleHandler} />}
      {menuIsToggled && <Backdrop onClick={toggleHandler} />}
    </div>
  );
};

export default Menu;
