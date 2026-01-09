const MenuItem = ({ children, open, toggle }) => {
  console.log(`MenuItem open: ${open} toggle: ${toggle}`);
  return <div className="menu-item">{children}</div>;
};

export default MenuItem;
