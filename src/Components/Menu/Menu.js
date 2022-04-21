import React, { useState } from "react";

import "./menu.scss";
import Backdrop from "../UI/Backdrop";
import MenuContent from "./MenuContent";

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
