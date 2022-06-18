import React from "react";
import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil";
import { modalState } from "recoil/modal";
import GameInfoDialog from "./GameInfoDialog";
import Toast from "./Toast";

const element = document.getElementById("popup") as HTMLElement;
function ModalContainer() {
  const modal = useRecoilValue(modalState);
  return createPortal(
    <>
      {modal["info"].isOpen && <GameInfoDialog />}
      <Toast />
    </>,
    element
  );
}

export default ModalContainer;
