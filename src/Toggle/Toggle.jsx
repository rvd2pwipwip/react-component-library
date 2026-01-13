import React from "react";

/**
 * Challenge:
 * 1. Accept `onToggle` as a prop for the Toggle component
 * 2. Using a useEffect, run the function passed to the
 *    onToggle prop anytime the `on` state changes.
 * 3. In Star.js, pass an onToggle prop to the Toggle
 *    component whose value is a function. That function
 *    can just run a console.log for now.
 * Note: There's more we need to do here, you may notice a
 * small bug we'll need to address later.
 */

const ToggleContext = React.createContext();

const Toggle = ({ children, onToggle }) => {
  const [boolean, setBoolean] = React.useState(false);

  const toggle = () => {
    setBoolean((prevBool) => !prevBool);
  };

  React.useEffect(() => {
    onToggle();
  }, [boolean]);

  return (
    <ToggleContext.Provider value={{ boolean, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default Toggle;
export { ToggleContext };
