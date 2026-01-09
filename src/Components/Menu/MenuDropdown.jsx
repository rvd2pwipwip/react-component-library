const MenuDropdown = ({ children, open }) => {
  return open && <div className="menu-dropdown">{children}</div>;
};

export default MenuDropdown;
