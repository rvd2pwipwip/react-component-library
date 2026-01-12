import React from "react";

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
