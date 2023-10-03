import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  padding 50px;
  border-radius: 10px;
  box-shadow: 2px 4px 12px lightgray;
  background: white;
  text-align: center;
  font-weight: 500;
`;

interface NameProps {
  firstName: string;
  lastName: string;
}

function MyComponent({ lastName, firstName }: NameProps) {
  return (
    <Container>
      {firstName} {lastName}
    </Container>
  );
}

export default MyComponent;
