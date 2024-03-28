<script setup lang="ts">
const elementSizeX = ref(0);
const elementSizeY = ref(0);

const centerX = useElementCenterX(elementSizeX);
const centerY = useElementCenterY(elementSizeY);


</script>
<template>
    <div class="container w-full flex gap-5 justify-center">
        <ElementCenterOne v-model:elementSizeX="elementSizeX" v-model:elementSizeY="elementSizeY" :centerX="centerX" :centerY="centerY" />
        <ElementCenterMultiple />
    </div>
</template>
<style scoped></style>