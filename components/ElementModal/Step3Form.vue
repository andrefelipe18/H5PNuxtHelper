<script setup>
defineProps({
    elementItemsQuantity: Number,
});

const elementItems = defineModel('elementItems');
const step = defineModel('step');
</script>
<template>
    <div class="">
        <div class="bg-gray-800 p-5 rounded-xl m-2"
            v-for="(item, index) in Array.from({ length: elementItemsQuantity })" :key="index">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text">Nome do item {{ index + 1 }}</span>
                </div>
                <input v-model="elementItems[index].name" type="text"
                    class="input input-bordered input-primary w-full max-w-xs" />
            </label>
            <div class="flex gap-2">
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text">Posição X</span>
                    </div>
                    <input v-model="elementItems[index].xBase" type="number"
                        class="input input-bordered input-primary w-full max-w-xs" />
                </label>
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text">Posição Y</span>
                    </div>
                    <input v-model="elementItems[index].yBase" type="number"
                        class="input input-bordered input-primary w-full max-w-xs" />
                </label>
            </div>
            <div class="flex gap-2">
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text">Altura base</span>
                    </div>
                    <input v-model="elementItems[index].heightBase" type="number"
                        class="input input-bordered input-primary w-full max-w-xs" />
                </label>
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text">Largura base</span>
                    </div>
                    <input v-model="elementItems[index].widthBase" type="number"
                        class="input input-bordered input-primary w-full max-w-xs" />
                </label>
            </div>
        </div>
        <div class="flex gap-4">
            <button @click="step--" class="btn btn-error text-white">Voltar</button>
        </div>
    </div>
</template>
<style scoped></style>