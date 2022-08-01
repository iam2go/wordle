import { createGlobalStyle } from "./theme";

const GlobalStyle = createGlobalStyle`
    * {
        font-size: 10px;
    }
    body{
        font-family: 'Nunito','Pretendard', sans-serif;
        margin: 0;
        font-size: 12px;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: background 0.2s ease-in, color 0.2s ease-in;
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
`;

export default GlobalStyle;
