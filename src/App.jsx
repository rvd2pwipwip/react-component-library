// import { useState } from "react";
import "./App.css";
import tito from "./images/tito.jpg";
import Button from "./Components/Button";
import Avatar from "./Components/Avatar";
import { FaMoneyBill } from "react-icons/fa6";

const handleClick = () => console.log("Logging in...");

function App() {
  return (
    <main>
      <Button onClick={handleClick} size="lg" variant="success">
        <FaMoneyBill />
        Buy now!
      </Button>
      <Avatar src={tito} alt="Tito Litho" />
      <br />
      <Avatar>BZ</Avatar>
      <br />
      <Avatar />
    </main>
  );
}

export default App;
