import React from "react";

/** Discovery Challenge 2:
 * Make it so the children of MenuDropdown also have
 * access to toggle and open.
 */

const MenuDropdown = ({ children, open, toggle }) => {
  console.log(`MenuDropdown open: ${open} toggle: ${toggle}`);
  return (
    open && (
      <div className="menu-dropdown">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { open, toggle });
        })}
      </div>
    )
  );
};

export default MenuDropdown;
