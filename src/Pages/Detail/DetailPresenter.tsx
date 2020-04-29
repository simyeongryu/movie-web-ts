import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import ErrorMessage from "../../Components/ErrorMessage";

const Container = styled.div``;

const Content = styled.div``;

const Cover = styled.div``;

const Data = styled.div``;

const ItemContainer = styled.div``;

const Item = styled.span``;

const Divider = styled.span``;

const Overview = styled.p``;

const Backdrop = styled.div<{ bgImage: string | null }>``;

interface DetailProps {
  result: {
    original_title: string;
    original_name: string;
    backdrop_path: string;
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
    </Container>
  );
