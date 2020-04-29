import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import ErrorMessage from "../../Components/ErrorMessage";

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
    <Helmet>
      <title>Search | Ryuflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies of TV shows"
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title={"Movies Results"}>
            {movieResults.map(movie => (
              <span>{movie.title}</span>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title={"TV Shows Results"}>
            {tvResults.map(show => (
              <span>{show.name}</span>
            ))}
          </Section>
        )}
        {error && <ErrorMessage text={error} color="#e74c3c" />}
        {movieResults &&
          tvResults &&
          movieResults.length <= 0 &&
          tvResults.length <= 0 && (
            <ErrorMessage text="Nothing Found" color="#7f8c8d" />
          )}
      </>
    )}
  </Container>
);
