<script setup lang="ts">
const newWidthSize = defineModel('newWidthSize')
const newHeightSize = defineModel('newHeightSize')
</script>
<template>
    <div class="join join-vertical">
        <div class="label">
            <span class="label-text-alt">A largura do frame H5P</span>
        </div>
        <input type="number" v-model="newWidthSize" class="w-full max-w-xs input input-bordered input-accent" />
        <div class="label">
            <span class="label-text-alt">A altura do frame H5P</span>
        </div>
        <input type="number" v-model="newHeightSize" class="w-full max-w-xs input input-bordered input-accent" />
    </div>
</template>