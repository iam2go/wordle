import React from "react";
import Board from "./board";
import Keyboard from "./keyboard";
import styled from "styled-components";

function Main() {
  return (
    <MainStyle>
      <Board />
      <Keyboard />
    </MainStyle>
  );
}

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

export default Main;
