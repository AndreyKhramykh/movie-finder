<template>
	<div>
		<div class="cursor-pointer" @click="toogleGenresMenu">Genres</div>
		<div
			@click="toogleGenresMenu"
			class="absolute w-full transition translate-x-[-100%] top-0 p-2 left-0 bg-black z-40"
			:class="{ 'translate-x-[0%]': genresMobileMenu }"
		>
			<div class="flex flex-col gap-[10px] p-4">
				<GenresList />
			</div>
			<XMark
				class="absolute top-[4px] right-[4px] cursor-pointer z-40 hover:scale-125"
			/>
		</div>
	</div>
	<div>
		<img
			@click="toogleSearchMenu"
			class="w-[20px] cursor-pointer"
			src="../assets//lupa_white.png"
			alt=""
		/>
		<div
			class="absolute top-0 left-0 transition translate-y-[-140%] w-full bg-black flex flex-row items-center p-4 gap-[4px] z-40"
			:class="{ 'translate-y-[10%]': searchMobileMenu }"
		>
			<SearchInput />
			<XMark
				@click="toogleSearchMenu"
				class="absolute bottom-[-26px] right-[10px] cursor-pointer hover:scale-125"
			/>
		</div>
	</div>
	<div
		@click="disableBlur"
		v-if="bluredBackground"
		class="fixed inset-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm z-30"
	></div>
</template>

<script setup>
	import GenresList from '@/components/GenresList.vue'
	import XMark from '@/components/XMark.vue'
	import SearchInput from '@/components/SearchInput.vue'

	import { useMoviesStore } from '@/store/moviesStore.js'
	import { storeToRefs } from 'pinia'

	const moviesStore = useMoviesStore()

	const { genresMobileMenu, searchMobileMenu, bluredBackground } =
		storeToRefs(moviesStore)

	function toogleGenresMenu() {
		genresMobileMenu.value = !genresMobileMenu.value
		bluredBackground.value = !bluredBackground.value
	}
	function toogleSearchMenu() {
		searchMobileMenu.value = !searchMobileMenu.value
		bluredBackground.value = !bluredBackground.value
	}
	function disableBlur() {
		genresMobileMenu.value = false
		searchMobileMenu.value = false
		bluredBackground.value = false
	}
</script>

<style></style>
