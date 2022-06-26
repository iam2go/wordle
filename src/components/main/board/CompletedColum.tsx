import React, { useEffect } from "react";
import styled from "styled-components";
import Square from "./Square";
import { WordWithStatus } from "../../../utils/status";
import { useRecoilState } from "recoil";
import { gameStatusState } from "recoil/wordle";
import useModal from "components/modals/hooks/useModal";

type Props = {
  word: WordWithStatus[];
  isLast: boolean;
};

function CompletedColum({ word, isLast }: Props) {
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  const WinModal = useModal("win");
  const LoseModal = useModal("lose");

  useEffect(() => {
    if (gameStatus !== "IN_PROGRESS") return;
    if (word.every(({ status }) => status === "correct")) {
      setGameStatus("WIN");
      WinModal.open();
      return;
    }

    if (isLast) {
      setGameStatus("LOSE");
      LoseModal.open();
    }
  }, [LoseModal, WinModal, gameStatus, isLast, setGameStatus, word]);

  return (
    <ColumWrap>
      {word.map((char: WordWithStatus, i: number) => (
        <Square key={i} value={char.value} status={char.status} />
      ))}
    </ColumWrap>
  );
}

const ColumWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.2rem;
`;

export default CompletedColum;
