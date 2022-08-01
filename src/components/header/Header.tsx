import React, { useContext } from "react";
import styled from "styled-components";
import useModal from "components/modals/hooks/useModal";
import useResetState from "hooks/useResetState";
import cn from "classnames";
import { ThemeContext } from "context/ThemeProvider";

function Header() {
  const InfoModal = useModal("info");
  const StatModal = useModal("stats");
  const onReset = useResetState();
  const { theme, onChangeTheme } = useContext(ThemeContext);
  const onClickInfo = () => {
    InfoModal.open();
  };
  const onClickStat = () => {
    StatModal.open();
  };
  const onClickReStart = () => {
    onReset();
  };

  return (
    <HeaderStyle>
      <Button onClick={onChangeTheme}>
        <i
          className={cn(
            "fa-solid",
            { "fa-sun": theme === "light" },
            { "fa-moon": theme === "dark" }
          )}
        ></i>
      </Button>
      <Button onClick={onClickInfo}>
        <i className="fa-solid fa-circle-info"></i>
      </Button>
      <h1>Wordle</h1>
      <Button onClick={onClickStat}>
        <i className="fa-solid fa-chart-simple"></i>
      </Button>
      <Button onClick={onClickReStart}>
        <i className="fa-solid fa-arrow-rotate-left"></i>
      </Button>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  height: 8rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3.4rem;
    font-weight: 600;
    margin: 0 3rem;
  }
`;

const Button = styled.div`
  float: left;
  margin-right: 1.5rem;
  cursor: pointer;
  i {
    font-size: 20px;
  }
`;

export default Header;
