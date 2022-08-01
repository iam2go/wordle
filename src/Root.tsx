import React from "react";
import App from "./App";
import PortalContainer from "./components/modals/PortalContainer";
import GlobalStyle from "./style/GlobalStyle";
import { RecoilRoot } from "recoil";
import ThemeProvider from "context/ThemeProvider";

function Root() {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <GlobalStyle />
        <App />
        <PortalContainer />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default Root;
