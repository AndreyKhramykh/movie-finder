<template>
  <div class="relative">
    <div
      class="h-full w-full bg-cover blur-sm top-0 left-0 absolute z-0"
      :style="`background-image: url('${getFullPosterUrl(
        movieData.backdrop_path
      )}');`"
    ></div>
    <div class="bg-gray-950/95 text-white relative my-20 w-3/4 m-auto z-1 flex flex-row rounded-lg">
       <img class="w-1/3" :src="getFullPosterUrl(movieData.poster_path)" alt="">
       <div class="p-10">
              <h1 class="text-3xl">{{ movieData.original_title }}</h1>
              <h2 class="text-xl pt-2 text-emerald-500">{{ movieData.tagline }}</h2>
              <p class="pt-2">{{ movieData.overview }}</p>
              <div class="flex flex-row gap-3 pt-2 text-emerald-500">
                     <div v-for="elem in movieData.genres" :key="elem.id">{{ elem.name }}</div>
              </div>
              <div class="flex flex-row gap-3 pt-2">
                     <div v-for="elem in movieData.production_companies" :key="elem.id">{{ elem.name }}</div>
              </div>
              <div class="flex flex-row gap-3 pt-2">
                     <div v-for="elem in movieData.production_countries" :key="elem.name">{{ elem.name }}</div>
              </div>
              <div class="grid grid-cols-2 grid-rows-2 gap-3 pt-2">
                     <p>Film duration: <strong class="text-xl text-emerald-500">{{ movieData.runtime }} mins</strong></p>
                     <p>Release date: <strong class="text-xl text-emerald-500"> {{ movieData.release_date }}</strong></p>
                     <p>Box office: <strong class="text-xl text-emerald-500">{{ movieData.revenue }} dollars</strong></p>
                     <p>Vote average: <strong class="text-xl text-emerald-500">{{ movieData.vote_average }}/10</strong></p>
              </div>
       </div>
    </div>
  </div>
</template>

<script setup>
import { useMoviesStore } from "@/store/moviesStore.js";
const moviesStore = useMoviesStore();
const movieData = moviesStore.movieInfo;
console.log(`output->`, movieData);
function getFullPosterUrl(posterPath) {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
}
</script>

<style></style>
