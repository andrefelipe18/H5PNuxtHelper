<script setup lang="ts">
import { useStorage } from '@vueuse/core'

const screenSizeX = useStorage('screenSizeX', 0);
const screenSizeY = useStorage('screenSizeY', 0);
const screenFullSizeX = useStorage('screenFullSizeX', 0);
const screenFullSizeY = useStorage('screenFullSizeY', 0);

const elementSizeX = ref<Number>();
const elementSizeY = ref<Number>();

const centerX = computed(() => {
    let diferenca = Number(screenFullSizeX.value) - Number(screenSizeX.value);
    return (screenSizeX.value && elementSizeX.value) ? (Number(screenSizeX.value) - Number(elementSizeX.value)) / 2 + diferenca : 0;
});

const centerY = computed(() => {
    let diferenca = Number(screenFullSizeY.value) - Number(screenSizeY.value);
    return (screenSizeY.value && elementSizeY.value) ? (Number(screenSizeY.value) - Number(elementSizeY.value)) / 2 + diferenca : 0;
});
</script>
<template>
    <div class="container bg-gray-800 p-5 rounded-xl w-[20%] max-h-[270px]">
        <div class="flex flex-col text-primary">
            <!-- Pega o tamanho do elemento -->
            <div class="join join-vertical">
                <div class="label">
                    <span class="label-text-alt text-white text-lg">O tamanho X do elemento</span>
                </div>
                <input type="number" v-model="elementSizeX" placeholder="O tamanho X do do elemento"
                    class="w-full input input-bordered" />
                <div class="label">
                    <span class="label-text-alt text-white text-lg">O tamanho Y do elemento</span>
                </div>
                <input type="number" v-model="elementSizeY" placeholder="O tamanho Y do elemento"
                    class="w-full input input-bordered" />
            </div>
        </div>

        <div class="flex gap-10 mt-5 justify-center">
            <p>Centro X: {{ centerX }}</p>
            <p>Centro Y: {{ centerY }}</p>
        </div>
    </div>
</template>