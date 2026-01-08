import { IoPersonSharp } from "react-icons/io5";

const bckgColors = ["navy", "pink", "red", "blue", "green"];
const setRandomColor = () => {
  return bckgColors[Math.floor(Math.random() * bckgColors.length)];
};

const Avatar = ({ src, alt, children }) => {
  let avatarType;

  if (src && alt) {
    avatarType = (
      <div className="avatar">
        <img src={src} alt={alt}></img>
      </div>
    );
  } else if (children) {
    avatarType = (
      <div className={`avatar avatar-letters ${setRandomColor()}`}>
        {children}
      </div>
    );
  } else {
    avatarType = (
      <div className={`avatar avatar-icon ${setRandomColor()}`}>
        <IoPersonSharp />
      </div>
    );
  }

  return <>{avatarType}</>;
};

export default Avatar;
