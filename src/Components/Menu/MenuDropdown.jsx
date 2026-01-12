import React from "react";
import { MenuContext } from "./Menu";

const MenuDropdown = ({ children }) => {
  const { open } = React.useContext(MenuContext);

  return open && <div className="menu-dropdown">{children}</div>;
};

export default MenuDropdown;
