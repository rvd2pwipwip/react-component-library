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
 * Challenge: refactor our app to use the Toggle.On
 * and Toggle.Off components to conditionally render the
 * star icons from react-icons. (See Star.js for that code).
 *
 * Reminders:
 * 1. Make sure to copy over the classNames from Star.js too!
 *    I've added some CSS that we don't want to lose.
 * 2. Clicking the Star should flip the Toggle state. Try to
 *    figure out how you can do that 🤔. Hint: we built something
 *    that lets us flip the Toggle state back and forth 😉
 */

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
