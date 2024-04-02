<script setup lang="ts">
const newProjectName = defineModel('newProjectName');
</script>
<template>
    <div class="">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Nome do projeto</span>
            </div>
            <input type="text" v-model="newProjectName" class="input input-bordered input-primary w-full max-w-xs" />
        </label>
    </div>
</template>