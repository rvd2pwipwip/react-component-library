import React from "react";

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
