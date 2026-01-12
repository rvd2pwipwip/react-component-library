import React from "react";
import Button from "../Button/Button";
import { MenuContext } from "./Menu";

const MenuButton = ({ children }) => {
  const { toggle } = React.useContext(MenuContext);

  return <Button onClick={toggle}>{children}</Button>;
};

export default MenuButton;
