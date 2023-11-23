<template>
	<div
		class="bg-black text-white max-h-full min-h-screen flex flex-col justify-between font-display"
	>
		<LoaderGlobal v-if="moviesStore.isGlobalLoading" />
		<router-view v-if="isDataReady" />
	</div>
</template>
<script setup>
	import LoaderGlobal from '@/components/LoaderGlobal.vue'
	import { useMoviesStore } from '@/store/moviesStore.js'
	import { onBeforeMount, ref } from 'vue'
	const moviesStore = useMoviesStore()
	const isDataReady = ref(false)

	onBeforeMount(async () => {
		moviesStore.checkDeviceWidth()
		await moviesStore.getGenresData()
		await moviesStore.getPopularMoviesList()
		isDataReady.value = true
		moviesStore.setGlobalLoading(false, 2000)
	})
</script>

<style lang="scss"></style>
