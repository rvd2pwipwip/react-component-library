import React from "react";
import { ToggleContext } from "./Toggle";

const ToggleDisplay = ({ children }) => {
  const { boolean } = React.useContext(ToggleContext);
  return children(boolean);
};

export default ToggleDisplay;
