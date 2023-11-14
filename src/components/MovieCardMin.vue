<template>
  <div class="flex text-center flex-col items-center">
    <img v-if="props.posterUrl == undefined" src="@/assets/imageNotFound.png" alt="">
    <img v-else :src="getFullPosterUrl(props.posterUrl)" :alt="props.posterUrl" class="w-2/4"/>
    <h1>{{ props.title }}</h1>
    <p>{{ props.genres }}</p>
    <p>{{ props.dateRelease }}</p>
    <h3>Rating: {{ props.voteAverage }}/10</h3>
  </div>
</template>

<script setup>
// import axios from "axios";
import { defineProps } from "vue";


function getFullPosterUrl(posterPath) {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
}

const props = defineProps({
  title: {
    required: true,
    default: "title",
  },
  genres: {
    required: true,
    default: "genres",
  },
  voteAverage: {
    required: true,
    default: "voteAverage",
  },
  posterUrl: {
    required: true,
    default: "posterUrl",
  },
  dateRelease: {
    required: true,
    default: "dateRelease",
  }
});
</script>

<style scoped>

</style>
