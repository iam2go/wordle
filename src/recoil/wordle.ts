import { atom } from "recoil";
import { CharWithStatus, WordWithStatus } from "../utils/status";

export const gameStatusState = atom<string>({
  key: "gameStatusState",
  default: "IN_PROGRESS",
});

export const wordState = atom<string>({
  key: "wordState",
  default: "",
});

const localStorageEffect =
  (key: string) =>
  // FIXME: 타입 임시처리
  ({ setSelf, onSet }: { setSelf: any; onSet: any }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet(
      (
        newValue: WordWithStatus[][],
        _: WordWithStatus[][],
        isReset: boolean
      ) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      }
    );
  };

export const wordListState = atom<WordWithStatus[][]>({
  key: "wordListState",
  default: [],
  effects: [localStorageEffect("gameState")],
});

export const charState = atom<CharWithStatus>({
  key: "charState",
  default: {},
});
