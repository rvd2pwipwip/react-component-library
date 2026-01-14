import React from "react";
import { ToggleContext } from "./Toggle";

const ToggleOff = ({ children }) => {
  const { boolean } = React.useContext(ToggleContext);
  // render children based on context boolean
  return boolean ? null : children;
};

export default ToggleOff;
