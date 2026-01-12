import React from "react";
import { ToggleContext } from "../../Toggle/Toggle";
import { MenuContext } from "./Menu";

const MenuDropdown = ({ children }) => {
  const { boolean } = React.useContext(ToggleContext);
  const { menuId } = React.useContext(MenuContext);

  return (
    <div className="menu-dropdown" aria-hidden={!boolean} id={menuId}>
      {children}
    </div>
  );
};

export default MenuDropdown;
