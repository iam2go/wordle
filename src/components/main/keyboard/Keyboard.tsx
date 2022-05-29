import React, { useCallback } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { wordListState, wordState } from "recoil/wordle";
import styled from "styled-components";
import Key from "./Key";

function Keyboard() {
  const firstCol = "ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔ";
  const secondCol = "ㅁㄴㅇㄹㅎㅗㅓㅏㅣ";
  const thirdCol = "ㅋㅌㅊㅍㅠㅜㅡ";

  //const [result, setResult] = useState("");
  const [word, setWord] = useRecoilState(wordState);
  const setWordList = useSetRecoilState(wordListState);

  const onClick = useCallback(
    (value: string) => {
      // setResult(prevText => prevText + value);
      if (word.length >= 5) return;
      setWord(word + value);
    },
    [setWord, word]
  );

  const onClickDelete = useCallback(() => {
    setWord(word.slice(0, -1));
  }, [setWord, word]);

  const onClickEnter = useCallback(() => {
    if (word.length === 5) {
      setWordList((prev) => [...prev, word]);
      setWord("");
    }
  }, [setWord, setWordList, word]);

  return (
    <KeyboardWrap>
      {/* <ResultBox>{word}</ResultBox> */}
      <Col>
        {firstCol.split("").map((value) => (
          <Key key={value} value={value} onClick={onClick} />
        ))}
      </Col>
      <Col>
        {secondCol.split("").map((value) => (
          <Key key={value} value={value} onClick={onClick} />
        ))}
        <Key value="⌫" width={9} onClick={onClickDelete} />
      </Col>
      <Col>
        {thirdCol.split("").map((value) => (
          <Key key={value} value={value} onClick={onClick} />
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
