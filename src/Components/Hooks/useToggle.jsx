import React from "react";

const useToggle = () => {
  const [boolean, setBoolean] = React.useState(false);

  const toggle = () => {
    setBoolean((prevBool) => !prevBool);
  };

  return [boolean, toggle];
};

export default useToggle;
