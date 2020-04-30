import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import ErrorMessage from "../../Components/ErrorMessage";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 50px;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div<{ bgImage: string | null }>`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 10px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  font-weight: 600;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 2;
  width: 50%;
`;

const Backdrop = styled.div<{ bgImage: string | null }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

interface DetailProps {
  result: {
    original_title: string;
    original_name: string;
    backdrop_path: string;
    poster_path: string;
    release_date: string;
    first_air_date: string;
    runtime: string;
    episode_run_time: string;
    genres: any[];
    overview: string;
  } | null;
  error: string | null;
  loading: boolean;
}

export default ({ result, error, loading }: DetailProps) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Ryuflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <ErrorMessage text={error} />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result === null
            ? "Not Found"
            : result.original_title
            ? result.original_title
            : result.original_name}
          &nbsp;| Ryuflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={
          result && `https://image.tmdb.org/t/p/original${result.backdrop_path}`
        }
      />
      <Content>
        <Cover
          bgImage={
            result && result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/img/no-image.jpg")
          }
        />
        <Data>
          <Title>
            {result && result.original_title && result.original_title}
            {result && result.original_name && result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result && result.release_date && result.release_date.slice(0, 4)}
              {result &&
                result.first_air_date &&
                result.first_air_date.slice(0, 4)}
            </Item>
            <Divider>|</Divider>
            <Item>
              {result && result.runtime && result.runtime}
              {result && result.episode_run_time && result.episode_run_time[0]}
              {" min"}
            </Item>
            <Divider>|</Divider>
            <Item>
              {result &&
                result.genres &&
                result.genres.map((genre, i) =>
                  i === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result && result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );
