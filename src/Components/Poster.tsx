import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div<{ bgUrl: string }>`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  margin-bottom: 2px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 2px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

interface PosterProps {
  id: number;
  imageUrl: string;
  title: string;
  rating: number;
  year: string;
  isMovie: boolean;
}

export default ({
  id,
  imageUrl,
  title,
  rating,
  year,
  isMovie = false
}: PosterProps) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/img/no-image.jpg")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          &nbsp;{rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title.length > 18 ? `${title.slice(0, 18)}...` : title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);
