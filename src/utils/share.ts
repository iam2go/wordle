import { WordWithStatus } from "./status";

export const shareStatus = (guesses: WordWithStatus[][]) => {
  navigator.clipboard.writeText(
    "wordle 5글자✋ " + guesses.length + "/6\n\n" + generateEmojiGrid(guesses)
  );
};

export const generateEmojiGrid = (guesses: WordWithStatus[][]) => {
  return guesses
    .map((guess) =>
      guess
        .map(({ status }, i) => {
          switch (status) {
            case "correct":
              return "🟩";
            case "present":
              return "🟨";
            default:
              return "⬜";
          }
        })
        .join("")
    )
    .join("\n");
};
