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
  width: 44rem;
  height: fit-content;
  border-radius: 10px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 200;
  z-index: 9999;
`;

const CloseButton = styled.div`
  float: right;
  width: 3.5rem;
  height: 3.5rem;
  margin: 2rem 2rem 0rem 0rem;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 2.5rem;
  }
`;

const Contents = styled.div`
  /* background-color: aquamarine; */
  margin: 6rem 5rem 7rem;
`;

export default Modal;
