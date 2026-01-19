import clsx from "clsx";
import styles from "./Button.module.css";

const Button = ({ size, variant, onClick, children }) => {
  let sizeClass = size ? styles[size] : "";
  let variantClass = variant ? styles[variant] : "";
  const allClasses = clsx(sizeClass, variantClass);

  return (
    <button className={clsx(styles.button, allClasses)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
