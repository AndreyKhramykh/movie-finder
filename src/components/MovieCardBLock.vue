<template>
	<div class="relative">
		<div
			class="h-full w-full bg-cover blur-sm top-0 left-0 absolute z-0"
			:style="`background-image: url('${getFullPosterUrl(
				moviesStore.movieInfo.backdrop_path
			)}');`"
		></div>
		<div class="py-20">
			<div
				class="bg-gray-950/95 text-white relative w-3/4 m-auto z-1 flex flex-col mobile:flex-row rounded-lg"
			>
				<img
					class="w-3/4 m-auto pt-2 mobile:w-1/3 mobile:m-0 mobile:pt-0"
					:src="getFullPosterUrl(moviesStore.movieInfo.poster_path)"
					alt=""
				/>
				<div class="p-6 mobile:p-10">
					<h1 class="text-3xl">{{ moviesStore.movieInfo.title }}</h1>
					<h2 class="text-xl pt-2 text-emerald-500">
						{{ moviesStore.movieInfo.tagline }}
					</h2>
					<p class="pt-2">{{ moviesStore.movieInfo.overview }}</p>
					<div
						class="flex border-b-[2px] pb-2 flex-col mobile:flex-row gap-3 pt-2 text-emerald-500"
					>
						<div v-for="elem in moviesStore.movieInfo.genres" :key="elem.id">
							{{ elem.name }} /
						</div>
					</div>
					<div
						class="flex border-b-[2px] pb-2 flex-col mobile:flex-row gap-3 pt-2"
					>
						<div
							v-for="elem in moviesStore.movieInfo.production_companies"
							:key="elem.id"
						>
							{{ elem.name }} /
						</div>
					</div>
					<div
						class="flex border-b-[2px] pb-2 flex-col mobile:flex-row gap-3 pt-2"
					>
						<div
							v-for="elem in moviesStore.movieInfo.production_countries"
							:key="elem.name"
						>
							{{ elem.name }} /
						</div>
					</div>
					<div class="grid grid-cols-2 grid-rows-2 gap-3 pt-2">
						<p class="flex flex-col">
							Film duration:
							<strong class="text-xs mobile:text-xl text-emerald-500"
								>{{ moviesStore.movieInfo.runtime }} mins</strong
							>
						</p>
						<p class="flex flex-col">
							Release date:
							<strong class="text-xs mobile:text-xl text-emerald-500">
								{{ moviesStore.movieInfo.release_date }}</strong
							>
						</p>
						<p class="flex flex-col">
							Box office:
							<strong class="text-xs mobile:text-xl text-emerald-500">{{
								convertRevenue(moviesStore.movieInfo.revenue)
							}}</strong>
						</p>
						<p class="flex flex-col">
							Vote average:
							<strong class="text-xs mobile:text-xl text-emerald-500">{{
								convertAverage(moviesStore.movieInfo.vote_average)
							}}</strong>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useMoviesStore } from '@/store/moviesStore.js'

	import { onBeforeMount } from 'vue'

	import { useRouter } from 'vue-router'
	const router = useRouter()

	const moviesStore = useMoviesStore()

	function getFullPosterUrl(posterPath) {
		return `https://image.tmdb.org/t/p/w500${posterPath}`
	}
	function convertRevenue(sum) {
		let result = `${(sum / 1000000).toFixed()} mln$`
		return result
	}
	function convertAverage(arg) {
		let result = `${(arg / 1).toFixed(1)} / 10`
		return result
	}

	async function rerender(id) {
		if (moviesStore.movieInfo.title == undefined) {
			await moviesStore.getMovieData(id)
		}
	}

	onBeforeMount(() => {
		rerender(router.currentRoute.value.params.id)
	})
	console.log(`output->`, typeof moviesStore.movieInfo.vote_average)
</script>

<style></style>
