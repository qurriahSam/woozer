import React, { useState, useEffect } from "react";
import axios from "axios";
import Song from "./Song";
import { PlayList, DeezerResp } from "../types/types";

const Home = ({ songPlay, search }: { songPlay: (song: PlayList) => void; search: string }) => {
  const [apiSongs, setApiSongs] = useState<DeezerResp[]>([]);
  const [error, setError] = useState<any>({});
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    let param = { q: "sauti sol" };
    if (search.length > 1) {
      param = { q: search };
    }
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: param,
      headers: {
        "X-RapidAPI-Key": `${apiKey}`,
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setApiSongs(response.data.data);
      })
      .catch(function (error) {
        setError(error);
        console.error(error);
      });
  }, [search, apiKey]);

  if (search.length > 1) {
    console.log(search);
  }

  return (
    <div className='pt-16 pb-16 bg-slate-100'>
      <ul>
        {apiSongs?.length > 1
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
