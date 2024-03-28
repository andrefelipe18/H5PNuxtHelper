<script setup lang="ts">
import { useStorage } from '@vueuse/core'

const screenSizeX = useStorage('screenSizeX', 0);
const screenSizeY = useStorage('screenSizeY', 0);

const elementCount = ref<Number | undefined>();
const elementsArray = computed(() => Array(elementCount.value).fill(undefined));
const elementSizes = ref([]);
const elementPositions = ref<Number[]>([]);

// O maximo de elementos é 5
watch([elementCount], () => {
    if (Number(elementCount.value) > 5) {
        elementCount.value = 5;
    }
});

const calculatePositions = () => {
    const totalElementWidth = elementSizes.value.reduce((sum, size) => sum + size, 0);
    const totalSpaceWidth = (Number(elementCount.value) - 1) * 15;
    const totalWidth = totalElementWidth + totalSpaceWidth;
    const remainingSpace = screenSizeX.value - totalWidth;
    const leftSpace = remainingSpace / 2;

    elementPositions.value = elementSizes.value.map((size, index) => {
        const previousElementsWidth = elementSizes.value.slice(0, index).reduce((sum, size) => sum + size, 0);
        const previousSpacesWidth = index * 15;
        return leftSpace + previousElementsWidth + previousSpacesWidth;
    });
};
</script>
<template>
    <div class="container bg-gray-800 p-5 rounded-xl w-[30%] min-h-[318px]">
        <div class="flex flex-col lg:flex-row">

            <div class="flex flex-col">
                <!-- Pega a quantidade de elementos -->
                <div class="join join-vertical">
                    <div class="label">
                        <span class="label-text-alt">Quantos elementos?</span>
                    </div>
                    <input type="number" v-model.number="elementCount" placeholder="Quantidade de elementos"
                        class="input input-bordered input-accent" />
                    <div class="label">
                        <span class="label-text-alt">Max 5</span>
                    </div>
                </div>
                <button class="btn" @click="calculatePositions">Calcular</button>
            </div>
            <div class="divider lg:divider-horizontal"></div>

            <!-- Pega o tamanho do elemento -->
            <div class="join join-vertical">
                <!-- Para cada elemento vai perguntar a largura -->
                <div v-for="(element, index) in elementsArray" :key="index"
                    class="flex flex-col items-center justify-center">
                    <input v-model.number="elementSizes[index]" type="number" placeholder="Largura do elemento"
                        class="mt-2 input input-bordered input-secondary" />
                </div>
            </div>
        </div>

        <div class="flex justify-center gap-10 mx-auto">
            <div v-for="(position, index) in elementPositions" :key="index">
                <p>Elemento {{ index + 1 }}: {{ position }} pixels</p>
            </div>
        </div>
    </div>
</template>
<style scoped></style>