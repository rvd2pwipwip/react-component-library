// import { useState } from "react";
import "./App.css";
import Button from "./Button";
import { FaMoneyBill } from "react-icons/fa6";

/**
 * Challenge: accept the `size` prop and set the `className` of the
 * <button> to:
 *
 * "button-small" if `size` is "sm"
 * "button-large" if `size` is "lg"
 *
 * Note: don't try to manually add a `className` to the Button
 * instance in index.js yet. (DO add `className` to this file
 * as part of the challenge, though.)
 */

const handleClick = () => console.log("Logging in...");

function App() {
  return (
    <main>
      <Button onClick={handleClick} size="lg">
        <FaMoneyBill />
        Buy now!
      </Button>
    </main>
  );
}

export default App;
