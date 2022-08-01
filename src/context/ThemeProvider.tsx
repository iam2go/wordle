import useTheme from "hooks/useTheme";
import React, { ReactNode } from "react";
import { light, dark } from "../style/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

type Props = {
  children: ReactNode;
};

const defaultValue = {
  theme: "light",
  onChangeTheme: () => {},
};

export const ThemeContext = React.createContext(defaultValue);

function ThemeProvider({ children }: Props) {
  const themeProps = useTheme();

  return (
    <ThemeContext.Provider value={themeProps}>
      <StyledThemeProvider theme={themeProps.theme === "light" ? light : dark}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
