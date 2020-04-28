import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

interface TVState {
  topRated: any[] | null;
  popular: any[] | null;
  airingToday: any[] | null;
  error: string | null;
  loading: boolean;
}

export default class extends React.Component<{}, TVState> {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();

      const {
        data: { results: popular }
      } = await tvApi.popular();

      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();

      this.setState({ topRated, popular, airingToday });
    } catch (e) {
      console.log(e);
      this.setState({ error: "Can't find TV shows info" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { topRated, popular, airingToday, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}
