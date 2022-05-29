import React from "react";
import App from "./App";
import ModalContainer from "./components/modals/ModalContainer";
import GlobalStyle from "./style/GlobalStyle";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";

function Root() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
        <ModalContainer />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default Root;
