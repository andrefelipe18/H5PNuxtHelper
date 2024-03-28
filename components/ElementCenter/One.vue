<script setup lang="ts">
const elementSizeX = defineModel('elementSizeX');
const elementSizeY = defineModel('elementSizeY');

const props = defineProps<{
    centerX: number;
    centerY: number;
}>();
</script>
<template>
    <div class="bg-[#191e24] p-5 rounded-lg">
        <h2>Calcular centro para 1 elemento</h2>
        <div class="">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text">Largura do elemento</span>
                </div>
                <input type="number" id="elementSizeX" v-model="elementSizeX"
                    class="input input-bordered input-info w-full max-w-xs" />
            </label>
        </div>
        <div class="">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text">Altura do elemento</span>
                </div>
                <input type="number" id="elementSizeY" v-model="elementSizeY"
                    class="input input-bordered input-info w-full max-w-xs" />
            </label>
        </div>
        <div class="flex flex-col justify-center gap-5 mt-2">
            <p class="flex gap-2 justify-between items-center">
                <span>Posição X: <span>{{ centerX }}</span></span>
                <ButtonCopy :value="centerX" />
            </p>
            <p class="flex gap-2 justify-between items-center">
                <span>Posição Y: <span>{{ centerY }}</span></span>
                <ButtonCopy :value="centerY" />
            </p>
        </div>
    </div>
</template>
<style scoped></style>