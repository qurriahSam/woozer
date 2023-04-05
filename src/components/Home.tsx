import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSongs from "../api/api-calls";
import Song from "./Song";
import { PlayList } from "../types/types";

const Home = ({ songPlay }: { songPlay: (song: PlayList) => void }) => {
  const { isError, isLoading, data, error } = useQuery(["posts"], fetchSongs);

  if (isLoading) return <h1>Loading....</h1>;
  if (isError) console.log(error);

  if (isError) return <h1>Error loading data!!!</h1>;

  return (
    <div>
      <ul>
        {data.map((data) => (
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
        ))}
      </ul>
    </div>
  );
};

export default Home;
