import React from "react";
import useToggle from "../Hooks/useToggle";

/**
 * Challenge:
 * 1. Remove all references to Toggle in the all 4 Menu
 *    components
 * 2. import and use `useToggle()` to create new state
 *    and toggle functions so we can use those in the Menu.
 *    Call the variables "open" and "toggleOpen".
 * 3. Create context (MenuContext). Make sure to export
 *    it so we can access it in the other Menu components!
 *    (Will be a named export, not default export).
 * 4. Wrap the div below with the context provider
 * 5. What do you think we should pass as the values
 *    to the provider? 🤔
 */

const MenuContext = React.createContext();

const Menu = ({ children }) => {
  const [open, toggleOpen] = useToggle();
  const menuId = React.useId();

  return (
    <MenuContext.Provider value={{ open, toggleOpen, menuId }}>
      <div className="menu" role="menu" onClick={toggleOpen}>
        {children}
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
export { MenuContext };
