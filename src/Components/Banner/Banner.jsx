import {
  IoCheckmarkCircle,
  IoWarning,
  IoCloseCircle,
  IoInformationCircle,
} from "react-icons/io5";
import clsx from "clsx";
import styles from "./Banner.module.css";

const Banner = ({ children, title = "Banner title", status = "neutral" }) => {
  const iconMap = {
    success: <IoCheckmarkCircle className={styles.icon} />,
    warning: <IoWarning className={styles.icon} />,
    danger: <IoCloseCircle className={styles.icon} />,
    neutral: <IoInformationCircle className={styles.icon} />,
  };
  
  const icon = iconMap[status];

  return (
    <div className={clsx(styles.banner, styles[status])}>
      {icon}
      <div className={styles.body}>
        <p className={styles.title}>{title}</p>
        {children && <p className={styles.text}>{children}</p>}
      </div>
    </div>
  );
};

export default Banner;