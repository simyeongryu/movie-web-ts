import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 30px;
  color: white;
`;

export default () => (
  <Container>
    <Text>404 ERROR</Text>
  </Container>
);
