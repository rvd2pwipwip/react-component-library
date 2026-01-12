import React from "react";
import Button from "../Button/Button";
import { ToggleContext } from "../../Toggle/Toggle";
import { MenuContext } from "./Menu";

const MenuButton = ({ children }) => {
  const { boolean } = React.useContext(ToggleContext);
  const { menuId } = React.useContext(MenuContext);

  return (
    <Button aria-expanded={boolean} aria-haspopup="true" aria-controls={menuId}>
      {children}
    </Button>
  );
};

export default MenuButton;
