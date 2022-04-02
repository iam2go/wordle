import React from 'react';
import styled from 'styled-components';

function Key({value, width=4, onClick}){

    const handleClick = () => {
        onClick?.(value);
    };

    return(
        <KeyBlock width={width} onClick={handleClick}>
          {value}
        </KeyBlock>
    );
}

const KeyBlock = styled.div`
    width: ${({width}) => width +'rem'};
    height: 5.2rem;
    background-color: #dfdfdf;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.3rem;
    font-size: 1.4rem;
    cursor: pointer;
    &:hover{
        background-color: #cdcdcd;
    }
`;

export default React.memo(Key);