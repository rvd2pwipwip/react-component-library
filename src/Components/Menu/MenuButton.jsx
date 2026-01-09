import Button from "../Button/Button";

const MenuButton = ({ children, toggle, open }) => {
  console.log(`Menu Button open: ${open} toggle: ${toggle}`);
  return <Button onClick={toggle}>{children}</Button>;
};

export default MenuButton;
