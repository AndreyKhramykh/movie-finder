<template>
  <LoaderLocal v-if="isLoading" />
  <div v-else>
    <h1 class="text-center mt-8 text-2xl">{{ pageTitle }}</h1>
    <div v-if="isNotFound">
      <img class="w-1/6" src="@/assets/lupa.png" alt="" />
      <p>Sorry, we did not find anything for your request</p>
    </div>
    <swiper
      v-else
      :modules="modules"
      :slides-per-view="3"
      :slides-per-group="3"
      :space-between="1"
      navigation
      :pagination="{
        clickable: true,
        dynamicBullets: true,
      }"
      class="swiper"
    >
      <swiper-slide v-for="elem in currentArray" :key="elem.id">
        <MovieCardMin
          @click="goToMovieCard(elem.id)"
          :title="elem.title"
          :vote-average="elem.vote_average.toFixed(1)"
          :poster-url="elem.poster_path"
          :genres="transformGenreIdToName(elem.genre_ids)"
          :date-release="transformDate(elem.release_date)"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
// General options
import MovieCardMin from "./MovieCardMin.vue";
import LoaderLocal from "./LoaderLocal.vue";
// import Loader from '@/components/Loader.vue'
import { useMoviesStore } from "@/store/moviesStore.js";
import { ref, onMounted, watch } from "vue";

// Swiper options
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const modules = [Navigation, Pagination];

// Router options
import { useRouter } from "vue-router";
const router = useRouter();

const moviesStore = useMoviesStore();
const currentArray = ref();
const pageTitle = ref();
const currentGenreName = ref();
const isNotFound = ref(false);
const isLoading = ref(false);
const genresArray = moviesStore.genresArray;

pageTitle.value = "Most popular movies now!";

currentArray.value = moviesStore.popularMoviesArray;
console.log(`output->moviesStore.isLoading`, moviesStore.isLoading);

async function goToMovieCard(id) {
  moviesStore.isGlobalLoading = true;
  await moviesStore.getMovieData(id);
  router.push(`/moviecard/${id}`);
}

function transformGenreIdToName(arrayOfId) {
  const resultArray = [];
  genresArray.forEach((element) => {
    arrayOfId.forEach((id) => {
      if (element.id == id) {
        resultArray.push(element.name);
      }
    });
  });
  return resultArray.join(" / ");
}
function transformDate(date) {
  return date.split("-")[0];
}
function disableLoader() {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
}

async function rerender(id) {
  if (id != undefined) {
    await moviesStore.getMoviesInGenreList(id);
    currentArray.value = moviesStore.moviesInGenreArray;
    currentGenreName.value = genresArray.find((item) => item.id == id);
    pageTitle.value = `Best film in "${currentGenreName.value.name}" category`;
  }
}
watch(
  () => router.currentRoute.value.params.id,
  () => {
    isLoading.value = true;
    rerender(router.currentRoute.value.params.id);
    disableLoader();
  }
);
watch(
  () => moviesStore.searchQueryMovies,
  () => {
    isLoading.value = true;
    if (moviesStore.searchQueryMovies.length > 0) {
      isNotFound.value = false;
      currentArray.value = moviesStore.searchQueryMovies;
      pageTitle.value = `Search results:`;
    } else {
      pageTitle.value = `Search results:`;
      isNotFound.value = true;
    }
    disableLoader();
  }
);
onMounted(() => {
  isLoading.value = true;
  rerender(router.currentRoute.value.params.id);
  disableLoader();
});
</script>

<style scoped>
.swiper {
  margin-top: 2%;
  margin-bottom: 2%;
  padding-bottom: 3%;
}
</style>
