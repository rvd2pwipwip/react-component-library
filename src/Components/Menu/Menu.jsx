import React from "react";
import Toggle from "../../Toggle/index";

/**
 * Challenge:
 * 1. Accept `onOpen` as a prop for the Menu component
 * 2. Pass the onOpen prop as the value to Toggle's onToggle prop
 * 3. In index.js, pass an onOpen prop to the Menu
 *    component whose value is a function.
 *    Just use console.log() for now.
 */

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
