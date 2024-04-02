<script setup lang="ts">
const props = defineProps({
    step: Number
});
</script>
<template>
    <ul class="steps">
        <li class="step step-primary">Qual é o elemento?</li>
        <li :class="step > 1 ? 'step step-primary' : 'step'">Quantos itens ele tem?</li>
        <li :class="step > 2 ? 'step step-primary' : 'step'">Adicione os itens</li>
    </ul>
</template>
<style scoped></style>