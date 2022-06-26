import useOutSideClick from "hooks/useOutSideClick";
import React, { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import useModal from "./hooks/useModal";

type Props = {
  id: string;
  children: ReactNode;
};

function Modal({ id, children }: Props) {
  const dialogRef = useRef(null);
  const modalContainer = useModal(id);
  const handleClose = () => {
    modalContainer.close();
  };

  useOutSideClick(dialogRef, handleClose);
  useEffect(() => {
    const $body = document.querySelector("body") as HTMLBodyElement;
    $body.style.overflow = "hidden";
    return () => {
      $body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      <ModalWrap ref={dialogRef}>
        <CloseButton onClick={handleClose}>
          <i className="fa-solid fa-xmark"></i>
        </CloseButton>
        <Contents>{children}</Contents>
      </ModalWrap>
      <Overlay />
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9998;
`;

const ModalWrap = styled.div`
  width: 42rem;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 9999;
`;

const CloseButton = styled.div`
  float: right;
  width: 4rem;
  height: 4rem;
  margin: 2rem;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 3rem;
  }
`;

const Contents = styled.div`
  /* background-color: aquamarine; */
  margin: 5rem 4rem;
`;

export default Modal;
