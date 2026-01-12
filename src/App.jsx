// import { useState } from "react";
import "./App.css";
// import tito from "./images/tito.jpg";
import Button from "./Components/Button/Button";
import Avatar from "./Components/Avatar";
import Menu from "./Components/Menu/index";
import Toggle from "./Toggle/index";
import { FaMoneyBill } from "react-icons/fa6";
import { BsStar, BsStarFill } from "react-icons/bs";

// const handleClick = () => console.log("Logging in...");

/**
 * Challenge: Refactor the Menu components to use the logic
 * from Toggle instead of doing any logic of its own.
 *
 * 1. Remove all context and state logic from the menu components
 *    !!! Except for the menu context needed for the aria attributes for A11y !!!
 * 2. Using Toggle and its "sub-components, add a menu to this
 *    App component below the Star. Make sure to use a separate
 *    <Toggle> wrapper so the state isn't tied to the Star's
 *    Toggle state
 */

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
  const dances = ["Salsa", "Bachata", "Cha Cha Cha", "Kizomba"];

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
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star " />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
      <br />
      <div className="menuBar">
        <Toggle>
          <Menu>
            <Toggle.Button>
              <Menu.Button>Sports</Menu.Button>
            </Toggle.Button>
            <Toggle.On>
              <Menu.Dropdown>
                {sports.map((sport) => {
                  return <Menu.Item key={sport}>{sport}</Menu.Item>;
                })}
              </Menu.Dropdown>
            </Toggle.On>
          </Menu>
        </Toggle>
        <Toggle>
          <Menu>
            <Toggle.Button>
              <Menu.Button>Dances</Menu.Button>
            </Toggle.Button>
            <Toggle.On>
              <Menu.Dropdown>
                {dances.map((dance) => {
                  return <Menu.Item key={dance}>{dance}</Menu.Item>;
                })}
              </Menu.Dropdown>
            </Toggle.On>
          </Menu>
        </Toggle>
      </div>
    </main>
  );
}

export default App;
