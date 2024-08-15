import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Status from "./components/Status";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  // const title = "Counter App";
  // const year = new Date().getFullYear();

  // props를 변수로 넘기는 방법과 아래 처럼 직접 넘기는 방식 중 어떤 방식이 좋은지 잘 모르겠습니다..
  // 일단 둘 다 작성해봤습니다.

  return (
    <div>
      <Header title="Counter App" />
      <Content count={count} setCount={setCount} />
      <Status count={count} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
