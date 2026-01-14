import React from "react";
import Toggle from "../Toggle/index";

const MenuContext = React.createContext();

const Menu = ({ children, onOpen }) => {
  const menuId = React.useId();

  return (
    <Toggle onToggle={onOpen}>
      <MenuContext.Provider value={{ menuId }}>
        <div className="menu" role="menu">
          {children}
        </div>
      </MenuContext.Provider>
    </Toggle>
  );
};

export default Menu;
export { MenuContext };
