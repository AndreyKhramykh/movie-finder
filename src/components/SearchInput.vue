<template>
	<div class="relative border-b-[1px] border-white w-3/4 p-2">
		<input
			v-model="searchQuery"
			@keyup.enter="searchMovies(searchQuery)"
			@input="handleInput"
			class="w-3/4 font-semibold bg-stone-950 outline-none"
			placeholder="Search movie"
		/>
		<img
			class="absolute top-1/2 -translate-y-2/4 right-2 w-[20px]"
			src="../assets//lupa_white.png"
			alt=""
		/>
	</div>

	<button class="bg-blue rounded px-4 py-1" @click="searchMovies(searchQuery)">
		Search
	</button>
</template>

<script setup>
	import { ref } from 'vue'
	import { useMoviesStore } from '@/store/moviesStore.js'
	const moviesStore = useMoviesStore()
	import { storeToRefs } from 'pinia'
	const { searchMobileMenu, bluredBackground } = storeToRefs(moviesStore)
	import { useRouter } from 'vue-router'
	const router = useRouter()

	const searchQuery = ref('')

	async function searchMovies(queryParams) {
		await moviesStore.searchMovies(queryParams)
		moviesStore.isSearchActive = true
		searchQuery.value = ''
		searchMobileMenu.value = false
		bluredBackground.value = false
		router.push('/search-result')
	}
</script>

<style></style>
