export interface SongInt {
  id: number;
  title: string;
  artist: string;
  preview: string;
  img_small: string;
  img_medium: string;
  songPlay: (id: number, preview: string) => void;
}

export interface DeezerResp {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: {
    id: number;
    name: string;
    link: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    tracklist: string;
    type: string;
  };
  album: {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    tracklist: string;
    type: string;
  };
  type: string;
}

export interface ApiResp {
  isLoading: boolean;
  isError: boolean;
  data: DeezerResp[] | undefined;
  error: string | unknown;
}
