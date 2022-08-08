import React from "react";
import { styled } from "../../../style/theme";
import { CharStatus } from "../../../utils/status";
import cn from "classnames";
import { useSpring, animated } from "react-spring";

type Props = {
  value?: string;
  status?: CharStatus;
};

type StyleProps = {
  value: boolean;
  colors?: CharStatus;
};

function Square({ value = "", status }: Props) {
  const animateProps = useSpring({
    to: { scale: 1 },
    from: { scale: value !== "" ? 1.1 : 1 },
  });
  return (
    <SquareWrap
      style={animateProps}
      value={value !== ""}
      colors={status}
      className={cn({ on: status }, "transition")}
    >
      {value}
    </SquareWrap>
  );
}

const SquareWrap = styled(animated.div)<StyleProps>`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.boardBg};
  /* border: 2px solid #cdcdcd; */
  margin: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 500;
  transform: scale(1);
  border-width: 2px;
  border-style: solid;
  border-color: ${({ value, theme }) =>
    value ? theme.boardBorder2 : theme.boardBorder1};
  &.on {
    background-color: ${({ theme, colors }) => colors && theme.color[colors]};
    border-color: ${({ theme, colors }) => colors && theme.color[colors]};
    color: white;
  }
`;

export default Square;
