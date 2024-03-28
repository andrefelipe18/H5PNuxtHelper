<script setup lang="ts">
const { width, utilWidth, height, utilHeight } = useScreenSize();

const elementSizeX = ref(0);
const elementSizeY = ref(0);

const centerX = computed(() => {
    let diferenca = Number(width.value) - Number(utilWidth.value);
    let result = (utilWidth.value && elementSizeX.value) ? (Number(utilWidth.value) - Number(elementSizeX.value)) / 2 + diferenca : 0;
    return Math.floor(result);
});

const centerY = computed(() => {
    let diferenca = Number(height.value) - Number(utilHeight.value);
    let result = (utilHeight.value && elementSizeY.value) ? (Number(utilHeight.value) - Number(elementSizeY.value)) / 2 + diferenca : 0;
    return Math.floor(result);
});
</script>
<template>
    <div class="container w-full flex gap-5 justify-center">
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
                    <ButtonCopy :value="centerY"/>
                </p>
            </div>
        </div>
        <div class="bg-[#191e24] p-5 rounded-lg w-fit flex">
            <div class="">
                <h2>Calcular centro X para até 5 elementos</h2>
                <div class="">
                    <label class="form-control w-full max-w-xs">
                        <div class="label">
                            <span class="label-text">Quantos elementos?</span>
                        </div>
                        <input type="number" class="input input-bordered input-info w-full max-w-xs" />
                        <div class="label">
                            <span class="label-text-alt">Máximo 5</span>
                        </div>
                    </label>
                </div>
            </div>
            <div class="divider divider-horizontal"></div>
            <div class="">
                <div class="">
                    <label class="form-control w-full max-w-xs">
                        <div class="label">
                            <span class="label-text">Largura do elemento X</span>
                        </div>
                        <input type="number" class="input input-bordered input-info w-full max-w-xs" />
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>