import React from "react";
import Modal from "./Modal";
import { styled } from "../../style/theme";
import Square from "components/main/board/Square";

function GameInfoModal() {
  const correctExample = "ㅇㅣㄹㅡㅁ";
  const presentExample = "ㅎㅏㄴㅡㄹ";
  const absentExample = "ㅅㅏㄱㅗㅏ";
  return (
    <Modal id="info">
      <Wrap>
        <h2> 게임 방법</h2>
        <p>👍🖐 여섯 번의 기회가 주어집니다.</p>
        <p>
          단어가 완성되면 <em>ENTER</em>를 눌러 제출해주세요.{" "}
          <strong>단, 유효한 단어만 제출할 수 있습니다.</strong>{" "}
        </p>
        <p>
          제출을 하면 타일의 색상이 변경되어 당신의 추측이 정답에 얼마나
          비슷했는지 보여줍니다.
        </p>
      </Wrap>
      <Examples>
        <ColumWrap>
          {correctExample.split("").map((char: string, i: number) => (
            <Square
              key={i}
              value={char}
              status={i === 0 ? "correct" : undefined}
            />
          ))}
        </ColumWrap>
        <div className="text">
          글자 <strong>"o"</strong>는 올바른 자리에 있습니다.
        </div>
      </Examples>
      <Examples>
        <ColumWrap>
          {presentExample.split("").map((char: string, i: number) => (
            <Square
              key={i}
              value={char}
              status={i === 1 ? "present" : undefined}
            />
          ))}
        </ColumWrap>
        <div className="text">
          글자 <strong>"ㅏ"</strong>는 단어에 포함되지만, 잘못된 자리에
          있습니다.
        </div>
      </Examples>
      <Examples>
        <ColumWrap>
          {absentExample.split("").map((char: string, i: number) => (
            <Square
              key={i}
              value={char}
              status={i === 3 ? "absent" : undefined}
            />
          ))}
        </ColumWrap>
        <div className="text">
          글자 <strong>"ㅗ"</strong>는 단어에 포함되지않습니다.
        </div>
      </Examples>
    </Modal>
  );
}

const Wrap = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 5rem;
  h2 {
    margin-bottom: 4rem;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    text-align: left;
    line-height: 21px;
  }
  em {
    background-color: ${({ theme }) => theme.keyBg1};
    padding: 0.3rem 0.6rem;
    border-radius: 3px;
    margin-right: 0.1rem;
    font-size: 12px;
  }
`;

const Examples = styled.div`
  margin: 2rem auto;
  font-size: 14px;
  strong {
    font-weight: 600;
    font-size: 15px;
  }
  .text {
    font-size: 14px;
    margin-top: 1rem;
  }
`;
const ColumWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.2rem;
`;

export default GameInfoModal;
