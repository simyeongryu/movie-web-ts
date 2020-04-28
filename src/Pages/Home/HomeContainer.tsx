import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "../../api";

interface HomeState {
  nowPlaying: any[] | null;
  upcoming: any[] | null;
  popular: any[] | null;
  error: string | null;
  loading: boolean;
}

class Home extends React.Component<{}, HomeState> {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await movieApi.nowPlaying();

      const {
        data: { results: upcoming }
      } = await movieApi.upcoming();

      const {
        data: { results: popular }
      } = await movieApi.popular();

      this.setState({ nowPlaying, upcoming, popular });
    } catch (e) {
      console.log(e);
      this.setState({ error: "Can't find movies info" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;

    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default Home;
