import React from "react";

const useToggle = () => {
  const [bool, setBool] = React.useState(false);

  const toggle = () => {
    setBool((prevBool) => !prevBool);
  };

  return { bool, toggle };
};

export default useToggle;
