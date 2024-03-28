<script setup lang="ts">

</script>
<template>
    <main class="w-full flex flex-col p-5">
        <h1 class="text-4xl font-bold text-center mt-8">Meus Projetos</h1>
        <p class="text-lg text-center mt-4">Ir para a <span class="text-blue-300">
                <NuxtLink to="/">Home</NuxtLink>
            </span></p>

        <div class="mt-20 flex justify-center">
            <ProjectsModal />
        </div>
        <div class="mt-10 w-full flex justify-center">
            
        </div>
    </main>
</template>
<style scoped></style>