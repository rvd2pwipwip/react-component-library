// import { useState } from "react";
import "./App.css";
// import tito from "./images/tito.jpg";
import Button from "./Components/Button/Button";
import Avatar from "./Components/Avatar";
import Menu from "./Components/Menu/Menu";
import MenuButton from "./Components/Menu/MenuButton";
import MenuDropdown from "./Components/Menu/MenuDropdown";
import { FaMoneyBill } from "react-icons/fa6";

/**
 * Challenge:
 * 1. Convert the MenuButton to accept children and
 *    render them. (In this case, the children will
 *    just be the button text)
 * 2. Change the MenuButton below to pass "Sports"
 *    in as a child of the component instead of by
 *    using the `buttonText` prop.
 *
 * NOTE: It's fine that the menu is still broken, I
 * promise we're getting there! 😃
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
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown
          items={["Tennis", "Pickleball", "Racquetball", "Squash"]}
        ></MenuDropdown>
      </Menu>
    </main>
  );
}

export default App;
