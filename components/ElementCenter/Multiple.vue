<script setup lang="ts">
const { width } = useScreenSize();

const elementCount = ref<Number | undefined>();
const elementsArray = computed(() => Array(elementCount.value).fill(undefined));
const elementSizes = ref([]);
const elementPositions = ref<Number[]>([]);

watch([elementCount], () => {
    if (Number(elementCount.value) > 5) {
        elementCount.value = 5;
    }
});

const calculatePositions = () => {
    const totalElementWidth = elementSizes.value.reduce((sum, size) => sum + size, 0);
    const totalSpaceWidth = (Number(elementCount.value) - 1) * 15;
    const totalWidth = totalElementWidth + totalSpaceWidth;
    const remainingSpace = Number(width.value) - totalWidth;
    const leftSpace = remainingSpace / 2;

    elementPositions.value = elementSizes.value.map((size, index) => {
        const previousElementsWidth = elementSizes.value.slice(0, index).reduce((sum, size) => sum + size, 0);
        const previousSpacesWidth = index * 15;
        return leftSpace + previousElementsWidth + previousSpacesWidth;
    });
};
</script>
<template>
    <div class="bg-[#191e24] p-5 rounded-lg w-fit flex h-fit">
        <div class="">
            <h2>Calcular centro X para até 5 elementos</h2>
            <div class="">
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text">Quantos elementos?</span>
                    </div>
                    <input type="number" v-model.number="elementCount"
                        class="input input-bordered input-info w-full max-w-xs" />
                    <div class="label">
                        <span class="label-text-alt">Máximo 5</span>
                    </div>
                </label>
                <button @click="calculatePositions" class="btn btn-info">
                    Calcular
                </button>
                <div class="mt-10 flex flex-col justify-center gap-2 mx-auto">
                    <div v-for="(position, index) in elementPositions" :key="index">
                        <p>
                            Elemento <span class="text-red-100 font-semibold">{{ index + 1 }}</span>
                            Posição X: <span class="text-red-100 font-semibold">{{ position }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="">
            <div v-for="(element, index) in elementsArray" :key="index">
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text">Largura do elemento X</span>
                    </div>
                    <input v-model.number="elementSizes[index]" type="number"
                        class="input input-bordered input-info w-full max-w-xs" />
                </label>
            </div>
        </div>
    </div>
</template>