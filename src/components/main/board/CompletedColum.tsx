import React, { useEffect } from "react";
import styled from "styled-components";
import Square from "./Square";
import { WordWithStatus } from "../../../utils/status";
import { useSetRecoilState } from "recoil";
import { gameStatusState } from "recoil/wordle";
import Toast from "components/modals/Toast";

type Props = {
  word: WordWithStatus[];
  isLast: boolean;
};

function CompletedColum({ word, isLast }: Props) {
  const setGameStatus = useSetRecoilState(gameStatusState);

  useEffect(() => {
    if (word.every(({ status }) => status === "correct")) {
      setGameStatus("WIN");
      Toast.success("정답입니다");
      return;
    }

    if (isLast) {
      setGameStatus("LOSE");
    }
  }, [isLast, setGameStatus, word]);

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
