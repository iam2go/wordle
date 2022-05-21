import React from "react";
import styled from "styled-components";
import CurrentColum from "./CurrentColum";
import EmptyColum from "./EmptyColum";

function Board() {
  return (
    <BoardWrap>
      <CurrentColum />
      <EmptyColum />
      <EmptyColum />
      <EmptyColum />
      <EmptyColum />
      <EmptyColum />
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
