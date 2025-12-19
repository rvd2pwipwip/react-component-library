// import { useState } from "react";
import "./App.css";
import Button from "./Button";
import { FaMoneyBill } from "react-icons/fa6";

/**
 * Challenge: Add the "FaMoneyBill" icon to the left
 * of the "Buy now!" text in the button
 */

function App() {
  return (
    <main>
      <Button>
        <FaMoneyBill />
        Buy now!
      </Button>
    </main>
  );
}

export default App;
