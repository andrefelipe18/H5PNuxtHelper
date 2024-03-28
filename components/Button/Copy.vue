<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

const props = defineProps<{
    value: number;
}>();

const source = ref(props.value.toString());

const { text, copy, copied, isSupported } = useClipboard({ source })
</script>
<template>
    <button @click="copy(source)" class="btn btn-accent transition">
        <span v-if="!copied">
            <IconCopy />
        </span>
        <span v-else>
            <IconCopied />
        </span>
    </button>
</template>
<style scoped></style>