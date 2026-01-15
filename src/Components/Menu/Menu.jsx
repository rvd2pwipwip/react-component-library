import React from "react";
import useToggle from "../Hooks/useToggle";

const MenuContext = React.createContext();

const Menu = ({ children, onOpen }) => {
  const { bool: open, toggle: toggleOpen } = useToggle(false, onOpen);
  const menuId = React.useId();

  return (
    <MenuContext.Provider value={{ open, toggleOpen, onOpen, menuId }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
export { MenuContext };
