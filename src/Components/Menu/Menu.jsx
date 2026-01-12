import React from "react";

const MenuContext = React.createContext();

export default function Menu({ children }) {
  /**
   * Challenge:
   * Using what you know now, complete the Menu component so
   * everything is working again via Context + State
   */

  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="menu">
      <MenuContext.Provider value={{ open, toggle }}>
        {children}
      </MenuContext.Provider>
    </div>
  );
}

export { MenuContext };
