import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import ErrorMessage from "../../Components/ErrorMessage";
import Poster from "../../Components/Poster";

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

export default ({ nowPlaying, upcoming, popular, error, loading }: HomeProps) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Ryuflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      <Helmet>
        <title>Movies | Ryuflix</title>
      </Helmet>
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing Movies">
            {nowPlaying.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.slice(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movies">
            {upcoming.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.slice(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movies">
            {popular.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.slice(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <ErrorMessage text={error} />}
      </Container>
    </>
  );
