import React from "react";
import styled from "styled-components";
import Square from "./Square";
import { WordWithStatus } from "../../../utils/status";

type Props = {
  word: WordWithStatus;
};

function CompletedColum({ word }: Props) {
  return (
    <ColumWrap>
      {Object.keys(word).map((value: string, i: number) => (
        <Square key={i} value={value} status={word[value]} />
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
