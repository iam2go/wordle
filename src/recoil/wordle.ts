import { atom } from "recoil";
import { CharWithStatus, WordWithStatus } from "../utils/status";

export const wordState = atom<string>({
  key: "wordState",
  default: "",
});

export const wordListState = atom<WordWithStatus[][]>({
  key: "wordListState",
  default: [],
});

export const charState = atom<CharWithStatus>({
  key: "charState",
  default: {},
});
