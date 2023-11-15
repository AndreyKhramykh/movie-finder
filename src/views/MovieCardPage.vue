<template>
  <LoaderGlobal v-if="moviesStore.isGlobalLoading" />
  <div>
    <Header />
    <MovieCardBLock />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import MovieCardBLock from "@/components/MovieCardBLock.vue";
import Footer from "@/components/Footer.vue";

import { useMoviesStore } from "@/store/moviesStore.js";
const moviesStore = useMoviesStore();
moviesStore.setGlobalLoading(false, 1000);
</script>

<style></style>
