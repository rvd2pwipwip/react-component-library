import React from "react";

/**
 * Mini-quiz:
 * What are the 2 parameters in React.useEffect?
 * 1. Callback function
 * 2. Array of dependencies
 *
 * Mini-challenge:
 * Update our custom hook function to accept
 * the same parameters we talked about above
 */

/**
 * Mini-challenge:
 * Update the code to use our hook's parameters
 * instead of the values from the Toggle component
 */

const useEffectOnUpdate = (fxFunction, deps) => {
  const firstRender = React.useRef(true);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      fxFunction();
    }
  }, deps);
};

export default useEffectOnUpdate;
