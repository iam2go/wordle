import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { wordListState } from "recoil/wordle";
import Modal from "./Modal";
import { styled } from "style/theme";
import { CharStatus } from "utils/status";
import cn from "classnames";
import useResetState from "hooks/useResetState";
import { getWordOfDay } from "utils/word";
import { addStatsForCompletedGame } from "utils/stats";
import useModal from "./hooks/useModal";
import { shareStatus } from "utils/share";
import { useSpring, animated } from "react-spring";
import * as Hangul from "hangul-js";

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
      {state === "win" && (
        <Background src={require("../../assets/confetti.png")} alt="confetti" />
      )}
      <Emoji>
        <i
          className={`fa-solid fa-face-${
            state === "win" ? "laugh-squint" : "dizzy"
          }`}
        ></i>
      </Emoji>
      <h2>{state === "win" ? "정답입니다!" : "실패!"}</h2>
      <ResultBox>
        <div className="answer">
          정답:{" "}
          <strong>{`"${Hangul.assemble(getWordOfDay().split(""))}"`}</strong>
        </div>
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
      {state === "win" && (
        <Button className="copy" onClick={onClickShare} isClicked={isCopy}>
          <animated.div style={reverseStyle}>클립보드에 복사하기</animated.div>
          <animated.div style={style}>
            <i className="fa-solid fa-check" />
            &nbsp; 복사 완료
          </animated.div>
        </Button>
      )}
    </Modal>
  );
}

const ColumWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.2rem;
`;
const ResultBox = styled.div`
  margin: 4rem 0 5rem;
  .answer {
    font-size: 14px;
    margin-bottom: 2rem;
    strong {
      font-family: bold;
      font-size: 14px;
    }
  }
`;
const Square = styled.div<StyleProps>`
  width: 4rem;
  height: 4rem;
  border-radius: 0.8rem;
  margin: 0.1rem;
  border: 2px solid ${({ theme }) => theme.boardBorder1};
  &.on {
    background-color: ${({ theme, colors }) => colors && theme.color[colors]};
    border-color: ${({ theme, colors }) => colors && theme.color[colors]};
  }
`;

const Background = styled.img`
  width: 480px;
  position: absolute;
  left: 10px;
  top: 30px;
  clip: rect(0, 380px, 140px, 0);
`;

const Emoji = styled.div`
  height: 4rem;
  padding: 1.5rem;
  i {
    font-size: 4rem;
    color: ${({ theme }) => theme.color.present};
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
  color: ${({ theme }) => theme.text};
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.button};
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
    color: ${({ isClicked, theme }) => (isClicked ? `white` : theme.text)};
    i {
      font-size: 14px;
    }
  }
`;

export default GameResultModal;
