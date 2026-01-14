import React from "react";

const useToggle = () => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen((prevBool) => !prevBool);
  };

  return [open, toggleOpen];
};

export default useToggle;
