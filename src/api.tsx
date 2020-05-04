import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

const baseParams = {
  params: {
    api_key: "9a8525c940f5235964bb5e78513b8720",
    language: "en-US"
  }
};

export const tvApi = {
  topRated() {
    return api.get("tv/top_rated", baseParams);
  },
  popular() {
    return api.get("tv/popular", baseParams);
  },
  airingToday() {
    return api.get("tv/airing_today", baseParams);
  },
  detail(id: number) {
    return api.get(`tv/${id}`, {
      params: {
        api_key: "9a8525c940f5235964bb5e78513b8720",
        language: "en-US",
        append_to_response: "vidoes"
      }
    });
  },
  search(term: string) {
    return api.get("search/tv", {
      params: {
        api_key: "9a8525c940f5235964bb5e78513b8720",
        language: "en-US",
        query: encodeURIComponent(term)
      }
    });
  }
};

export const movieApi = {
  nowPlaying() {
    return api.get("movie/now_playing", baseParams);
  },
  upcoming() {
    return api.get("movie/upcoming", baseParams);
  },
  popular() {
    return api.get("movie/popular", baseParams);
  },
  detail(id: number) {
    return api.get(`movie/${id}`, {
      params: {
        api_key: "9a8525c940f5235964bb5e78513b8720",
        language: "en-US",
        append_to_response: "videos"
      }
    });
  },
  search(term: string) {
    return api.get("search/movie", {
      params: {
        api_key: "9a8525c940f5235964bb5e78513b8720",
        language: "en-US",
        query: encodeURIComponent(term)
      }
    });
  }
};
