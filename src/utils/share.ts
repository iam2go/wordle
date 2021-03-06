import { WordWithStatus } from "./status";

export const shareStatus = (guesses: WordWithStatus[][]) => {
  navigator.clipboard.writeText(
    "wordle 5κΈμβ " + guesses.length + "/6\n\n" + generateEmojiGrid(guesses)
  );
};

export const generateEmojiGrid = (guesses: WordWithStatus[][]) => {
  return guesses
    .map((guess) =>
      guess
        .map(({ status }, i) => {
          switch (status) {
            case "correct":
              return "π©";
            case "present":
              return "π¨";
            default:
              return "β¬";
          }
        })
        .join("")
    )
    .join("\n");
};
