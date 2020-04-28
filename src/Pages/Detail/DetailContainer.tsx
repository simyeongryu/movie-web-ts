import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

interface DetailState {
  result: object | null;
  error: string | null;
  loading: boolean;
  isMovie: boolean;
}

interface DetailProps {
  location: {
    pathname: string;
  };
  match: {
    params: {
      id: string;
    };
  };
  history: {
    push: Function;
  };
}
export default class extends React.Component<DetailProps, DetailState> {
  constructor(props: any) {
    super(props);

    const {
      location: { pathname }
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    const numberId = Number(id);
    const { isMovie } = this.state;

    if (Number.isNaN(numberId)) {
      alert("상세 페이지에 접근할 수 없습니다.");
      return push("/");
    }

    let { result } = this.state;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.detail(numberId));
      } else {
        ({ data: result } = await tvApi.detail(numberId));
      }
    } catch (e) {
      console.log(e);
      this.setState({ error: "Can't find detail info" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
