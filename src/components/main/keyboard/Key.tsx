import React from "react";
import styled from "styled-components";

type Props = {
  value: string;
  width?: number;
  onClick: (value: string) => void;
};

type StyleProps = {
  width: number;
  onClick: (e: Event) => void;
};

function Key({ value, width = 4, onClick }: Props) {
  const handleClick = () => {
    onClick?.(value);
  };

  return (
    <KeyBlock width={width} onClick={handleClick}>
      {value}
    </KeyBlock>
  );
}

const KeyBlock = styled.div<StyleProps>`
  width: ${({ width }) => width + "rem"};
  height: 5.2rem;
  background-color: #dfdfdf;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.3rem;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    background-color: #cdcdcd;
  }
`;

export default React.memo(Key);
