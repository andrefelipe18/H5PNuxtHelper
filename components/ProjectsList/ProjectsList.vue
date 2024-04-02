<script setup>
import { useStorage } from "@vueuse/core";

const props = defineProps({
    projects: Array
});

const router = useRouter();

const possibleColors = [
    'bg-primary',
    'bg-secondary',
    'bg-accent',
    'bg-success',
    'bg-warning',
    'bg-error'
];

const randomColor = () => {
    return possibleColors[Math.floor(Math.random() * possibleColors.length)];
};

const projects = useStorageAsync('projects', []);
</script>
<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div v-for="project in projects" :key="project.id"
                :class="['card w-96 text-primary-content', randomColor()]">
                <div class="card-body">
                    <h2 class="card-title text-white font-bold">{{ project.name }}</h2>
                    <p class="text-white font-semibold">Quantidade de elementos: </p>
                    <div class="card-actions justify-end">
                        <button class="btn">
                            <NuxtLink :to="'/project/' + project.id">Ver detalhes</NuxtLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>