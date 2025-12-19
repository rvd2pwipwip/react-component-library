// import { useState } from "react";
import "./App.css";
import Button from "./Button";
import { FaMoneyBill } from "react-icons/fa6";

/**
 * Challenge: Add an onClick handler to the Button
 * component instance (the one on this page). Then
 * make whatever changes you need for it to actually
 * work.
 *
 * Clicking the button should log "Logging in..."
 * to the console.
 */

const handleClick = () => console.log("Logging in...");

function App() {
  return (
    <main>
      <Button onClick={handleClick}>
        <FaMoneyBill />
        Buy now!
      </Button>
    </main>
  );
}

export default App;
