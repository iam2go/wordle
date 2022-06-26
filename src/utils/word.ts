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

const key = "gameSolution";

export const resetWord = () => {
  localStorage.removeItem(key);
  getWordOfDay();
};

export const getWordOfDay = () => {
  const savedValue = localStorage.getItem(key);
  let index;
  if (!savedValue) {
    index = Math.floor(Math.random() * 38696);
    localStorage.setItem(key, JSON.stringify(index));
  } else {
    index = parseInt(savedValue);
  }
  // const { elapsed, msInDay } = gameTimeInMs();
  // const index = Math.floor(elapsed / msInDay);
  console.log(WORDS[index]);
  return {
    answer: WORDS[index],
  };
};

export const { answer } = getWordOfDay();
