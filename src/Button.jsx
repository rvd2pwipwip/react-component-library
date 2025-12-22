import clsx from "clsx";

const Button = ({ size, variant, onClick, children }) => {
  /**
   * Challenge:
   *
   * Accept a `variant` prop and style the Button component
   * accordingly. The values can be `success`, `warning`, or `danger`.
   * Check the Figma design at
   * figma.com/file/xHMiy8Br1RvAMeATTV9jUH/React-Components?node-id=9%3A302
   * for the specific colors to be used for each variant.
   */

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
