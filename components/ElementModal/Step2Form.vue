<script setup lang="ts">
const elementItemsQuantity = defineModel('elementItemsQuantity');
const step = defineModel('step');
</script>
<template>
    <label class="form-control w-full max-w-xs">
        <div class="label">
            <span class="label-text">Quantos itens o elemento tem?</span>
        </div>
        <input v-model="elementItemsQuantity" @keyup.enter="step++" type="number"
            class="input input-bordered input-primary w-full max-w-xs" />
    </label>
    <div class="flex gap-4">
        <button @click="step++" class="btn btn-success text-white">Avançar</button>
        <button @click="step--" class="btn btn-error text-white">Voltar</button>
    </div>
</template>