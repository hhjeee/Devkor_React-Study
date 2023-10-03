import React from "react";
import styled from "styled-components";

const Font = styled.h3`
  color: white;
  white-space: pre-line;
  line-height: 1.3;
  margin-bottom: 10px;
`;

function Title({ props }: { props: string }) {
  return <Font>{props}</Font>;
}

export default Title;
