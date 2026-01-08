// import { useState } from "react";
import "./App.css";
// import tito from "./images/tito.jpg";
import Button from "./Components/Button/Button";
import Avatar from "./Components/Avatar";
import Menu from "./Components/Menu/Menu";
import { FaMoneyBill } from "react-icons/fa6";

/**
 * Challenge:
 * 1. Convert the Menu component to use props.children
 *    instead of taking an `items` prop. (We'll update
 *    the MenuButton and MenuDropdown components later.)
 *    See note inside the Menu.js file for more info
 *
 * 2. import MenuButton and MenuDropdown into THIS file
 *    and render them as children of the Menu component.
 *    Remember to pass the buttonText and items array to
 *    the components that need those props to function.
 *    (We'll also be updating that soon!)
 *
 * NOTE: The functionality of the menu will be broken after
 * these changes, but that's okay! As such, don't worry
 * about moving the state or toggle function from the Menu;
 * there's more we need to learn before we can do that.
 */

const handleClick = () => console.log("Logging in...");

function App() {
  return (
    <main>
      {/* <Button onClick={handleClick} size="lg" variant="success">
        <FaMoneyBill />
        Buy now!
      </Button> */}
      {/* <Avatar src={tito} alt="Tito Litho" />
      <br /> */}
      {/* <Avatar>BZ</Avatar>
      <br /> */}
      {/* <Avatar /> */}
      <Menu
        buttonText="Sports"
        items={["Tennis", "Pickleball", "Racquetball", "Squash"]}
      />
    </main>
  );
}

export default App;
