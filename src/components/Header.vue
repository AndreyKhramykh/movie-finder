<template>
	<div
		v-if="!isMobileDevice"
		class="flex flex-row items-center justify-between p-10"
	>
		<Logo />
		<div class="flex flex-row items-center justify-between w-1/2 gap-[20px]">
			<SearchInput />
		</div>
	</div>
	<div v-else class="flex flex-row items-center justify-between p-10">
		<MobileMenu />
		<Logo />
	</div>
</template>

<script setup>
	import Logo from '@/components/Logo.vue'
	import SearchInput from '@/components/SearchInput.vue'
	import MobileMenu from '@/components/MobileMenu.vue'

	import { useMoviesStore } from '@/store/moviesStore.js'
	import { storeToRefs } from 'pinia'
	// import MobileMenuVue from './MobileMenu.vue'
	const moviesStore = useMoviesStore()
	const { isMobileDevice } = storeToRefs(moviesStore)
</script>

<style></style>
