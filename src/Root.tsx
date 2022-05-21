import React from "react";
import App from "./App";
import ModalContainer from "./components/modals/ModalContainer";
import GlobalStyle from "./style/GlobalStyle";

function Root() {
  return (
    <>
      <GlobalStyle />
      <App />
      <ModalContainer />
    </>
  );
}

export default Root;
