import React, { useState } from "react";

import Navbar from "./components/Navbar";

import "./App.css";
import Home from "./components/Home";

function App() {
  const [play, setPlay] = useState({ id: 0, preview: "" });

  const songPlay = (id: number, preview: string) => {
    setPlay({ id: id, preview: preview });
    console.log(play);
  };
  return (
    <>
      <Navbar />
      <Home songPlay={songPlay} />
    </>
  );
}

export default App;
