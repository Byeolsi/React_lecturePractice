import { useState, useRef, useEffect } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import Lifecycle from "./Lifecycle";

// https://jsonplaceholder.typicode.com/comments

// const dummyList = [
//   {
//     id: 1,
//     author: "이정환",
//     content: "하이 1",
//     emotion: 5,
//     // 인자 없이 Date 함수를 호출하면, 현재 시각을 기준으로 날짜 객체가 생성됨.
//     // 인자 없이 getTime 함수를 호출하면, ms 단위 숫자로 바뀜.
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "홍길동",
//     content: "하이 2",
//     emotion: 2,
//     // 인자 없이 Date 함수를 호출하면, 현재 시각을 기준으로 날짜 객체가 생성됨.
//     // 인자 없이 getTime 함수를 호출하면, ms 단위 숫자로 바뀜.
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "아무개",
//     content: "하이 3",
//     emotion: 1,
//     // 인자 없이 Date 함수를 호출하면, 현재 시각을 기준으로 날짜 객체가 생성됨.
//     // 인자 없이 getTime 함수를 호출하면, ms 단위 숫자로 바꿈.
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  // 리스트를 diaryList Prop으로 전달.
  // onCreate()를 Prop으로 전달.
  return (
    <div className="App">
      <Lifecycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
