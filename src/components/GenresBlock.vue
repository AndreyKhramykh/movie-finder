<template>
	<div>
		<div class="grid grid-cols-5 justify-items-center">
			<div
				class="transition-all text-xl hover:cursor-pointer hover:text-green"
				v-for="elem in genresArray"
				:key="elem.id"
			>
				<router-link :to="`/genre/` + elem.id">{{ elem.name }}</router-link>
			</div>
		</div>
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
