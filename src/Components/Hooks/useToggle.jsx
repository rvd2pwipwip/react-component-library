import React from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

const useToggle = ({ initialValue = false, onToggle = () => {} }) => {
  const [bool, setBool] = React.useState(initialValue);

  const toggle = () => {
    setBool((prevBool) => !prevBool);
  };

  useEffectOnUpdate(() => {
    onToggle();
  }, [bool]);

  return { bool, toggle };
};

export default useToggle;
