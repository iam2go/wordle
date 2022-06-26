import React from "react";
import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil";
import { modalState } from "recoil/modal";
import GameInfoModal from "./GameInfoModal";
import GameResultModal from "./GameResultModal";
import GameStatsModal from "./GameStatsModal";
import Toast from "./Toast";

const element = document.getElementById("popup") as HTMLElement;
function PortalContainer() {
  const modal = useRecoilValue(modalState);

  return createPortal(
    <>
      {modal["info"].isOpen && <GameInfoModal />}
      {modal["stats"].isOpen && <GameStatsModal />}
      {modal["win"].isOpen && <GameResultModal state="win" />}
      {modal["lose"].isOpen && <GameResultModal state="lose" />}
      <Toast />
    </>,
    element
  );
}

export default PortalContainer;
