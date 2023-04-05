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

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-slate-50'>
      <AudioPlayer activeUI={{ all: true }} playList={!!play[0] ? play : placeholder} />
    </div>
  );
}

export default Player;
