import React from "react";
import styled from "styled-components";
import Square from "./Square";
import { WordWithStatus } from "../../../utils/status";

type Props = {
  word: WordWithStatus[];
};

function CompletedColum({ word }: Props) {
  console.log(word);
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
