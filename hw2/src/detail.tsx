import React from "react";
import styled from "styled-components";

const Font = styled.div`
  color: lightgray;
`;

interface DetailProps {
  category: string;
  company: string;
}

function Detail({ category, company }: DetailProps) {
  return (
    <Font>
      {category} | {company}
    </Font>
  );
}

export default Detail;
