// import { useState } from "react";
import "./App.css";
// import tito from "./images/tito.jpg";
import Button from "./Components/Button/Button";
import Avatar from "./Components/Avatar";
import Menu from "./Components/Menu/index";
import Star from "./Components/Star";
import Toggle from "./Toggle/index";
import { FaMoneyBill } from "react-icons/fa6";

// const handleClick = () => console.log("Logging in...");

/**
 * Challenge:
 * Part 1:
 * Create a ToggleDisplay component and attach
 * it to Toggle as Toggle.Display.
 *
 * It should grab the `on` value from the Toggle context
 * and render children by calling children as a function,
 * passing the `on` value to it. (E.g. children(on)).
 */

/**
 * Challenge:
 * Part 2:
 * Instead of rendering Toggle.On and Toggle.Off, use a single
 * Toggle.Display to render the div below. Toggle.Display will
 * take a function as a child (don't forget to wrap that function
 * in curly braces since it's JS inside of JSX) and will receive
 * the `on` state as its parameter.
 *
 * From that function, you should return the div below, but this
 * time conditionally render the `filled` className based on
 * the value of `on`.
 *
 * You'll know it worked if clicking the box shows a transition
 * between the white background and the blue background. See
 * style.css for details on what's happening there.
 */

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.Display>
            {(boolean) => {
              return <div className={`box ${boolean ? "filled" : ""}`}></div>;
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle>
    </>
  );
  // const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
  // const dances = ["Salsa", "Bachata", "Cha Cha Cha", "Kizomba"];
  // return (
  //   <main>
  //     {/* <Button onClick={handleClick} size="lg" variant="success">
  //       <FaMoneyBill />
  //       Buy now!
  //     </Button> */}
  //     {/* <Avatar src={tito} alt="Tito Litho" />
  //     <br /> */}
  //     {/* <Avatar>BZ</Avatar>
  //     <br /> */}
  //     {/* <Avatar /> */}
  //     <Star />
  //     <br />
  //     <div className="menuBar">
  //       <Menu
  //         onOpen={() => {
  //           console.log("menu open");
  //         }}
  //       >
  //         <Menu.Button>Sports</Menu.Button>
  //         <Menu.Dropdown>
  //           {sports.map((sport) => {
  //             return <Menu.Item key={sport}>{sport}</Menu.Item>;
  //           })}
  //         </Menu.Dropdown>
  //       </Menu>
  //       <Menu
  //         onOpen={() => {
  //           console.log("menu open");
  //         }}
  //       >
  //         <Menu.Button>Dances</Menu.Button>
  //         <Menu.Dropdown>
  //           {dances.map((dance) => {
  //             return <Menu.Item key={dance}>{dance}</Menu.Item>;
  //           })}
  //         </Menu.Dropdown>
  //       </Menu>
  //     </div>
  //   </main>
  // );
}

export default App;
