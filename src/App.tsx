import React, { useState } from "react";

import Navbar from "./components/Navbar";

import "./App.css";
import Home from "./components/Home";
import Player from "./components/Player";
import { PlayList } from "./types/types";

function App() {
  const [play, setPlay] = useState<PlayList[]>([]);
  const [search, setSearch] = useState("");

  const songSearch = (search: string) => {
    setSearch(search);
  };

  const songPlay = (song: PlayList) => {
    setPlay([song]);
  };

  return (
    <>
      <Navbar songSearch={songSearch} />
      <Home songPlay={songPlay} search={search} />
      <Player play={play} />
    </>
  );
}

export default App;
