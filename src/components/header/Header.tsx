import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderStyle>
      <h1>Wordle</h1>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3.4rem;
    font-weight: 600;
  }
`;

export default Header;
