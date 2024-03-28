<script setup lang="ts">
import { useStorage } from "@vueuse/core";

const newWidthSize = useStorage('screenWidth', 0);
const newHeightSize = useStorage('screenHeight', 0);
const newUtilWidthSize = useStorage('screenUtilWidth', 0);
const newUtilHeightSize = useStorage('screenUtilHeight', 0);
</script>
<template>
    <button class="btn btn-accent" onclick="screensizeModal.showModal()">Alterar tamanho da tela</button>
    <dialog id="screensizeModal" class="modal">
        <div class="modal-box">
            <div class="flex">
                <ScreenFormH5PFrame 
                    v-model:newWidthSize="newWidthSize" 
                    v-model:newHeightSize="newHeightSize" 
                />

                <div class="divider lg:divider-horizontal"></div>

                <ScreenFormUtilFrame 
                    v-model:newUtilWidthSize="newUtilWidthSize" 
                    v-model:newUtilHeightSize="newUtilHeightSize"
                />
            </div>


            <div class="modal-action">
                <form method="dialog">
                    <div class="flex gap-2">
                        <button class="mt-4 btn btn-success text-white">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    </dialog>
</template>