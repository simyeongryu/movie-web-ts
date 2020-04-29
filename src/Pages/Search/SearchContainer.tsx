import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";
import { stringify } from "querystring";

interface SearchState {
  movieResults: any[] | null;
  tvResults: any[] | null;
  searchTerm: string;
  error: string | null;
  loading: boolean;
}

export default class extends React.Component<{}, SearchState> {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };
  // 혹은 React.SyntheticEvent<HTMLInputElement> 로 타이핑 후
  updateTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // const { value } = e.currentTarget;
    this.setState({ searchTerm: value });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });

    try {
      const {
        data: { results: movieResults }
      } = await movieApi.search(searchTerm);

      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);

      this.setState({ movieResults, tvResults });
    } catch (e) {
      console.log(e);
      this.setState({ error: "Can't find search data" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;

    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
