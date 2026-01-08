import Button from "../Button/Button";

const MenuButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default MenuButton;
