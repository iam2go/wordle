import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { wordListState } from "recoil/wordle";
import Dialog from "./Dialog";
import { styled } from "style/theme";
import { CharStatus } from "utils/status";
import cn from "classnames";
// import { answer } from "utils/word";
import { addStatsForCompletedGame } from "utils/stats";

type Props = {
  state: "win" | "lose";
};

type StyleProps = {
  colors?: CharStatus;
};

function GameResultDialog({ state }: Props) {
  const wordList = useRecoilValue(wordListState);

  useEffect(() => {
    addStatsForCompletedGame(wordList.length, state);
  }, [state, wordList.length]);

  return (
    <Dialog id={state}>
      <h2> {state === "win" ? "정답입니다!" : "실패!"}</h2>
      {/* {state === "LOSE" && `정답은 "${answer}"입니다`} */}
      {wordList.map((word, i) => (
        <ColumWrap>
          {word.map((char, index) => (
            <Square
              key={i}
              className={cn({ on: char.status !== "absent" })}
              colors={char.status}
            />
          ))}
        </ColumWrap>
      ))}
    </Dialog>
  );
}

const ColumWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.2rem;
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

export default GameResultDialog;
