import React from "react";
import App from "./App";
import PortalContainer from "./components/modals/PortalContainer";
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
        <PortalContainer />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default Root;
