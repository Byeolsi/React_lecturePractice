import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이정환",
    content: "하이 1",
    emotion: 5,
    // 인자 없이 Date 함수를 호출하면, 현재 시각을 기준으로 날짜 객체가 생성됨.
    // 인자 없이 getTime 함수를 호출하면, ms 단위 숫자로 바뀜.
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "홍길동",
    content: "하이 2",
    emotion: 2,
    // 인자 없이 Date 함수를 호출하면, 현재 시각을 기준으로 날짜 객체가 생성됨.
    // 인자 없이 getTime 함수를 호출하면, ms 단위 숫자로 바뀜.
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "아무개",
    content: "하이 3",
    emotion: 1,
    // 인자 없이 Date 함수를 호출하면, 현재 시각을 기준으로 날짜 객체가 생성됨.
    // 인자 없이 getTime 함수를 호출하면, ms 단위 숫자로 바꿈.
    created_date: new Date().getTime(),
  },
];

function App() {
  // 리스트를 diaryList prop으로 전달.
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
