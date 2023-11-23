import { API_KEY } from "@/constants";
import axios from "axios";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("moviesStore", {
  state: () => {
    return {
      movieInfo: {},
      genresArray: [],
      moviesListArray: [],
      currentPageAPI: 1,
      isGlobalLoading: true,
			slidesQuantity: 3,
			isMobileDevice: false,
			genresMobileMenu: false,
			searchMobileMenu: false,
			bluredBackground: false,
			isSearchActive: false
    };
  },
  actions: {
    async getMovieData(id) {
      await axios
        .get(`https://api.themoviedb.org/3/movie/${id}${API_KEY}`)
        .then((response) => {
          this.movieInfo = response.data;
        })
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
          this.moviesListArray = response.data.results;
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
          this.moviesListArray = response.data.results;
        });
    },
    async searchMovies(searchQuery) {
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie${API_KEY}&query=${searchQuery}`
        )
        .then((response) => {
          this.moviesListArray = response.data.results;
        });
    },
    setGlobalLoading(boolean, duration) {
      setTimeout(() => {
        this.isGlobalLoading = boolean;
      }, duration);
    },
		checkDeviceWidth() {
			if (window.innerWidth < 768) {
				this.slidesQuantity = 1;
				this.isMobileDevice = true;
			}
		}
  },
  getters: {
    isMoviesListEmpty: (state) => {
      return Boolean(state.moviesListArray.length)
    }
  }
});
