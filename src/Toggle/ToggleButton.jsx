import React from "react";
import { ToggleContext } from "./Toggle";

/**
 * Challenge:
 *
 * 1. Create a ToggleButton component
 * 2. Receive the `toggle` function from context (2 parts!)
 * 3. Render a div with an onClick that calls `toggle`
 *    - also renders children
 */

const ToggleButton = ({ children }) => {
  const { toggle } = React.useContext(ToggleContext);

  return <div onClick={toggle}>{children}</div>;
};

export default ToggleButton;
