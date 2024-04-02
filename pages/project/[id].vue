<script setup>
import { useStorage } from "@vueuse/core";

const route = useRoute();
const id = route.params.id;

const projects = useStorageAsync('projects', []);
const project = ref(null);

watch(projects, () => {
    project.value = projects.value.find((p) => p.id === id);
});
</script>
<template>
    <main v-if="project" class="w-full flex flex-col p-5">
        <div class="">
            <h1 class="text-4xl font-bold text-center mt-8">Projeto: {{ project.name }}</h1>
            <p class="text-lg text-center mt-4">Voltar para os
                <span class="text-blue-300">
                    <NuxtLink to="/projects">Projetos</NuxtLink>
                </span>
            </p>
        </div>

        <div class="mt-14 flex justify-center">
            <ElementModal :project="project" />
        </div>
        <div class="mt-10 w-full flex justify-center">
            <ElementList :project="project" />
        </div>
    </main>
    <main v-else class="w-full h-screen flex flex-col p-5 justify-center items-center">
        <span class="loading loading-spinner text-secondary"></span>
    </main>
</template>