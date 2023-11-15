import axios from "axios";
import { defineStore } from "pinia";
import { API_KEY } from "@/constants";

export const useMoviesStore = defineStore("moviesStore", {
  state: () => {
    return {
      MOVIE_SECTION: "/movie/",
      DEFAULT_MOVIE_ID: "157336",
      movieInfo: {},
      genresArray: [],
      popularMoviesArray: [],
      moviesInGenreArray: [],
      searchQueryMovies: [],
      currentPageAPI: 1,
      isGlobalLoading: true,
    };
  },
  actions: {
    async getMovieData(id) {
      await axios
        .get(`https://api.themoviedb.org/3/movie/${id}${API_KEY}`)
        .then((response) => {
          this.movieInfo = response.data;
        })
        .catch((err) => err == "new err");
    },
    async getGenresData() {
      await axios
        .get(`https://api.themoviedb.org/3/genre/movie/list${API_KEY}`)
        .then((response) => {
          this.genresArray = response.data.genres;
        });
    },
    async getPopularMoviesList() {
      await axios
        .get(`https://api.themoviedb.org/3/movie/popular${API_KEY}`, {
          params: {
            page: this.currentPageAPI,
          },
        })
        .then((response) => {
          this.popularMoviesArray = response.data.results;
        });
    },
    async getMoviesInGenreList(genreID) {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie${API_KEY}&with_genres=${genreID}`,
          {
            params: {
              page: this.currentPageAPI,
            },
          }
        )
        .then((response) => {
          this.moviesInGenreArray = response.data.results;
        });
    },
    async searchMovies(searchQuery) {
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie${API_KEY}&query=${searchQuery}`
        )
        .then((response) => {
          this.searchQueryMovies = response.data.results;
        });
    },
    setGlobalLoading(boolean, duration) {
      setTimeout(() => {
        this.isGlobalLoading = boolean;
      }, duration);
    },
  },
});
