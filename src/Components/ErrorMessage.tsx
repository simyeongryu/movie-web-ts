import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: #e74c3c;
  font-size: 30px;
`;

interface ErrorMessageProps {
  text: string;
}

export default ({ text }: ErrorMessageProps) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);
