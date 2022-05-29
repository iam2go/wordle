import { answer } from "./word";

export type WordWithStatus = {
  [key: string]: CharStatus;
};
export type CharStatus = "absent" | "present" | "correct";

export const getStatus = (word: string) => {
  let charStatus: WordWithStatus = {};
  console.log(answer);
  word.split("").forEach((char, i) => {
    if (!answer.includes(char)) {
      return (charStatus[char] = "absent");
    }
    if (char === answer[i]) {
      return (charStatus[char] = "correct");
    }

    return (charStatus[char] = "present");
  });

  return charStatus;
};
