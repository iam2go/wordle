import { WORDS } from "../constants/words";

export const gameTimeInMs = () => {
  const epochMs = 1643122800000;
  const now = Date.now();
  const msInDay = 86400000 / 2;
  return {
    elapsed: now - epochMs,
    msInDay,
    epochMs,
  };
};

export const getWordOfDay = () => {
  // const { elapsed, msInDay } = gameTimeInMs();
  // const index = Math.floor(elapsed / msInDay);
  const index = Math.floor(Math.random() * 38696);
  console.log(WORDS[index]);
  return {
    answer: WORDS[index],
  };
};

export const { answer } = getWordOfDay();
