import React from "react";
import styled from "styled-components";

const ImgSize = styled.img`
  width: 300px;
  height: 220px;
  border-radius: 10px;
`;

function Img({ imgUrl }: { imgUrl: string }) {
  return <ImgSize src={imgUrl} />;
}

export default Img;
