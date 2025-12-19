const Button = ({ children, onClick, size }) => {
  const setSize = () => {
    if (size === "sm") return "button-small";
    if (size === "lg") return "button-large";
    return;
  };

  return (
    <button onClick={onClick} className={setSize()}>
      {children}
    </button>
  );
};

export default Button;

//  * "button-small" if `size` is "sm"
//  * "button-large" if `size` is "lg"
