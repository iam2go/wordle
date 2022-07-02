import React from "react";
import styled from "styled-components";
import useModal from "components/modals/hooks/useModal";
import { useResetRecoilState } from "recoil";
import { charState, gameStatusState, wordListState } from "recoil/wordle";
import { resetWord } from "utils/word";

function Header() {
  const InfoModal = useModal("info");
  const StatModal = useModal("stats");
  const resetWordList = useResetRecoilState(wordListState);
  const resetGameStatus = useResetRecoilState(gameStatusState);
  const resetCharStatus = useResetRecoilState(charState);
  const onClickInfo = () => {
    InfoModal.open();
  };
  const onClickStat = () => {
    StatModal.open();
  };
  const onClickReStart = () => {
    resetWordList();
    resetWord();
    resetGameStatus();
    resetCharStatus();
  };

  return (
    <HeaderStyle>
      <Button onClick={onClickInfo}>
        <i className="fa-solid fa-circle-info"></i>
      </Button>
      <h1>Wordle</h1>
      <Button onClick={onClickStat}>
        <i className="fa-solid fa-chart-simple"></i>
      </Button>
      <Button onClick={onClickReStart}>
        <i className="fa-solid fa-arrow-rotate-left"></i>
      </Button>
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

const Button = styled.div`
  float: left;
  margin-right: 1.5rem;
  cursor: pointer;
  i {
    font-size: 20px;
  }
`;

export default Header;
