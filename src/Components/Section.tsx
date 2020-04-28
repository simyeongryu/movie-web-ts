import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 30px;
`;

const Title = styled.span`
  font-size: 26px;
  font-weight: 700;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

interface SectionProps {
  title: string;
  children: any[];
}

export default ({ title, children }: SectionProps) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);
