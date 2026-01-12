// import { useState } from "react";
import "./App.css";
// import tito from "./images/tito.jpg";
import Button from "./Components/Button/Button";
import Avatar from "./Components/Avatar";
import Menu from "./Components/Menu/index";
import Star from "./Components/Star";
import Toggle from "./Components/Toggle";
import { FaMoneyBill } from "react-icons/fa6";

// const handleClick = () => console.log("Logging in...");

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

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
      <Toggle>
        <Star />
      </Toggle>
      <br />
      <Menu>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {sports.map((sport) => {
            return <Menu.Item key={sport}>{sport}</Menu.Item>;
          })}
        </Menu.Dropdown>
      </Menu>
    </main>
  );
}

export default App;
