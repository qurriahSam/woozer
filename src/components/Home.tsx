import React, { useState, useEffect } from "react";
import axios from "axios";
import Song from "./Song";
import { PlayList, DeezerResp } from "../types/types";

const Home = ({ songPlay }: { songPlay: (song: PlayList) => void }) => {
  const [apiSongs, setApiSongs] = useState<DeezerResp[]>([]);
  const [error, setError] = useState<any>({});

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: { q: "sauti sol" },
      headers: {
        "X-RapidAPI-Key": "f16440cf3cmsh4be98b0308b4c28p17aa20jsn0ca4171aba9f",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setApiSongs(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  return (
    <div className='pt-16 pb-16 bg-slate-100'>
      <ul>
        {apiSongs.length > 1
          ? apiSongs.map((data: any) => (
              <li key={data.id}>
                <Song
                  id={data.id}
                  title={data.title}
                  artist={data.artist.name}
                  preview={data.preview}
                  img_small={data.album.cover_small}
                  img_medium={data.album.cover_medium}
                  songPlay={songPlay}
                />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Home;
