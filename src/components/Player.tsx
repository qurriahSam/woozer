import { useState } from "react";
import AudioPlayer from "react-modern-audio-player";
import { PlayList } from "../types/types";

function Player({ play }: { play: PlayList[] }) {
  const placeholder = [
    {
      src: "",
      id: 1,
    },
  ];

  return <AudioPlayer activeUI={{ all: true }} playList={false ? play : placeholder} />;
}

export default Player;
