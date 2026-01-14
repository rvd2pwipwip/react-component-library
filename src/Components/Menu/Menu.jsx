import React from "react";
import useToggle from "../Hooks/useToggle";

const MenuContext = React.createContext();

const Menu = ({ children }) => {
  const [open, toggleOpen] = useToggle();
  const menuId = React.useId();

  return (
    <MenuContext.Provider value={{ open, toggleOpen, menuId }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
export { MenuContext };
