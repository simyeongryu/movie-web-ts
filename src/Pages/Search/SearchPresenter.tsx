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

const Form = styled.form`
  width: 100%;
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

interface SearchProps {
  movieResults: any[] | null;
  tvResults: any[] | null;
  searchTerm: string;
  error: string | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  updateTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm
}: SearchProps) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies of TV shows"
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <>
        <Helmet>
          <title>Loading | Ryuflix</title>
        </Helmet>
        <Loader />
      </>
    ) : (
      <>
        <Helmet>
          <title>Search | Ryuflix</title>
        </Helmet>
        {movieResults && movieResults.length > 0 && (
          <Section title={"Movies Results"}>
            {movieResults.map(movie => (
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
        {tvResults && tvResults.length > 0 && (
          <Section title={"TV Shows Results"}>
            {tvResults.map(show => (
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
        {movieResults &&
          tvResults &&
          movieResults.length <= 0 &&
          tvResults.length <= 0 && <ErrorMessage text="Nothing Found" />}
      </>
    )}
  </Container>
);
