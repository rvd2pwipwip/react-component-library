import React from "react";
import Toggle from "../../Toggle/index";
import { ToggleContext } from "../../Toggle/Toggle";
import { MenuContext } from "./Menu";

const MenuDropdown = ({ children }) => {
  const { boolean } = React.useContext(ToggleContext);
  const { menuId } = React.useContext(MenuContext);

  return (
    <Toggle.On>
      <div className="menu-dropdown" aria-hidden={!boolean} id={menuId}>
        {children}
      </div>
    </Toggle.On>
  );
};

export default MenuDropdown;
