import React from "react";
import styled from "styled-components";
import Square from "./Square";

type Props = {
  word: string;
};

function CompletedColum({ word }: Props) {
  return (
    <ColumWrap>
      {word.split("").map((value: string, i: number) => (
        <Square key={i} value={value} />
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
