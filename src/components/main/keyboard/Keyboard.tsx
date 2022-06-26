import Toast from "components/modals/Toast";
import { WORDS } from "constants/words";
import React, { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  charState,
  gameStatusState,
  wordListState,
  wordState,
} from "recoil/wordle";
import styled from "styled-components";
import { charList, getStatus } from "utils/status";
import Key from "./Key";

function Keyboard() {
  const firstCol = "ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔ";
  const secondCol = "ㅁㄴㅇㄹㅎㅗㅓㅏㅣ";
  const thirdCol = "ㅋㅌㅊㅍㅠㅜㅡ";

  //const [result, setResult] = useState("");
  const [word, setWord] = useRecoilState(wordState);
  const [keyStatus, setKeyStatus] = useRecoilState(charState);
  const setWordList = useSetRecoilState(wordListState);
  const gameStatus = useRecoilValue(gameStatusState);

  const onClick = useCallback(
    (value: string) => {
      // setResult(prevText => prevText + value);
      if (word.length >= 5 || gameStatus !== "IN_PROGRESS") {
        return;
      }
      setWord(word + value);
    },
    [gameStatus, setWord, word]
  );

  const onClickDelete = useCallback(() => {
    setWord(word.slice(0, -1));
  }, [setWord, word]);

  const onClickEnter = useCallback(() => {
    if (word.length === 5) {
      if (!WORDS.includes(word)) {
        Toast.error("해당 단어를 찾을 수 없습니다.");
        return;
      }
      const { charStatus, wordStatus } = getStatus(word);
      setKeyStatus({ ...keyStatus, ...charStatus });
      setWordList((prev) => [...prev, wordStatus]);
      setWord("");
    }
  }, [keyStatus, setKeyStatus, setWord, setWordList, word]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        onClickEnter();
      } else if (e.code === "Backspace") {
        onClickDelete();
      } else {
        if (e.key.length === 1 && charList.includes(e.key)) {
          onClick(e.key);
        }
      }
    };
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [onClickEnter, onClickDelete, onClick]);

  return (
    <KeyboardWrap>
      {/* <ResultBox>{word}</ResultBox> */}
      <Col>
        {firstCol.split("").map((value) => (
          <Key
            key={value}
            value={value}
            status={keyStatus[value]}
            onClick={onClick}
          />
        ))}
      </Col>
      <Col>
        {secondCol.split("").map((value) => (
          <Key
            key={value}
            value={value}
            status={keyStatus[value]}
            onClick={onClick}
          />
        ))}
        <Key value="⌫" width={9} onClick={onClickDelete} />
      </Col>
      <Col>
        {thirdCol.split("").map((value) => (
          <Key
            key={value}
            value={value}
            status={keyStatus[value]}
            onClick={onClick}
          />
        ))}
        <Key value="ENTER" width={10} onClick={onClickEnter} />
      </Col>
    </KeyboardWrap>
  );
}

const KeyboardWrap = styled.div`
  width: 50rem;
  height: 25rem;
  border-radius: 5px;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ResultBox = styled.div`
  text-align: center;
  margin: 1rem 0;
  font-size: 1.6rem;
`;

const Col = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;
export default Keyboard;
