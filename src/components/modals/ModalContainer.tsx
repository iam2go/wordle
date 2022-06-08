import React from "react";
import { createPortal } from "react-dom";
import Toast from "./Toast";

const element = document.getElementById("popup") as HTMLElement;
function ModalContainer() {
  return createPortal(
    <>
      <Toast />
    </>,
    element
  );
}

export default ModalContainer;
