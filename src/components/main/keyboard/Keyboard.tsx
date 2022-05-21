import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeWord, wordSelector } from "../../../store/slice";
import Key from "./Key";

function Keyboard() {
  const firstCol = "ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔ";
  const secondCol = "ㅁㄴㅇㄹㅎㅗㅓㅏㅣ";
  const thirdCol = "ㅋㅌㅊㅍㅠㅜㅡ";

  //const [result, setResult] = useState("");
  const dispatch = useDispatch();
  const word = useSelector(wordSelector);

  const onClick = useCallback(
    (value: string) => {
      // setResult(prevText => prevText + value);
      if (word.length >= 5) return;
      dispatch(changeWord(word + value));
    },
    [dispatch, word]
  );

  const onClickDelete = useCallback(() => {
    // setResult(prevText => prevText.slice(0, -1))
    dispatch(changeWord(word.slice(0, -1)));
  }, [dispatch, word]);

  const onClickEnter = useCallback(() => {
    if (word.length === 5) {
      dispatch(changeWord(""));
    }
  }, [dispatch, word]);

  return (
    <KeyboardWrap>
      <ResultBox>{word}</ResultBox>
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
