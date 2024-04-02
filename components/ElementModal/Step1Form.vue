<script setup lang="ts">
const elementName = defineModel('elementName');
const step = defineModel('step');
</script>
<template>
    <label class="form-control w-full max-w-xs">
        <div class="label">
            <span class="label-text">Nome do elemento</span>
        </div>
        <input v-model="elementName" @keyup.enter="step++" type="text"
            class="input input-bordered input-primary w-full max-w-xs" />
    </label>
    <div class="">
        <button @click="step++" class="btn btn-success text-white">Avançar</button>
    </div>
</template>
<style scoped></style>