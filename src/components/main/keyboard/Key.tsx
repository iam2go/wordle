import React from "react";
import { styled } from "../../../style/theme";
import { CharStatus } from "../../../utils/status";
import cn from "classnames";

type Props = {
  value: string;
  status?: CharStatus;
  width?: number;
  onClick: (value: string) => void;
};

type StyleProps = {
  width: number;
  color?: CharStatus;
  onClick: (e: Event) => void;
};

function Key({ value, status, width = 4, onClick }: Props) {
  const handleClick = () => {
    onClick?.(value);
  };

  return (
    <KeyBlock
      width={width}
      color={status}
      className={cn({ on: status }, "transition")}
      onClick={handleClick}
    >
      {value}
    </KeyBlock>
  );
}

const KeyBlock = styled.div<StyleProps>`
  width: ${({ width }) => width + "rem"};
  height: 5.2rem;
  background-color: ${({ theme }) => theme.keyBg1};
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.3rem;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.KeyBg2};
  }
  &.on {
    background-color: ${({ theme, color }) => color && theme.color[color]};
    border-color: ${({ theme, color }) => color && theme.color[color]};
    color: white;
  }
`;

export default React.memo(Key);
