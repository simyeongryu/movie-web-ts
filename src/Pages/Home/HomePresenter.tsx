import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import ErrorMessage from "../../Components/ErrorMessage";

interface HomeProps {
  nowPlaying: any[] | null;
  upcoming: any[] | null;
  popular: any[] | null;
  error: string | null;
  loading: boolean;
}

const Container = styled.div`
  padding: 20px;
`;

export default ({
  nowPlaying,
  upcoming,
  popular,
  error,
  loading
}: HomeProps) => (
  <>
    <Helmet>
      <title>Movies | Ryuflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing Movies">
            {nowPlaying.map(movie => (
              <span>{movie.title}</span>
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movies">
            {upcoming.map(movie => (
              <span>{movie.title}</span>
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movies">
            {popular.map(movie => (
              <span>{movie.title}</span>
            ))}
          </Section>
        )}
        {error && <ErrorMessage text={error} color="#EA2027" />}
      </Container>
    )}
  </>
);
