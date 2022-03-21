import React from 'react';
import styled from 'styled-components';

function Header(){
    return(
        <HeaderStyle>
          <h1>Wordle</h1>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
height: 4rem;
display:flex;
align-items: center;
justify-content: center;
`

export default Header;