import React from "react";
import { MenuContext } from "./Menu";

const MenuDropdown = ({ children }) => {
  const { open, menuId } = React.useContext(MenuContext);

  return (
    open && (
      <div className="menu-dropdown" aria-hidden={!open} id={menuId}>
        {children}
      </div>
    )
  );
};

export default MenuDropdown;
