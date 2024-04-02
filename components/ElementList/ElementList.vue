<script setup>
import { useStorage } from "@vueuse/core";

const elements = useStorage('elements', []);
const elementDetail = ref({
    id: 0,
    name: '',
    items: [],
});

const openModal = (element) => {
    elementDetail.value = element;
    useMoreDetailModal().openModal();
};

const item1Selected = ref(null);
const item2Selected = ref(null);

const diff = ref(null);

const calculateDifference = (element) => {
    const item1 = element.items.find((item) => item.name === item1Selected.value);
    const item2 = element.items.find((item) => item.name === item2Selected.value);

    diff.value = {
        xBase: item1.xBase - item2.xBase,
        yBase: item1.yBase - item2.yBase,
        heightBase: item1.heightBase - item2.heightBase,
        widthBase: item1.widthBase - item2.widthBase,
    };
};
</script>
<template>
    <div class="w-full">
        <ul>
            <li v-for="element in elements" :key="element.id">
                <div class="card w-96 bg-white shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-[#333]">{{ element.name }}</h2>
                        <p class="text-[#333]">{{ element.items.length }} items - <button @click="openModal(element)"
                                class="btn btn-accent">Ver Items</button></p>
                        <p class="text-[#333]">Calcular a dirença entre dois itens</p>

                        <div class="flex gap-2">
                            <div class="">
                                <label class="form-control w-full max-w-xs">
                                    <div class="label">
                                        <span class="label-text text-[#333]">Item 1</span>
                                    </div>
                                    <select v-model="item1Selected" class="select select-info w-full max-w-xs">
                                        <option v-for="item in element.items" :key="item.id">{{ item.name }}</option>
                                    </select>
                                </label>
                            </div>

                            <div class="">
                                <label class="form-control w-full max-w-xs">
                                    <div class="label">
                                        <span class="label-text text-[#333]">Item 2</span>
                                    </div>
                                    <select v-model="item2Selected" class="select select-info w-full max-w-xs">
                                        <option v-for="item in element.items" :key="item.id">{{ item.name }}</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div class="card-actions justify-start">
                            <button @click="calculateDifference(element)" class="btn btn-accent">Calcular</button>
                        </div>

                        <template v-if="diff">
                            <div class="text-[#333]">
                                <h4 class="font-bold">Do item <span class="text-red-900">{{ item1Selected }}</span> para
                                    o item <span class="text-red-900">{{ item2Selected }}</span> possui a seguinte
                                    diferença:</h4>
                                <p></p>
                                <div class="flex gap-2">
                                    <p class="w-1/2">X: {{ diff.xBase }}</p>
                                    <p>Y: {{ diff.yBase }}</p>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </li>
        </ul>

        <ElementListModalDetail :elementDetail />
    </div>
</template>