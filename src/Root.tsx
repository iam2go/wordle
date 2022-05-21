import React from "react";
import App from "./App";
import ModalContainer from "./components/modals/ModalContainer";
import GlobalStyle from "./style/GlobalStyle";
import { RecoilRoot } from "recoil";

function Root() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <App />
      <ModalContainer />
    </RecoilRoot>
  );
}

export default Root;
