import axios from "axios";

const resp = {
  data: [
    {
      id: 866229942,
      readable: true,
      title: "Suzanna",
      title_short: "Suzanna",
      title_version: "",
      link: "https://www.deezer.com/track/866229942",
      duration: 231,
      rank: 414225,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-2.dzcdn.net/stream/c-26945f1cce96e53e729e9373d2b0fbba-8.mp3",
      md5_image: "c4f0888eeaf101a016ab3d43a612a404",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 129798812,
        title: "Suzanna",
        cover: "https://api.deezer.com/album/129798812/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/c4f0888eeaf101a016ab3d43a612a404/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/c4f0888eeaf101a016ab3d43a612a404/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/c4f0888eeaf101a016ab3d43a612a404/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/c4f0888eeaf101a016ab3d43a612a404/1000x1000-000000-80-0-0.jpg",
        md5_image: "c4f0888eeaf101a016ab3d43a612a404",
        tracklist: "https://api.deezer.com/album/129798812/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1200766322,
      readable: true,
      title: "Kuliko Jana",
      title_short: "Kuliko Jana",
      title_version: "",
      link: "https://www.deezer.com/track/1200766322",
      duration: 310,
      rank: 356311,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-e.dzcdn.net/stream/c-e8790776a91b19bfcca1c8b50ee6ed48-4.mp3",
      md5_image: "bcc0e69c6059d308d3eb9f1c4d952fec",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 198378242,
        title: "Kuliko Jana",
        cover: "https://api.deezer.com/album/198378242/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/bcc0e69c6059d308d3eb9f1c4d952fec/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/bcc0e69c6059d308d3eb9f1c4d952fec/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/bcc0e69c6059d308d3eb9f1c4d952fec/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/bcc0e69c6059d308d3eb9f1c4d952fec/1000x1000-000000-80-0-0.jpg",
        md5_image: "bcc0e69c6059d308d3eb9f1c4d952fec",
        tracklist: "https://api.deezer.com/album/198378242/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 964375082,
      readable: true,
      title: "Insecure",
      title_short: "Insecure",
      title_version: "",
      link: "https://www.deezer.com/track/964375082",
      duration: 190,
      rank: 260587,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-c.dzcdn.net/stream/c-c8d6c8ba2c0ed264779866646620af31-4.mp3",
      md5_image: "f093ffa4a33bc988398fcaeca86d2086",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 149077512,
        title: "Midnight Train",
        cover: "https://api.deezer.com/album/149077512/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/1000x1000-000000-80-0-0.jpg",
        md5_image: "f093ffa4a33bc988398fcaeca86d2086",
        tracklist: "https://api.deezer.com/album/149077512/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1049856412,
      readable: true,
      title: "Time Flies (feat. Sauti Sol)",
      title_short: "Time Flies (feat. Sauti Sol)",
      title_version: "",
      link: "https://www.deezer.com/track/1049856412",
      duration: 224,
      rank: 349597,
      explicit_lyrics: false,
      explicit_content_lyrics: 6,
      explicit_content_cover: 2,
      preview: "https://cdns-preview-5.dzcdn.net/stream/c-599e012612ed7734f4ddcf30a28ae580-3.mp3",
      md5_image: "28ca25b7af29ea778c28887beabc04ff",
      artist: {
        id: 4338602,
        name: "Burna Boy",
        link: "https://www.deezer.com/artist/4338602",
        picture: "https://api.deezer.com/artist/4338602/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/5f6655125d363a417f7b2e3226787719/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/5f6655125d363a417f7b2e3226787719/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/5f6655125d363a417f7b2e3226787719/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/5f6655125d363a417f7b2e3226787719/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/4338602/top?limit=50",
        type: "artist",
      },
      album: {
        id: 166840522,
        title: "Twice As Tall",
        cover: "https://api.deezer.com/album/166840522/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/28ca25b7af29ea778c28887beabc04ff/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/28ca25b7af29ea778c28887beabc04ff/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/28ca25b7af29ea778c28887beabc04ff/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/28ca25b7af29ea778c28887beabc04ff/1000x1000-000000-80-0-0.jpg",
        md5_image: "28ca25b7af29ea778c28887beabc04ff",
        tracklist: "https://api.deezer.com/album/166840522/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 2021992367,
      readable: true,
      title: "Lil Mama",
      title_short: "Lil Mama",
      title_version: "",
      link: "https://www.deezer.com/track/2021992367",
      duration: 224,
      rank: 308505,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-d.dzcdn.net/stream/c-db40341eb8810c79e464aa5f336e9a89-4.mp3",
      md5_image: "79d0e644e0ec3e13def167beb913e2cd",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 376673427,
        title: "Lil Mama",
        cover: "https://api.deezer.com/album/376673427/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/79d0e644e0ec3e13def167beb913e2cd/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/79d0e644e0ec3e13def167beb913e2cd/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/79d0e644e0ec3e13def167beb913e2cd/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/79d0e644e0ec3e13def167beb913e2cd/1000x1000-000000-80-0-0.jpg",
        md5_image: "79d0e644e0ec3e13def167beb913e2cd",
        tracklist: "https://api.deezer.com/album/376673427/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1777181447,
      readable: true,
      title: "Africa",
      title_short: "Africa",
      title_version: "",
      link: "https://www.deezer.com/track/1777181447",
      duration: 236,
      rank: 302243,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-9.dzcdn.net/stream/c-9d92f7b6b59c605823003f187179070f-4.mp3",
      md5_image: "2546f21640c2733587b84f46e14b85fb",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 324301877,
        title: "Afrikan Sauce",
        cover: "https://api.deezer.com/album/324301877/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/1000x1000-000000-80-0-0.jpg",
        md5_image: "2546f21640c2733587b84f46e14b85fb",
        tracklist: "https://api.deezer.com/album/324301877/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 104400522,
      readable: true,
      title: "Sura Yako",
      title_short: "Sura Yako",
      link: "https://www.deezer.com/track/104400522",
      duration: 237,
      rank: 268887,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview: "https://cdns-preview-f.dzcdn.net/stream/c-fd20d563f3ea8836039310fe52051982-3.mp3",
      md5_image: "d20ab9aba079bbe65003a38ec5f1df7a",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 10863278,
        title: "Sura Yako",
        cover: "https://api.deezer.com/album/10863278/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/d20ab9aba079bbe65003a38ec5f1df7a/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/d20ab9aba079bbe65003a38ec5f1df7a/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/d20ab9aba079bbe65003a38ec5f1df7a/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/d20ab9aba079bbe65003a38ec5f1df7a/1000x1000-000000-80-0-0.jpg",
        md5_image: "d20ab9aba079bbe65003a38ec5f1df7a",
        tracklist: "https://api.deezer.com/album/10863278/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 370958631,
      readable: true,
      title: "Love Again (feat. Sauti Sol)",
      title_short: "Love Again (feat. Sauti Sol)",
      title_version: "",
      link: "https://www.deezer.com/track/370958631",
      duration: 251,
      rank: 300693,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview: "https://cdns-preview-7.dzcdn.net/stream/c-7552e7d91426ab646af629425f1a2608-4.mp3",
      md5_image: "4f7fb1f63c43692adc2b399f683f3381",
      artist: {
        id: 4243694,
        name: "C4 Pedro",
        link: "https://www.deezer.com/artist/4243694",
        picture: "https://api.deezer.com/artist/4243694/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/50cad03ce1a4fd5374a7bd2daf18bfdb/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/50cad03ce1a4fd5374a7bd2daf18bfdb/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/50cad03ce1a4fd5374a7bd2daf18bfdb/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/50cad03ce1a4fd5374a7bd2daf18bfdb/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/4243694/top?limit=50",
        type: "artist",
      },
      album: {
        id: 42799531,
        title: "Love Again (feat. Sauti Sol)",
        cover: "https://api.deezer.com/album/42799531/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/4f7fb1f63c43692adc2b399f683f3381/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/4f7fb1f63c43692adc2b399f683f3381/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/4f7fb1f63c43692adc2b399f683f3381/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/4f7fb1f63c43692adc2b399f683f3381/1000x1000-000000-80-0-0.jpg",
        md5_image: "4f7fb1f63c43692adc2b399f683f3381",
        tracklist: "https://api.deezer.com/album/42799531/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1214226232,
      readable: true,
      title: "My Kind of Woman",
      title_short: "My Kind of Woman",
      title_version: "",
      link: "https://www.deezer.com/track/1214226232",
      duration: 198,
      rank: 257310,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview: "https://cdns-preview-c.dzcdn.net/stream/c-c0a3df25d2840b558c80179390520b0a-3.mp3",
      md5_image: "18046a195aad30382b9550146e7cf772",
      artist: {
        id: 8686952,
        name: "Ric Hassani",
        link: "https://www.deezer.com/artist/8686952",
        picture: "https://api.deezer.com/artist/8686952/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/e41cfb409fe03d01fcf98cafc528251e/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/e41cfb409fe03d01fcf98cafc528251e/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/e41cfb409fe03d01fcf98cafc528251e/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/e41cfb409fe03d01fcf98cafc528251e/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/8686952/top?limit=50",
        type: "artist",
      },
      album: {
        id: 201092812,
        title: "The Prince I Became",
        cover: "https://api.deezer.com/album/201092812/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/18046a195aad30382b9550146e7cf772/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/18046a195aad30382b9550146e7cf772/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/18046a195aad30382b9550146e7cf772/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/18046a195aad30382b9550146e7cf772/1000x1000-000000-80-0-0.jpg",
        md5_image: "18046a195aad30382b9550146e7cf772",
        tracklist: "https://api.deezer.com/album/201092812/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 964375072,
      readable: true,
      title: "Midnight Train",
      title_short: "Midnight Train",
      title_version: "",
      link: "https://www.deezer.com/track/964375072",
      duration: 232,
      rank: 222998,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-8.dzcdn.net/stream/c-8272184e6163f2353b1ce245bdae8ba8-4.mp3",
      md5_image: "f093ffa4a33bc988398fcaeca86d2086",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 149077512,
        title: "Midnight Train",
        cover: "https://api.deezer.com/album/149077512/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/1000x1000-000000-80-0-0.jpg",
        md5_image: "f093ffa4a33bc988398fcaeca86d2086",
        tracklist: "https://api.deezer.com/album/149077512/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1777181357,
      readable: true,
      title: "Girl Next Door",
      title_short: "Girl Next Door",
      title_version: "",
      link: "https://www.deezer.com/track/1777181357",
      duration: 189,
      rank: 172746,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-5.dzcdn.net/stream/c-50ecb72269e66b81c96f93de1c7828ea-4.mp3",
      md5_image: "2546f21640c2733587b84f46e14b85fb",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 324301877,
        title: "Afrikan Sauce",
        cover: "https://api.deezer.com/album/324301877/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/1000x1000-000000-80-0-0.jpg",
        md5_image: "2546f21640c2733587b84f46e14b85fb",
        tracklist: "https://api.deezer.com/album/324301877/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1777181387,
      readable: true,
      title: "Short N Sweet",
      title_short: "Short N Sweet",
      title_version: "",
      link: "https://www.deezer.com/track/1777181387",
      duration: 223,
      rank: 280754,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-4.dzcdn.net/stream/c-4f72e8851fb32a3af11db28f62303ee8-4.mp3",
      md5_image: "2546f21640c2733587b84f46e14b85fb",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 324301877,
        title: "Afrikan Sauce",
        cover: "https://api.deezer.com/album/324301877/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/1000x1000-000000-80-0-0.jpg",
        md5_image: "2546f21640c2733587b84f46e14b85fb",
        tracklist: "https://api.deezer.com/album/324301877/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1777181367,
      readable: true,
      title: "Afrikan Star",
      title_short: "Afrikan Star",
      title_version: "",
      link: "https://www.deezer.com/track/1777181367",
      duration: 194,
      rank: 271621,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-a.dzcdn.net/stream/c-a0a89d72ebcc6e8145d07640791a7132-4.mp3",
      md5_image: "2546f21640c2733587b84f46e14b85fb",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 324301877,
        title: "Afrikan Sauce",
        cover: "https://api.deezer.com/album/324301877/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/2546f21640c2733587b84f46e14b85fb/1000x1000-000000-80-0-0.jpg",
        md5_image: "2546f21640c2733587b84f46e14b85fb",
        tracklist: "https://api.deezer.com/album/324301877/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1199714542,
      readable: true,
      title: "Isabella",
      title_short: "Isabella",
      title_version: "",
      link: "https://www.deezer.com/track/1199714542",
      duration: 212,
      rank: 225489,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-0.dzcdn.net/stream/c-09c25fec1f28113a9c2f07f59d500e13-4.mp3",
      md5_image: "ad2127873cd90af9f88383d8b072a6ba",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 198157002,
        title: "Live and Die In Afrika",
        cover: "https://api.deezer.com/album/198157002/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/1000x1000-000000-80-0-0.jpg",
        md5_image: "ad2127873cd90af9f88383d8b072a6ba",
        tracklist: "https://api.deezer.com/album/198157002/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 964375142,
      readable: true,
      title: "My Everything",
      title_short: "My Everything",
      title_version: "",
      link: "https://www.deezer.com/track/964375142",
      duration: 231,
      rank: 234773,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-f.dzcdn.net/stream/c-f53bc405a41f9b0865e4efdae8e8628c-4.mp3",
      md5_image: "f093ffa4a33bc988398fcaeca86d2086",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 149077512,
        title: "Midnight Train",
        cover: "https://api.deezer.com/album/149077512/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/1000x1000-000000-80-0-0.jpg",
        md5_image: "f093ffa4a33bc988398fcaeca86d2086",
        tracklist: "https://api.deezer.com/album/149077512/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 964375092,
      readable: true,
      title: "Feel My Love",
      title_short: "Feel My Love",
      title_version: "",
      link: "https://www.deezer.com/track/964375092",
      duration: 237,
      rank: 270630,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-f.dzcdn.net/stream/c-f68561813a795178f02e0d94f3568a84-4.mp3",
      md5_image: "f093ffa4a33bc988398fcaeca86d2086",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 149077512,
        title: "Midnight Train",
        cover: "https://api.deezer.com/album/149077512/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/1000x1000-000000-80-0-0.jpg",
        md5_image: "f093ffa4a33bc988398fcaeca86d2086",
        tracklist: "https://api.deezer.com/album/149077512/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1172628382,
      readable: true,
      title: "Nairobi",
      title_short: "Nairobi",
      title_version: "",
      link: "https://www.deezer.com/track/1172628382",
      duration: 220,
      rank: 314156,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview: "https://cdns-preview-3.dzcdn.net/stream/c-3e1d87eb7a4fb6a01cc4acd4a5af7fd3-3.mp3",
      md5_image: "c4b5995ab98389642400ec11c14715db",
      artist: {
        id: 11448322,
        name: "Bensoul",
        link: "https://www.deezer.com/artist/11448322",
        picture: "https://api.deezer.com/artist/11448322/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/282cf4e88057e2961d7dc75b038452aa/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/282cf4e88057e2961d7dc75b038452aa/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/282cf4e88057e2961d7dc75b038452aa/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/282cf4e88057e2961d7dc75b038452aa/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/11448322/top?limit=50",
        type: "artist",
      },
      album: {
        id: 192315652,
        title: "NAIROBI",
        cover: "https://api.deezer.com/album/192315652/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/c4b5995ab98389642400ec11c14715db/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/c4b5995ab98389642400ec11c14715db/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/c4b5995ab98389642400ec11c14715db/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/c4b5995ab98389642400ec11c14715db/1000x1000-000000-80-0-0.jpg",
        md5_image: "c4b5995ab98389642400ec11c14715db",
        tracklist: "https://api.deezer.com/album/192315652/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1199714512,
      readable: true,
      title: "Sura Yako",
      title_short: "Sura Yako",
      title_version: "",
      link: "https://www.deezer.com/track/1199714512",
      duration: 237,
      rank: 184422,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-d.dzcdn.net/stream/c-d88f6f623c7b9c1f48600cea79ca978a-4.mp3",
      md5_image: "ad2127873cd90af9f88383d8b072a6ba",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 198157002,
        title: "Live and Die In Afrika",
        cover: "https://api.deezer.com/album/198157002/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/1000x1000-000000-80-0-0.jpg",
        md5_image: "ad2127873cd90af9f88383d8b072a6ba",
        tracklist: "https://api.deezer.com/album/198157002/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1503266482,
      readable: true,
      title: "Melanin",
      title_short: "Melanin",
      title_version: "",
      link: "https://www.deezer.com/track/1503266482",
      duration: 267,
      rank: 344905,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-e.dzcdn.net/stream/c-e93e32a4cc76ccb9f04aeb5561ca3bab-4.mp3",
      md5_image: "d68b6c351ded28032b6c2e5f075bd144",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 260999322,
        title: "Afropop Hits 2021",
        cover: "https://api.deezer.com/album/260999322/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/d68b6c351ded28032b6c2e5f075bd144/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/d68b6c351ded28032b6c2e5f075bd144/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/d68b6c351ded28032b6c2e5f075bd144/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/d68b6c351ded28032b6c2e5f075bd144/1000x1000-000000-80-0-0.jpg",
        md5_image: "d68b6c351ded28032b6c2e5f075bd144",
        tracklist: "https://api.deezer.com/album/260999322/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1199714522,
      readable: true,
      title: "Live and Die In Afrika",
      title_short: "Live and Die In Afrika",
      title_version: "",
      link: "https://www.deezer.com/track/1199714522",
      duration: 192,
      rank: 210323,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-d.dzcdn.net/stream/c-d7347ad466501b22910b12aab7171807-4.mp3",
      md5_image: "ad2127873cd90af9f88383d8b072a6ba",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 198157002,
        title: "Live and Die In Afrika",
        cover: "https://api.deezer.com/album/198157002/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/1000x1000-000000-80-0-0.jpg",
        md5_image: "ad2127873cd90af9f88383d8b072a6ba",
        tracklist: "https://api.deezer.com/album/198157002/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 963639952,
      readable: true,
      title: "Insecure",
      title_short: "Insecure",
      title_version: "",
      link: "https://www.deezer.com/track/963639952",
      duration: 190,
      rank: 204223,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-d.dzcdn.net/stream/c-d6ce0a1f79f3d5fe38684569a5bcf2ae-6.mp3",
      md5_image: "f093ffa4a33bc988398fcaeca86d2086",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 148885332,
        title: "Insecure",
        cover: "https://api.deezer.com/album/148885332/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/f093ffa4a33bc988398fcaeca86d2086/1000x1000-000000-80-0-0.jpg",
        md5_image: "f093ffa4a33bc988398fcaeca86d2086",
        tracklist: "https://api.deezer.com/album/148885332/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1199714582,
      readable: true,
      title: "Still The One",
      title_short: "Still The One",
      title_version: "",
      link: "https://www.deezer.com/track/1199714582",
      duration: 265,
      rank: 173370,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-c.dzcdn.net/stream/c-c7a3a6da254707ea906fb7372e6981df-4.mp3",
      md5_image: "ad2127873cd90af9f88383d8b072a6ba",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 198157002,
        title: "Live and Die In Afrika",
        cover: "https://api.deezer.com/album/198157002/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/ad2127873cd90af9f88383d8b072a6ba/1000x1000-000000-80-0-0.jpg",
        md5_image: "ad2127873cd90af9f88383d8b072a6ba",
        tracklist: "https://api.deezer.com/album/198157002/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1104405462,
      readable: true,
      title: "Fire",
      title_short: "Fire",
      title_version: "",
      link: "https://www.deezer.com/track/1104405462",
      duration: 227,
      rank: 178685,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview: "https://cdns-preview-5.dzcdn.net/stream/c-50c86d461695e98839b97244a4541054-3.mp3",
      md5_image: "a5f9ef873645bb16ab27043d74f7a7ce",
      artist: {
        id: 12519956,
        name: "Sun-El Musician",
        link: "https://www.deezer.com/artist/12519956",
        picture: "https://api.deezer.com/artist/12519956/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/e9fc74f0205ed5fa56f08c53ff867801/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/e9fc74f0205ed5fa56f08c53ff867801/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/e9fc74f0205ed5fa56f08c53ff867801/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/e9fc74f0205ed5fa56f08c53ff867801/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/12519956/top?limit=50",
        type: "artist",
      },
      album: {
        id: 178586852,
        title: "To the World & Beyond",
        cover: "https://api.deezer.com/album/178586852/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/a5f9ef873645bb16ab27043d74f7a7ce/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/a5f9ef873645bb16ab27043d74f7a7ce/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/a5f9ef873645bb16ab27043d74f7a7ce/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/a5f9ef873645bb16ab27043d74f7a7ce/1000x1000-000000-80-0-0.jpg",
        md5_image: "a5f9ef873645bb16ab27043d74f7a7ce",
        tracklist: "https://api.deezer.com/album/178586852/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1199869752,
      readable: true,
      title: "Unconditionally Bae",
      title_short: "Unconditionally Bae",
      title_version: "",
      link: "https://www.deezer.com/track/1199869752",
      duration: 220,
      rank: 242481,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview: "https://cdns-preview-8.dzcdn.net/stream/c-8d779e26073e899a5a5f4a2e123778ee-4.mp3",
      md5_image: "db0a650286568f77994537b04157fb10",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 198184842,
        title: "Unconditionally Bae",
        cover: "https://api.deezer.com/album/198184842/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/db0a650286568f77994537b04157fb10/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/db0a650286568f77994537b04157fb10/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/db0a650286568f77994537b04157fb10/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/db0a650286568f77994537b04157fb10/1000x1000-000000-80-0-0.jpg",
        md5_image: "db0a650286568f77994537b04157fb10",
        tracklist: "https://api.deezer.com/album/198184842/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 11592471,
      readable: true,
      title: "Coming Home",
      title_short: "Coming Home",
      title_version: "",
      link: "https://www.deezer.com/track/11592471",
      duration: 283,
      rank: 151450,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview: "https://cdns-preview-3.dzcdn.net/stream/c-3734a0ac5c6802dbe90209185f03df40-11.mp3",
      md5_image: "8fdfae5734f90f7dc5bdd06136622e64",
      artist: {
        id: 275975,
        name: "Sauti Sol",
        link: "https://www.deezer.com/artist/275975",
        picture: "https://api.deezer.com/artist/275975/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f76a07a4a99395ffa717c223b732f26a/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/275975/top?limit=50",
        type: "artist",
      },
      album: {
        id: 1062555,
        title: "Sauti Sol - Sol Filosofia",
        cover: "https://api.deezer.com/album/1062555/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/8fdfae5734f90f7dc5bdd06136622e64/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/8fdfae5734f90f7dc5bdd06136622e64/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/8fdfae5734f90f7dc5bdd06136622e64/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/8fdfae5734f90f7dc5bdd06136622e64/1000x1000-000000-80-0-0.jpg",
        md5_image: "8fdfae5734f90f7dc5bdd06136622e64",
        tracklist: "https://api.deezer.com/album/1062555/tracks",
        type: "album",
      },
      type: "track",
    },
  ],
  total: 230,
  next: "https://api.deezer.com/search?q=sauti%20sol&redirect_uri=http%253A%252F%252Fguardian.mashape.com%252Fcallback&index=25",
};

const options = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/search",
  params: { q: "sauti sol" },
  headers: {
    "X-RapidAPI-Key": "f16440cf3cmsh4be98b0308b4c28p17aa20jsn0ca4171aba9f",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const fetchSongs = async () => {
  const response = await axios.request(options);
  return resp.data;
};

export default fetchSongs;
