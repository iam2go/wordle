import { useResetRecoilState } from "recoil";
import {
  charState,
  gameStatusState,
  wordListState,
  wordState,
} from "recoil/wordle";
import { resetWord } from "utils/word";

function useResetState() {
  const resetCurrentWord = useResetRecoilState(wordState);
  const resetWordList = useResetRecoilState(wordListState);
  const resetGameStatus = useResetRecoilState(gameStatusState);
  const resetCharStatus = useResetRecoilState(charState);

  const onReset = () => {
    resetCurrentWord();
    resetWord();
    resetWordList();
    resetGameStatus();
    resetCharStatus();
  };
  return onReset;
}

export default useResetState;
