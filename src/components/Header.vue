<template>
        <div class="flex flex-row items-center justify-between p-10">
            <Logo/>
            <SearchInput/>
        </div>
        <GenresBlock/>
</template>
    
<script setup>
    import Logo from '@/components/Logo.vue'
    import SearchInput from '@/components/SearchInput.vue'
    import GenresBlock from '@/components/GenresBlock.vue'
</script>
    
<style>
    
</style>