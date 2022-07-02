import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-size: 10px;
    }
    body{
        font-family: 'Nunito','Pretendard', sans-serif;
        margin: 0;
    }
    h2{
        font-size: 18px;
    }
`;

export default GlobalStyle;
