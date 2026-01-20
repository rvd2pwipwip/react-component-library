// import { useState } from "react";
import "./App.css";
// import tito from "./images/tito.jpg";
import Button from "./Components/Button/Button";
import Badge from "./Components/Badge/Badge";
import Avatar from "./Components/Avatar";
import Menu from "./Components/Menu/index";
import Star from "./Components/Star";
import Toggle from "./Components/Toggle/index";
import { FaMoneyBill } from "react-icons/fa6";

const handleClick = () => console.log("Logging in...");
const handleBadgeClick = () => console.log("Badge clicked");

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
  const dances = ["Salsa", "Bachata", "Cha Cha Cha", "Kizomba"];
  return (
    <main>
      <Button onClick={handleClick} size="lg" variant="success">
        <FaMoneyBill />
        Buy now!
      </Button>
      <br />
      <Badge onClick={handleBadgeClick} color="yellow" variant="pill">
        Badge
      </Badge>
      {/* <Avatar src={tito} alt="Tito Litho" />
      <br /> */}
      {/* <Avatar>BZ</Avatar>
      <br /> */}
      {/* <Avatar /> */}
      {/* <Star /> */}
      <br />
      <div className="menuBar">
        <Menu onOpen={() => console.log("opened/closed")}>
          <Menu.Button>Sports</Menu.Button>
          <Menu.Dropdown>
            {sports.map((sport) => {
              return <Menu.Item key={sport}>{sport}</Menu.Item>;
            })}
          </Menu.Dropdown>
        </Menu>
        <Menu>
          <Menu.Button>Dances</Menu.Button>
          <Menu.Dropdown>
            {dances.map((dance) => {
              return <Menu.Item key={dance}>{dance}</Menu.Item>;
            })}
          </Menu.Dropdown>
        </Menu>
      </div>
    </main>
  );
}

export default App;
