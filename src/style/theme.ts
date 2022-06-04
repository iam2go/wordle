import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  color: {
    correct: "#54b2b2",
    present: "#fdc500",
    absent: "#9a9a9a",
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
