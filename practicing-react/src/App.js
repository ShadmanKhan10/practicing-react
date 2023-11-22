import React, { useState } from "react";

function App() {
  const [increment, setIncrement] = useState(0);

  const handleIncrement = () => {
    setIncrement(increment + 1);
  };

  const handleDecrement = () => {
    setIncrement(increment - 1);
  };

  const [message, setMessage] = useState("cart is empty");

  const handleMessage = () => {
    increment >= 1
      ? setMessage(`cart has ${increment}  items`)
      : setMessage("cart is empty");
  };

  return (
    <div className="">
      <button onClick={handleIncrement}>Increment</button>
      <h1>{increment}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleMessage}>Send Message</button>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
