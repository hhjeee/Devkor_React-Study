import React from "react";
import styled from "styled-components";
import Info from "./Info";
import Wrap from "./ClassItem";

function App() {
  return (
    <BackGroundColor>
      <Header>
        <h2>최신 제품.</h2>
        <span>따끈따끈한 신제품 이야기.</span>
      </Header>
      <Container>
        {Info.map((element) => (
          <Wrap item={element} key={element.title}></Wrap>
        ))}
      </Container>
    </BackGroundColor>
  );
}

const Container = styled.div`
  display: flex;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  padding-top: 10px;
  padding-bottom: 10px;
`;
const BackGroundColor = styled.div`
  background-color: #f5f5f7;
  width: 100vw;
  height: 100vh;
`;
const Header = styled.div`
  font-weight: bolder;
  h2 {
    font-weight: bolder;
    display: inline;
    font-size: 26px;
  }
  span {
    font-weight: bolder;
    display: inline;
    color: #6e6e73;
    font-size: 26px;
  }
  padding-top: 50px;
  padding-bottom: 8px;
  margin-left: 200px;
`;

export default App;
