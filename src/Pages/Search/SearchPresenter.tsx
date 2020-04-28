import React from "react";

interface SearchProps {
  movieResults: object[] | null;
  tvResults: object[] | null;
  searchTerm: string;
  error: string | null;
  loading: boolean;
}

export default ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading
}: SearchProps) => <h1>Search</h1>;
