import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import ErrorMessage from "../../Components/ErrorMessage";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0 20px;
`;

interface TVProps {
  topRated: any[] | null;
  popular: any[] | null;
  airingToday: any[] | null;
  error: string | null;
  loading: boolean;
}

export default ({ topRated, popular, airingToday, error, loading }: TVProps) =>
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
        <title>TV Shows | Ryuflix</title>
      </Helmet>
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {topRated.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.slice(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.slice(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today Shows">
            {airingToday.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.slice(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <ErrorMessage text={error} />}
      </Container>
    </>
  );
