<script setup>
import { useStorage } from "@vueuse/core";

const props = defineProps({
    project: Object
});

const step = ref(1);

//Step 1
const elementName = ref('');

//Step 2
const elementItemsQuantity = ref(null);

//Step 3
const elementItems = ref([]);

watch(elementItemsQuantity, (newQuantity) => {
    elementItems.value = Array.from({ length: newQuantity }).map(() => ({
        name: '',
        xBase: 0,
        yBase: 0,
        heightBase: 0,
        widthBase: 0,
    }));
});

const newElement = () => {
    const elementsStore = useStorage('elements', []);

    elementsStore.value.push({
        projectId: props.project.id,
        id: Math.random().toString(36).substr(2, 9),
        name: elementName.value,
        items: elementItems.value
    });
};
</script>
<template>
    <button class="btn btn-info" onclick="newElement.showModal()">Adicionar novo elemento H5P</button>
    <dialog id="newElement" class="modal">
        <div class="modal-box">
            <div class="bg-gray-800 p-5 rounded-xl">
                <!-- Steps principal -->
                <ElementModalSteps :step="step" />
            </div>

            <div v-show="step === 1" class="flex flex-col justify-center mt-5 gap-4">
                <ElementModalStep1Form v-model:elementName="elementName" v-model:step="step" />
            </div>

            <div v-show="step === 2" class="flex flex-col justify-center mt-10 gap-4">
                <ElementModalStep2Form v-model:elementItemsQuantity="elementItemsQuantity" v-model:step="step" />
            </div>

            <div v-show="step === 3" class="flex flex-col justify-center mt-5 gap-4">
                <ElementModalStep3Form :elementItemsQuantity="elementItemsQuantity" v-model:elementItems="elementItems"
                    v-model:step="step" />
            </div>

            <div v-show="step === 3" class="modal-action">
                <form method="dialog">
                    <div class="flex gap-2">
                        <button @click="newElement" class="mt-4 btn btn-info text-white">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    </dialog>
</template>