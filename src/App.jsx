// import { useState } from "react";
import "./App.css";
// import tito from "./images/tito.jpg";
import Button from "./Components/Button/Button";
import Avatar from "./Components/Avatar";
import Menu from "./Components/Menu/Menu";
import MenuButton from "./Components/Menu/MenuButton";
import MenuDropdown from "./Components/Menu/MenuDropdown";
import MenuItem from "./Components/Menu/MenuItem";
import { FaMoneyBill } from "react-icons/fa6";

const handleClick = () => console.log("Logging in...");

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  /**
   * 1. MenuDropdown should render children instead of items
   * 2. MenuItem (new component you need to create) should also
   *    render children. Grab the <div className="menu-item">
   *    from MenuDropdown before deleting it if you want to be
   *    lazy :)
   * 3. Map over the `sports` array inside MenuDropdown in this
   *    file and render a MenuItem for each sport in the array
   */

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
        <MenuDropdown>
          {sports.map((sport) => {
            return <MenuItem key={sport}>{sport}</MenuItem>;
          })}
        </MenuDropdown>
      </Menu>
    </main>
  );
}

export default App;
