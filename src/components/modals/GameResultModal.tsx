import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { wordListState } from "recoil/wordle";
import Modal from "./Modal";
import { styled } from "style/theme";
import { CharStatus } from "utils/status";
import cn from "classnames";
import useResetState from "hooks/useResetState";
// import { answer } from "utils/word";
import { addStatsForCompletedGame } from "utils/stats";
import useModal from "./hooks/useModal";
import { shareStatus } from "utils/share";
import { useSpring, animated } from "react-spring";

type Props = {
  state: "win" | "lose";
};

type StyleProps = {
  colors?: CharStatus;
};

type ButtonProps = {
  isClicked?: boolean;
};

function GameResultModal({ state }: Props) {
  const wordList = useRecoilValue(wordListState);
  const modalContainer = useModal(state);
  const onReset = useResetState();

  const [isCopy, setIsCopy] = useState(false);

  const onClickRestart = () => {
    onReset();
    modalContainer.close();
  };

  const onClickShare = () => {
    setIsCopy(true);
    shareStatus(wordList);
  };
  const style = useSpring({
    to: {
      opacity: isCopy ? 1 : 0,
      height: isCopy ? 15 : 0,
    },
  });

  const reverseStyle = useSpring({
    to: {
      opacity: !isCopy ? 1 : 0,
      height: !isCopy ? 15 : 0,
    },
  });

  useEffect(() => {
    addStatsForCompletedGame(wordList.length, state);
  }, [state, wordList.length]);

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => setIsCopy(false), 1500);
    }
  }, [isCopy]);

  return (
    <Modal id={state}>
      <h2>{state === "win" ? "정답입니다!" : "실패!"}</h2>
      {/* {state === "LOSE" && `정답은 "${answer}"입니다`} */}
      <ResultBox>
        {wordList.map((word, i) => (
          <ColumWrap key={i}>
            {word.map((char, index) => (
              <Square
                key={i + "+" + index}
                className={cn({ on: char.status !== "absent" })}
                colors={char.status}
              />
            ))}
          </ColumWrap>
        ))}
      </ResultBox>
      <Button onClick={onClickRestart}>새로운 게임 시작하기</Button>
      <Button className="copy" onClick={onClickShare} isClicked={isCopy}>
        <animated.div style={reverseStyle}>클립보드에 복사하기</animated.div>
        <animated.div style={style}>
          <i className="fa-solid fa-check" />
          &nbsp; 복사 완료
        </animated.div>
      </Button>
    </Modal>
  );
}

const ColumWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.2rem;
`;
const ResultBox = styled.div`
  margin: 5rem 0;
`;
const Square = styled.div<StyleProps>`
  width: 4rem;
  height: 4rem;
  border-radius: 0.8rem;
  margin: 0.1rem;
  border: 2px solid #cdcdcd;
  &.on {
    background-color: ${({ theme, colors }) => colors && theme.color[colors]};
    border-color: ${({ theme, colors }) => colors && theme.color[colors]};
  }
`;

const Button = styled.button<ButtonProps>`
  display: block;
  margin: 1rem auto;
  width: fit-content;
  height: 4rem;
  padding: 0 1.5rem;
  font-size: 12px;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease-out;
  background: none;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e3dfdf;
    border-radius: 1rem;
    z-index: -3;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #989292;
    transition: all 0.3s;
    border-radius: 1rem;
    z-index: -1;
  }
  &:hover {
    color: white;
    &::before {
      width: 100%;
    }
  }
  &.copy {
    background-color: ${({ isClicked }) => (isClicked ? `#989292` : `none`)};
    color: ${({ isClicked }) => (isClicked ? `white` : `black`)};
    i {
      font-size: 14px;
    }
  }
`;

export default GameResultModal;
