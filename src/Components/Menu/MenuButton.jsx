import Button from "../Button/Button";

const MenuButton = ({ buttonText, onClick }) => {
  return <Button onClick={onClick}>{buttonText}</Button>;
};

export default MenuButton;
