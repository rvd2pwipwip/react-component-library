import React from "react";
import { ToggleContext } from "./Toggle";

/**
 * Challenge:
 *
 * 1. Create a new component, ToggleOn, that accepts children
 *    in props
 * 2. Receive the `on` state from context
 * 3. Conditionally render `children` if `on` is true. If `on`
 *    is false, render `null` instead of `children`
 */

const ToggleOn = ({ children }) => {
  const { boolean } = React.useContext(ToggleContext);
  // render children based on context boolean
  return boolean ? children : null;
};

export default ToggleOn;
