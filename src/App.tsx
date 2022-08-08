import Header from "./components/header";
import Main from "./components/main/Main";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background: ${({ theme }) => theme.background1};
  color: ${({ theme }) => theme.text};
  transition: background 0.3s ease-in, color 0.3s ease-in; */
`;

export default App;
