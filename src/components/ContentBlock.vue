<template>
	<LoaderLocal v-if="isLoading" />
	<div v-else>
		<h1 class="text-center mt-8 font-bold text-3xl">{{ pageTitle }}</h1>
		<div
			class="flex flex-col p-10 items-center gap-10"
			v-if="moviesStore.isMoviesListEmpty"
		>
			<img class="w-1/6" src="@/assets/lupa_white.png" alt="" />
			<p>Sorry, we did not find anything for your request</p>
		</div>
		<swiper
			v-else
			:modules="modules"
			:slides-per-view="3"
			:slides-per-group="3"
			:space-between="1"
			navigation
			class="swiper"
		>
			<swiper-slide
				class="h-full"
				v-for="elem in moviesListArray"
				:key="elem.id"
			>
				<MovieCardMin
					@click="goToMovieCard(elem.id)"
					:title="elem.title"
					:vote-average="elem.vote_average.toFixed(1)"
					:poster-url="elem.poster_path"
					:genres="transformGenreIdToName(elem.genre_ids)"
					:date-release="transformDate(elem.release_date)"
				/>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script setup>
	// DOM elements
	import MovieCardMin from './MovieCardMin.vue'
	import LoaderLocal from './LoaderLocal.vue'

	// VUE, Pinia options
	import { useMoviesStore } from '@/store/moviesStore.js'
	import { storeToRefs } from 'pinia'
	import { ref, onMounted, watch } from 'vue'

	// Swiper options
	import { Swiper, SwiperSlide } from 'swiper/vue'
	import { Navigation } from 'swiper/modules'
	import 'swiper/css'
	import 'swiper/css/navigation'
	import 'swiper/css/pagination'
	const modules = [Navigation]

	// Router options
	import { useRouter } from 'vue-router'
	const router = useRouter()

	// Main const
	const moviesStore = useMoviesStore()
	const pageTitle = ref()
	const currentGenreName = ref()
	const isLoading = ref(false)
	const { moviesListArray, genresArray } = storeToRefs(moviesStore)

	// Component default options
	pageTitle.value = 'Most popular movies now!'
	moviesStore.isSearching = false

	// Functions
	async function goToMovieCard(id) {
		moviesStore.isGlobalLoading = true
		await moviesStore.getMovieData(id)
		router.push(`/moviecard/${id}`)
	}

	function transformGenreIdToName(arrayOfId) {
		const resultArray = []
		genresArray.value.forEach((element) => {
			arrayOfId.forEach((id) => {
				if (element.id == id) {
					resultArray.push(element.name)
				}
			})
		})
		return resultArray.join(' / ')
	}
	function transformDate(date) {
		return date.split('-')[0]
	}
	function disableLoader() {
		setTimeout(() => {
			isLoading.value = false
		}, 1000)
	}

	async function rerender(id) {
		moviesStore.isSearching = false
		if (id != undefined) {
			await moviesStore.getMoviesInGenreList(id)
			currentGenreName.value = genresArray.value.find((item) => item.id == id)
			pageTitle.value = `Best film in "${currentGenreName.value.name}" category`
		} else {
			await moviesStore.getPopularMoviesList()
		}
	}

	// Watching render changes
	watch(
		() => router.currentRoute.value.params.id,
		() => {
			isLoading.value = true
			rerender(router.currentRoute.value.params.id)
			disableLoader()
		}
	)
	watch(
		() => moviesListArray.value,
		() => {
			isLoading.value = true
			if (moviesListArray.value.length == 0) {
				pageTitle.value = `Search results:`
			}
			disableLoader()
		}
	)
	watch(
		() => moviesStore.isSearching,
		() => {
			pageTitle.value = `Search results:`
		}
	)
	onMounted(() => {
		isLoading.value = true
		rerender(router.currentRoute.value.params.id)
		disableLoader()
	})
</script>

<style scoped>
	.swiper {
		margin-top: 2%;
		margin-bottom: 2%;
		padding-bottom: 3%;
	}
</style>
