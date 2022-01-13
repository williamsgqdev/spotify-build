import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import useSpotify from "./useSpotify";
import { curentTrackIdState, isPlayingState } from "../atoms/songAtom";
import { useEffect, useState } from "react";

const useSongInfo = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(curentTrackIdState);
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentTrackId) {
        const trackInfo = await fetch(
          `https://api.spotify.com/v1/tracks/${currentTrackId}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
            },
          }
        ).then((res) => res.json());
         
       
        setCurrentTrackId(trackInfo);
      }
    };
    fetchSongInfo()
  }, [spotifyApi, currentTrackId]);
    

 
  return songInfo;
};

export default useSongInfo;
