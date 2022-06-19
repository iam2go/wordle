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
  hasValue: boolean;
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
      hasValue={value !== ""}
      colors={status}
      className={cn({ on: status })}
    >
      {value}
    </SquareWrap>
  );
}

const SquareWrap = styled(animated.div)<StyleProps>`
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
  transform: scale(1);
  border-color: ${({ hasValue }) => (hasValue ? "black" : "#cdcdcd")};
  &.on {
    background-color: ${({ theme, colors }) => colors && theme.color[colors]};
    border-color: ${({ theme, colors }) => colors && theme.color[colors]};
    color: white;
  }
`;

export default Square;
