import React from "react";
import useEffectOnUpdate from "../Hooks/useEffectOnUpdate";

const ToggleContext = React.createContext();

const Toggle = ({ children, onToggle = () => {} }) => {
  const [boolean, setBoolean] = React.useState(false);

  const toggle = () => {
    setBoolean((prevBool) => !prevBool);
  };

  /**
   * Challenge: use our new, shiny custom hook
   * to set up the effect again. You'll know it's
   * working when the console log runs after clicking
   * the box, but not on the initial render.
   */

  useEffectOnUpdate(onToggle, [boolean]);

  return (
    <ToggleContext.Provider value={{ boolean, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default Toggle;
export { ToggleContext };
