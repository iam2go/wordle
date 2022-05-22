import React from "react";
import styled from "styled-components";

type Props = {
  value?: string;
};

function Square({ value = "" }: Props) {
  return <SquareWrap>{value}</SquareWrap>;
}

const SquareWrap = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 1rem;
  background-color: white;
  border: 2px solid #cdcdcd;
  margin: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 500;
`;

export default Square;
