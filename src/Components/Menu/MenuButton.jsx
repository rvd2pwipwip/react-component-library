import React from "react";
import Button from "../Button/Button";
import { MenuContext } from "./Menu";

/**
 * Challenge:
 * 6. Access the needed context values in the MenuButton
 *    and MenuDropdown components. See if you can remember
 *    (or figure out again) how those values are used in each
 *    of those components. Once you've done this successfully,
 *    the Menu should start working again (except for the onOpen
 *    callback, which we'll work on fixing soon).
 */

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
