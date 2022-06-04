import { atom } from "recoil";
import { WordWithStatus } from "../utils/status";

export const wordState = atom<string>({
  key: "wordState",
  default: "",
});

export const wordListState = atom<WordWithStatus[][]>({
  key: "wordListState",
  default: [],
});
