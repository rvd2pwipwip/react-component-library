import React from "react";
import Button from "../Button/Button";
import Toggle from "../../Toggle/index";
import { ToggleContext } from "../../Toggle/Toggle";
import { MenuContext } from "./Menu";

const MenuButton = ({ children }) => {
  const { boolean } = React.useContext(ToggleContext);
  const { menuId } = React.useContext(MenuContext);

  return (
    <Toggle.Button>
      <Button
        aria-expanded={boolean}
        aria-haspopup="true"
        aria-controls={menuId}
      >
        {children}
      </Button>
    </Toggle.Button>
  );
};

export default MenuButton;
