import React from "react";
import Dialog from "./Dialog";
import styled from "styled-components";

function GameInfoDialog() {
  return (
    <Dialog id="info">
      <Wrap>
        <h2> 게임 방법</h2>
        <p>
          여섯 번의 기회가 주워집니다.
          <br />
          <br /> 단어가 완성되면 ENTER를 눌러 제출해주세요. 단, 유효한 단어만
          제출할 수 있습니다. <br />
          <br />
          제출을 하면 타일의 색상이 변경되어 당신의 추측이 정답에 얼마나
          비슷했는지 보여줍니다.
        </p>
      </Wrap>
    </Dialog>
  );
}

const Wrap = styled.div`
  width: 100%;
  text-align: center;
  h2 {
    font-size: 18px;
    margin-left: 4rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 14px;
    text-align: left;
  }
`;

export default GameInfoDialog;
