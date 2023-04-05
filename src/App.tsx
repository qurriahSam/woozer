import React, { useState } from "react";

import Navbar from "./components/Navbar";

import "./App.css";
import Home from "./components/Home";
import Player from "./components/Player";
import { PlayList } from "./types/types";

function App() {
  const [play, setPlay] = useState<PlayList[]>([]);

  const songPlay = (song: PlayList) => {
    setPlay([song]);
  };

  return (
    <>
      <Navbar />
      <Home songPlay={songPlay} />
      <Player play={play} />
    </>
  );
}

export default App;
