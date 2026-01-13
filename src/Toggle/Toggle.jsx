import React from "react";

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
