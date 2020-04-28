import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span<{ color: string }>`
  color: ${props => props.color};
  font-size: 30px;
`;

interface ErrorMessageProps {
  text: string;
  color: string;
}

export default ({ text, color }: ErrorMessageProps) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);
