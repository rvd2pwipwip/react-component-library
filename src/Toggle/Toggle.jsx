import React from "react";

/**
 * Challenge: We only want to run onToggle() AFTER the
 * first time rendering the component. We can use refs to
 * track whether or not it's the first time this component
 * is rendering
 *
 * 1. Create a ref called `firstRender` which defaults to `true`
 *    (Since when we first create the ref, it's true that it
 *    is the first time the component is rendering)
 * 2. In the useEffect, check if your ref's value is `true`.
 *    If it is, set it to `false`. If it isn't... can you figure
 *    it out??
 * Hint: don't forget that your boolean value will be saved
 * under `firstRender.current`, not just `firstRender`!
 */

const ToggleContext = React.createContext();

const Toggle = ({ children, onToggle }) => {
  const [boolean, setBoolean] = React.useState(false);

  const toggle = () => {
    setBoolean((prevBool) => !prevBool);
  };

  const firstRender = React.useRef(true);

  React.useEffect(() => {
    firstRender.current ? (firstRender.current = false) : onToggle();
  }, [boolean]);

  return (
    <ToggleContext.Provider value={{ boolean, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default Toggle;
export { ToggleContext };
