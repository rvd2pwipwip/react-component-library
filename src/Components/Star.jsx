import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from "./Hooks/useToggle";

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
