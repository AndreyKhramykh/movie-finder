<template>
  <div  class="bg-cyan-200 max-h-full min-h-screen flex flex-col justify-between">
    <Loader v-if="isLoading"/>
    <router-view v-if="isDataReady"/>
  </div>
</template>
<script setup>
import Loader from '@/components/Loader.vue'
import { useMoviesStore } from '@/store/moviesStore.js';
import { onBeforeMount, ref} from 'vue';
const moviesStore = useMoviesStore();
const isDataReady = ref(false);
const isLoading = ref(true);

function disableLoader() {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000)
}

onBeforeMount(async () => {
  // await moviesStore.getMovieData();
  await moviesStore.getGenresData();
  await moviesStore.getPopularMoviesList();
  isDataReady.value = true;
  disableLoader();
})
// onMounted(() => {
//   console.log(`output->movieStore.movieInfo`,moviesStore.movieInfo)
// })

// console.log(`output->`,moviesStore.movieInfo);

// movieInfo.value = moviesStore.movieInfo;

// console.log(`output->`,movieInfo.value)


</script>

<style lang="scss">
</style>
