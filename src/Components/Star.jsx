import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from "./Hooks/useToggle";

/**
 * Challenge: Remove all parts of our Toggle component
 * (don't delete the react-icons stars though!) and use
 * the useToggle hook to conditionally render the stars.
 * Make sure to add an onClick that runs the `toggle` function
 * you get from useToggle()
 */

const Star = () => {
  const [boolean, toggle] = useToggle();

  return (
    <div onClick={toggle}>
      {boolean ? (
        <BsStarFill className="star filled" />
      ) : (
        <BsStar className="star " />
      )}
    </div>
  );
};

export default Star;
