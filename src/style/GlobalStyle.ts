import { createGlobalStyle } from "./theme";

const GlobalStyle = createGlobalStyle`
    * {
        font-size: 10px;
    }
    body{
        font-family: 'Nunito','Pretendard', sans-serif;
        margin: 0;
        font-size: 12px;
        background: ${({ theme }) => theme.background1};
        color: ${({ theme }) => theme.text}; 
        //transition: background 0.4s ease-in, color 0.4s ease-in;
    }
    h2{
        font-size: 18px;
    }
    button{
        cursor: pointer;
        border: none;
    }
    div{
        font-size: 12px;
    }
    .transition {
        transition: background 0.3s ease-in,  border-color 0.3s ease-in;
    }
`;

export default GlobalStyle;
