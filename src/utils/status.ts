import { getWordOfDay } from "./word";

export type CharWithStatus = {
  [key: string]: CharStatus;
};

export type WordWithStatus = {
  value: string;
  status: CharStatus;
};

export type gameStatus = "IN_PROGRESS" | "WIN" | "LOSE";
export type CharStatus = "absent" | "present" | "correct";

export const charList =
  "ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔㅁㄴㅇㄹㅎㅗㅓㅏㅣㅋㅌㅊㅍㅠㅜㅡ".split("");
export const getStatus = (word: string) => {
  let charStatus: CharWithStatus = {};
  let answer = getWordOfDay();

  const wordStatus = word.split("").map((char, i): WordWithStatus => {
    let status: CharStatus = "present";
    if (!answer.includes(char)) {
      charStatus[char] = "absent";
      status = "absent";
    } else if (char === answer[i]) {
      charStatus[char] = "correct";
      status = "correct";
    } else if (charStatus[char] !== "correct") {
      charStatus[char] = "present";
    }
    return { value: char, status };
  });

  return { charStatus, wordStatus };
};
