import { atom, selectorFamily } from "recoil";

type ModalState = {
  [key: string]: {
    isOpen: boolean;
  };
};

export const modalState = atom<ModalState>({
  key: "modalState",
  default: {
    info: {
      isOpen: false,
    },
    stats: {
      isOpen: false,
    },
    win: {
      isOpen: false,
    },
    lose: {
      isOpen: false,
    },
  },
});

export const modalSelector = selectorFamily<boolean, string>({
  key: "modalSelector",
  get:
    (id: string) =>
    ({ get }) =>
      get(modalState)[id].isOpen,
  set:
    (id: string) =>
    ({ set }, newValue) =>
      set(modalState, (prevState) =>
        typeof newValue === "boolean"
          ? { ...prevState, [id]: { isOpen: newValue } }
          : prevState
      ),
});
