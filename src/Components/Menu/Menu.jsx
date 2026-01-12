import React from "react";

const MenuContext = React.createContext();

export default function Menu({ children }) {
  const menuId = React.useId();

  return (
    <MenuContext.Provider value={{ menuId }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
