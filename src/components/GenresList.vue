<template>
	<div class="text-xl" v-for="elem in genresArray" :key="elem.id">
		<router-link
			class="hover:cursor-pointer hover:text-green"
			:to="`/genre/` + elem.id"
			>{{ elem.name }}</router-link
		>
	</div>
</template>

<script setup>
	import { useMoviesStore } from '@/store/moviesStore.js'
	const moviesStore = useMoviesStore()
	const genresArray = moviesStore.genresArray
</script>

<style scoped>
	.router-link-active {
		color: #01d277;
	}
</style>
