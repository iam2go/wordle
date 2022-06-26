import React, { useEffect } from "react";
import Board from "./board";
import Keyboard from "./keyboard";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { gameStatusState } from "recoil/wordle";
import { modalSelector } from "recoil/modal";

function Main() {
  const gameState = useRecoilValue(gameStatusState);
  const setWinDialog = useSetRecoilState(modalSelector("win"));
  const setLoseDialog = useSetRecoilState(modalSelector("lose"));

  useEffect(() => {
    if (gameState === "WIN") {
      setWinDialog(true);
      return;
    }
    if (gameState === "LOSE") {
      setLoseDialog(true);
    }
  }, [gameState, setLoseDialog, setWinDialog]);

  return (
    <MainStyle>
      <Board />
      <Keyboard />
    </MainStyle>
  );
}

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

export default Main;
