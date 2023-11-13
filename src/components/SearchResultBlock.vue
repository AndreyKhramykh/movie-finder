<template>
  <div v-if="moviesStore.searchQueryMovies.length > 0">
    <div v-for="elem in searchResultArray" :key="elem.id">{{ elem }}</div>
  </div>
  <div v-else>Nothing not found yet</div>
</template>

<script setup>
import { ref } from "vue";
import { useMoviesStore } from "@/store/moviesStore.js";
const moviesStore = useMoviesStore();
const searchResultArray = ref([]);
searchResultArray.value = moviesStore.searchQueryMovies;
</script>

<style></style>
