import React from "react";
import { PlayList, SongInt } from "../types/types";

const Song = ({ id, title, artist, preview, img_medium, img_small, songPlay }: SongInt) => {
  const handleClick = () => {
    const playSong: PlayList = {
      id: 1,
      name: title,
      writer: artist,
      img: img_small,
      src: preview,
    };
    songPlay(playSong);
  };

  return (
    <div onClick={handleClick}>
      <img src={img_small} alt='imd' />
      <p>
        {title} - {artist}
      </p>
    </div>
  );
};

export default Song;
