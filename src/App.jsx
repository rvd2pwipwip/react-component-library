// import { useState } from "react";
import "./App.css";
import Button from "./Button";
import { FaMoneyBill } from "react-icons/fa6";

const handleClick = () => console.log("Logging in...");

function App() {
  return (
    <main>
      <Button onClick={handleClick} size="lg" className="green">
        <FaMoneyBill />
        Buy now!
      </Button>
    </main>
  );
}

export default App;
