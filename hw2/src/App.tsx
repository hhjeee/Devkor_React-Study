import React from "react";
import MyComponent from "./MyComponent";
import BackGround from "./background";
import Img from "./img";
import Title from "./title";
import Detail from "./detail";

function App() {
  return (
    <div>
      <MyComponent lastName="Yun" firstName="HyunJi" />

      <BackGround>
        <Img imgUrl="https://cdn.class101.net/images/60b28d67-66e5-4e41-84b3-98cf87e28408/1920xauto.webp" />
        <Title props='"원밀리언 댄스 스튜디오 with 리아킴"에게 배우는 댄스 입문' />
        <Detail category="라이프스타일" company="1MILLION" />
      </BackGround>
    </div>
  );
}

export default App;
