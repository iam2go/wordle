import { atom, AtomEffect } from "recoil";
import { CharWithStatus, WordWithStatus } from "../utils/status";

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const gameStatusState = atom<string>({
  key: "gameStatusState",
  default: "IN_PROGRESS",
  effects: [localStorageEffect("gameStatus")],
});

export const wordState = atom<string>({
  key: "wordState",
  default: "",
});

export const wordListState = atom<WordWithStatus[][]>({
  key: "wordListState",
  default: [],
  effects: [localStorageEffect("gameState")],
});

export const charState = atom<CharWithStatus>({
  key: "charState",
  default: {},
});
