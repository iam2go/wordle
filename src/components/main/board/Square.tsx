import React from "react";
import { styled } from "../../../style/theme";
import { CharStatus } from "../../../utils/status";
import cn from "classnames";

type Props = {
  value?: string;
  status?: CharStatus;
};

type StyleProps = {
  hasValue: boolean;
  color?: CharStatus;
};

function Square({ value = "", status }: Props) {
  return (
    <SquareWrap
      hasValue={value !== ""}
      color={status}
      className={cn({ on: status })}
    >
      {value}
    </SquareWrap>
  );
}

const SquareWrap = styled.div<StyleProps>`
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
  border-color: ${({ hasValue }) => (hasValue ? "black" : "#cdcdcd")};
  &.on {
    background-color: ${({ theme, color }) => color && theme.color[color]};
    border-color: ${({ theme, color }) => color && theme.color[color]};
    color: white;
  }
`;

export default Square;
