import { atom } from "recoil";

export const curentTrackIdState = atom({
  key: "curentTrackIdState",
  default: null,
});
export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});
