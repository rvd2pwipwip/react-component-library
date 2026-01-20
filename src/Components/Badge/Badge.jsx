import clsx from "clsx";
import styles from "./Badge.module.css";

const Badge = ({ children, onClick = () => {}, color, variant }) => {
  let colorVariant = color ? styles[color] : "";
  let pillVariant = variant === "pill" ? styles[variant] : "";
  const allClasses = clsx(colorVariant, pillVariant);

  return (
    <button className={clsx(styles.badge, allClasses)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Badge;
