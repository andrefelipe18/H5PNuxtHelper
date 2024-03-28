<script setup lang="ts">
definePageMeta({
    layout: 'default',
})

useSeoMeta({
    title: 'H5P - Helper',
    description: 'H5P - Helper',
    keywords: 'H5P - Helper',
    robots: 'index, follow',
});
</script>
<template>
    <main class="w-full flex flex-col p-5">
        <h1 class="text-4xl font-bold text-center mt-8">H5P - Helper</h1>
        <p class="text-lg text-center mt-4">Ir para meus <span class="text-blue-300">
                <NuxtLink to="/projects">Projetos</NuxtLink>
            </span></p>

        <div class="mt-20 flex justify-center">
            <ScreenSizeModal />
        </div>
        <div class="mt-10 w-full flex justify-center">
            <ElementCenter />
        </div>
    </main>
</template>
<style scoped></style>