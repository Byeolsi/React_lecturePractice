import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  // Dependency Array를 빈 배열로 정해놓고, 콜백 함수가 함수를 리턴하게 만듦. => ComponentWillUnmount
  // Component가 마운트되었을 때만 콜백 함수 수행.
  // Component가 언마운트되기 전에 콜백 함수가 리턴하는 함수 수행.
  useEffect(() => {
    console.log("Mount!");

    return () => {
      // Unmount 시점에 실행되게 됨.
      console.log("Unmount!");
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  // Dependency Array를 빈 배열로 정해놓음. => ComponentDidMount
  // Component가 처음 마운트되었을 때만 콜백 함수 수행.
  useEffect(() => {
    console.log("Mount!");
  }, []);

  // Dependency Array를 인자로 아예 넣지 않음. => ComponentDidUpdate
  // Component가 업데이트 될 때마다 콜백 함수 수행.
  useEffect(() => {
    console.log("Update!");
  });

  // Dependency Array에 있는 값이 변경되면, 콜백 함수가 수행됨.
  useEffect(() => {
    console.log(`count is update : ${count}`);
    if (count > 5) {
      alert("count가 5를 넘었습니다. 따라서 1로 초기화합니다.");
      setCount(1);
    }
  }, [count]);

  useEffect(() => {
    console.log(`text is update : ${text}`);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnmountTest />}
      </div>
    </div>
  );
};

export default Lifecycle;
