import clsx from "clsx";

const Button = ({ size, variant, onClick, children }) => {
  let sizeClass = size ? `button-${size}` : "";
  let variantClass = variant ? variant : "";
  const allClasses = clsx(sizeClass, variantClass);

  return (
    <button className={allClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
