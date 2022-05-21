import React from "react";
import { useSelector } from "react-redux";
import { wordSelector } from "../../../store/slice";
import styled from "styled-components";
import Square from "./Square";

function CurrentColum() {
  const word = useSelector(wordSelector);
  const emptySquareCount = 5 - word.length;
  return (
    <ColumWrap>
      {word.split("").map((value: string, i: number) => (
        <Square key={i} value={value} />
      ))}
      {Array.from({ length: emptySquareCount }, (_, i) => (
        <Square key={i} />
      ))}
    </ColumWrap>
  );
}

const ColumWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.2rem;
`;

export default CurrentColum;
