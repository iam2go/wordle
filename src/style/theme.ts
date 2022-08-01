import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

const color = {
  correct: "#54b2b2",
  present: "#fdc500",
  absent: "#9a9a9a",
};

export const light = {
  body: "#fefefe",
  text: "#202124",
  boardBg: "white",
  boardBorder1: "#cdcdcd",
  boardBorder2: "#202124",
  button: "#dfdfdf",
  color: { ...color },
};

export const dark = {
  body: "#202124",
  text: "#fefefe",
  boardBg: "#121212",
  boardBorder1: "#8a817c",
  boardBorder2: "#dfdfdf", // 활성화 시
  button: "#464441",
  color: { ...color },
};

export type Theme = typeof light;
export const { default: styled, createGlobalStyle } =
  styledComponents as any as ThemedStyledComponentsModule<Theme>;
