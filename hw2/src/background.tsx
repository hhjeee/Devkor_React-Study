import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  margin: 10px;
  padding: 30px;
  background-color: black;
`;

function BackGround({ children }: { children: any }) {
  return <Container>{children}</Container>;
}

export default BackGround;
