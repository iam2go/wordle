import { atom } from "recoil";

export const wordState = atom<string>({
  key: "wordState",
  default: "",
});

export const wordListState = atom<string[]>({
  key: "wordListState",
  default: [],
});
