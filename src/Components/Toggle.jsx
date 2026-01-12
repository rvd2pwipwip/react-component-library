import React from "react";

/**
 * Challenge: set up context!
 * Reminder of the steps:
 * 1. Create a new context (outside the component, but in this file)
 * 2. Export that context instance from the file so we
 *    can use it eleswhere
 * 3. Use the Context Provider to wrap the `children` returned
 *    from this Toggle component
 * 4. Pass the state values to the context value prop for access
 *    from child components later on
 */

const ToggleContext = React.createContext();

const Toggle = ({ children }) => {
  const [boolean, setBoolean] = React.useState(true);

  const toggle = () => {
    setBoolean((prevBool) => !prevBool);
  };

  return (
    <ToggleContext.Provider value={{ boolean, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default Toggle;
export { ToggleContext };
