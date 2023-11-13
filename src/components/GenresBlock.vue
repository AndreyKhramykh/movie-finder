<template>
  <div>
    <div class="grid grid-cols-5 justify-items-center">
      <div
        class="transition-all hover:cursor-pointer hover:scale-150"
        v-for="elem in genresArray"
        :key="elem.id"
      >
        <router-link :to="`/genre/` + elem.id">{{ elem.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMoviesStore } from "@/store/moviesStore.js";
const moviesStore = useMoviesStore();
const genresArray = moviesStore.genresArray;
</script>

<style scoped></style>
