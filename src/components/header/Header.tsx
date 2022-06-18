import React from "react";
import { useSetRecoilState } from "recoil";
import { modalSelector } from "recoil/modal";
import styled from "styled-components";

function Header() {
  const setModalState = useSetRecoilState(modalSelector("info"));
  const onClickInfo = () => {
    setModalState(true);
  };

  return (
    <HeaderStyle>
      <InfoButton onClick={onClickInfo}>
        <i className="fa-solid fa-circle-info"></i>
      </InfoButton>
      <h1>Wordle</h1>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3.4rem;
    font-weight: 600;
    margin: 0 3rem;
  }
`;

const InfoButton = styled.div`
  float: left;
  cursor: pointer;
  i {
    font-size: 20px;
  }
`;
export default Header;
