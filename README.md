



# 𝙒𝙊𝙍𝘿𝙇𝙀

---

Josh Wardle이 개발한 영어 단어 맞추기 게임을 한글 버전으로 번형하여 제작하였습니다.


하루 한 번만 플레이 할 수 있는 기존 Wordle 게임의 제한이 아쉬워 무제한으로 플레이 가능한 버전을 만들게 되었습니다.

- **한글 풀어쓰기 5자모 버전** 입니다.
- 총 여섯 번의 기회가 주어집니다.
- 단어가 완성되면 `ENTER`를 눌러 제출하면 됩니다.
  (단, 유효한 단어만 제출할 수 있습니다.)
- 제출을 하면 타일의 색상이 변경되어 당신의 추측이 정답에 얼마나 비슷했는지 보여줍니다.





### Preview

![wordle_success](https://user-images.githubusercontent.com/97455256/203608573-705dd354-f4e2-4745-962e-49c7f5cf55bb.gif)





### 프로젝트 특징

cra와 typescript를 사용하여 제작되었습니다.

recoil을 사용해보는 것이 개발 목적 중 하나였기 때문에, recoil을 사용해 제출한 답과 modal의 상태, 게임 전적 상태를 관리하였습니다.

게임 진행 이력과 전적을 local storage에 저장하여 브라우저를 닫아도 언제든 다시 이어서 진행할 수 있도록 제작했습니다.

다크모드를 추가하여 사용자 경험을 향상시켰습니다.





### 🔥기술 스택

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)  
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  
![Recoil](https://img.shields.io/badge/recoil-3578E5?style=for-the-badge)  
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)





### 사용 방법

```
$ git clone https://github.com/iam2go/wordle.git
$ cd wordle
$ npm install
$ npm start
```

브라우저에서 http://localhost:3000을 열어 확인할 수 있습니다.





### License

MIT
