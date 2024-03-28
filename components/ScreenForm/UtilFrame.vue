<script setup lang="ts">
const newUtilWidthSize = defineModel('newUtilWidthSize');
const newUtilHeightSize = defineModel('newUtilHeightSize');
</script>
<template>
    <div class="join join-vertical">
        <div class="label">
            <span class="label-text-alt">A largura útil do frame H5P </span>
        </div>
        <input type="number" v-model="newUtilWidthSize" class="w-full max-w-xs input input-bordered input-primary" />
        <div class="label">
            <span class="label-text-alt">O tamanho Y da tela útil</span>
        </div>
        <input type="number" v-model="newUtilHeightSize" class="w-full max-w-xs input input-bordered input-primary" />
    </div>
</template>