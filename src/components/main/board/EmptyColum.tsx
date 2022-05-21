import React from "react";
import Square from "./Square";
import styled from "styled-components";

function EmptyColum() {
  return (
    <ColumWrap>
      {Array.from({ length: 5 }, (_, i) => (
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

export default EmptyColum;
