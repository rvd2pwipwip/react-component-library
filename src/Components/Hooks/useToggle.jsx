import React from "react";

/**
 * Challenge:
 * 1. Pass a parameter called `initialValue` to our custom hook.
 *    Have its default be `false` in case that parameter isn't
 *    provided when useToggle() is called.
 * 2. Initialize state with the `initialValue` parameter
 */

const useToggle = (initialValue = false) => {
  const [bool, setBool] = React.useState(initialValue);

  const toggle = () => {
    setBool((prevBool) => !prevBool);
  };

  return { bool, toggle };
};

export default useToggle;
