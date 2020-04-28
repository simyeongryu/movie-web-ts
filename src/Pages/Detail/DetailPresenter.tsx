import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Content = styled.div``;

const Cover = styled.div``;

const Data = styled.div``;

const ItemContainer = styled.div``;

const Item = styled.span``;

const Divider = styled.span``;

const Overview = styled.p``;

const Backdrop = styled.div``;

interface DetailProps {
  result: object | null;
  error: string | null;
  loading: boolean;
}

export default ({ result, error, loading }: DetailProps) => <h1>Detail</h1>;
