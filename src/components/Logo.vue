<template>
	<router-link @click="disableSearching" to="/" class="w-1/6"
		><img src="@/assets/tmdb_logo.svg" alt=""
	/></router-link>
</template>

<script setup>
	import { useMoviesStore } from '@/store/moviesStore.js'
	const moviesStore = useMoviesStore()
	function disableSearching() {
		moviesStore.isSearchActive = false
	}
</script>

<style scoped></style>
