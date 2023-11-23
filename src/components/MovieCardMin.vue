<template>
	<div class="flex text-center flex-col items-center h-full">
		<div
			v-if="props.posterUrl == undefined"
			class="w-2/4 flex flex-col items-center"
		>
			<img class="w-[40px]" src="@/assets/imageNotFound.png" alt="" />
			<p class="text-xl font-semibold text-blue">Image not found</p>
		</div>
		<img
			v-else
			:src="getFullPosterUrl(props.posterUrl)"
			:alt="props.posterUrl"
			class="w-2/4"
		/>
		<h1 class="text-xl font-semibold">{{ props.title }}</h1>
		<p class="text-green">{{ props.genres }}</p>
		<p class="font-semibold">{{ props.dateRelease }}</p>
		<h3 class="text-green">Rating: {{ props.voteAverage }}/10</h3>
	</div>
</template>

<script setup>
	// import axios from "axios";
	import { defineProps } from 'vue'

	function getFullPosterUrl(posterPath) {
		return `https://image.tmdb.org/t/p/w500${posterPath}`
	}

	const props = defineProps({
		title: {
			required: true,
			default: 'title',
		},
		genres: {
			required: true,
			default: 'genres',
		},
		voteAverage: {
			required: true,
			default: 'voteAverage',
		},
		posterUrl: {
			required: true,
			default: 'posterUrl',
		},
		dateRelease: {
			required: true,
			default: 'dateRelease',
		},
	})
</script>

<style scoped></style>
