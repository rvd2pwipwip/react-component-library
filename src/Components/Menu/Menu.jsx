import React from "react";

const MenuContext = React.createContext();

export default function Menu({ children }) {
  const [open, setOpen] = React.useState(false);
  const menuId = React.useId();

  const toggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <MenuContext.Provider value={{ open, toggle, menuId }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
