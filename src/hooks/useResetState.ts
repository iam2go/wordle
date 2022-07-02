import { useResetRecoilState } from "recoil";
import { charState, gameStatusState, wordListState } from "recoil/wordle";
import { resetWord } from "utils/word";

function useResetState() {
  const resetWordList = useResetRecoilState(wordListState);
  const resetGameStatus = useResetRecoilState(gameStatusState);
  const resetCharStatus = useResetRecoilState(charState);

  const onReset = () => {
    resetWordList();
    resetWord();
    resetGameStatus();
    resetCharStatus();
  };
  return onReset;
}

export default useResetState;
