import React from "react";
import Toggle from "../../Toggle/index";

const MenuContext = React.createContext();

export default function Menu({ children }) {
  const menuId = React.useId();

  return (
    <Toggle>
      <MenuContext.Provider value={{ menuId }}>
        <div className="menu" role="menu">
          {children}
        </div>
      </MenuContext.Provider>
    </Toggle>
  );
}

export { MenuContext };
