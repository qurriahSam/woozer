import React from "react";
import { SongInt } from "../types/types";

const Song = ({ id, title, artist, preview, img_medium, img_small, songPlay }: SongInt) => {
  return (
    <div>
      <img src={img_small} alt='imd' />
      <p>
        {title} - {artist}
      </p>
    </div>
  );
};

export default Song;
