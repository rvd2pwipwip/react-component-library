import React from "react";
import useEffectOnUpdate from "../Hooks/useEffectOnUpdate";
import useToggle from "../Hooks/useToggle";

const ToggleContext = React.createContext();

const Toggle = ({ children, onToggle = () => {} }) => {
  const [boolean, toggle] = useToggle();

  useEffectOnUpdate(onToggle, [boolean]);

  return (
    <ToggleContext.Provider value={{ boolean, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default Toggle;
export { ToggleContext };
