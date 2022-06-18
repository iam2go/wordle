import useOutSideClick from "hooks/useOutSideClick";
import React, { ReactNode, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { modalSelector } from "recoil/modal";
import styled from "styled-components";

type Props = {
  id: string;
  children: ReactNode;
};

function Dialog({ id, children }: Props) {
  const dialogRef = useRef(null);
  const setModalState = useSetRecoilState(modalSelector(id));
  const handleClose = () => {
    setModalState(false);
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
  width: 40rem;
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
  margin: 50px 30px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  img {
    margin-top: 60px;
    width: 300px;
  }
`;

export default Dialog;
