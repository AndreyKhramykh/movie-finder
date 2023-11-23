<template>
	<div class="grid grid-cols-5 justify-items-center" v-if="!isMobileDevice">
		<GenresList />
	</div>
</template>

<script setup>
	import GenresList from './GenresList.vue'
	import { useMoviesStore } from '@/store/moviesStore.js'
	import { storeToRefs } from 'pinia'
	const moviesStore = useMoviesStore()
	const { isMobileDevice } = storeToRefs(moviesStore)
</script>

<style scoped></style>
