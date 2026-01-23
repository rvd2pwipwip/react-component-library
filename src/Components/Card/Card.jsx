import { GrHomeRounded } from "react-icons/gr";
import clsx from "clsx";
import styles from "./Card.module.css";

const Card = ({
  children,
  icon = GrHomeRounded,
  iconBg = "#3f75fe",
  iconColor = "white",
}) => {
  const IconComponent = icon;
  const iconContainerStyles = {
    backgroundColor: iconBg,
    color: iconColor,
  };
  return (
    <div className={clsx(styles.card)}>
      <div className={clsx(styles.cardbody)}>
        <div className={clsx(styles.iconContainer)} style={iconContainerStyles}>
          <IconComponent className={clsx(styles.icon)} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
