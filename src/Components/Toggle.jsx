import React from "react";

/**
 * Challenge:
 *
 * 1. Create a Toggle component that initializes its own boolean state.
 * 2. Create a function called `toggle` in that component that flips the
 *    boolean when the function runs.
 * NOTE: Don't worry about rendering anything yet
 */

const Toggle = ({ children }) => {
  const [boolean, setBoolean] = React.useState(true);

  const toggle = () => {
    setBoolean((prevBool) => !prevBool);
  };

  return children;
};

export default Toggle;
