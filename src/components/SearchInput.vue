<template>
	<input
		v-model="searchQuery"
		@keyup.enter="searchMovies(searchQuery)"
		@input="handleInput"
		class="h-1/3 w-1/4 p-2"
		placeholder="Search movie"
	/>
	<router-link to="/search-result"
		><button @click="searchMovies(searchQuery)">Search</button></router-link
	>
</template>

<script setup>
	import { ref } from 'vue'
	import { useMoviesStore } from '@/store/moviesStore.js'
	const moviesStore = useMoviesStore()

	const searchQuery = ref('')

	async function searchMovies(queryParams) {
		await moviesStore.searchMovies(queryParams)
		moviesStore.isSearching = true
		searchQuery.value = ''
	}
</script>

<style></style>
