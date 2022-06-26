import React from "react";
import { useRecoilValue } from "recoil";
import { wordListState } from "recoil/wordle";
import styled from "styled-components";
import CompletedColum from "./CompletedColum";
import CurrentColum from "./CurrentColum";
import EmptyColum from "./EmptyColum";

function Board() {
  const wordList = useRecoilValue(wordListState);

  return (
    <BoardWrap>
      {wordList.map((word, i) => (
        <CompletedColum key={i} word={word} isLast={i === 5} />
      ))}
      {wordList.length < 6 && <CurrentColum />}
      {Array.from({ length: 5 - wordList.length }, (_, i) => (
        <EmptyColum key={i} />
      ))}
    </BoardWrap>
  );
}

const BoardWrap = styled.div`
  width: 50rem;
  height: 40rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
export default Board;
