import React from "react";
import Button from "../Button/Button";
import { MenuContext } from "./Menu";

const MenuButton = ({ children }) => {
  const { open, toggleOpen, menuId } = React.useContext(MenuContext);

  return (
    <Button
      onClick={toggleOpen}
      aria-expanded={open}
      aria-haspopup="true"
      aria-controls={menuId}
    >
      {children}
    </Button>
  );
};

export default MenuButton;
