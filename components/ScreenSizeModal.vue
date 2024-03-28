<script setup lang="ts">
import { useStorage } from '@vueuse/core'

const screenFullSizeX = useStorage('screenFullSizeX', 0);
const screenFullSizeY = useStorage('screenFullSizeY', 0);
const screenSizeX = useStorage('screenSizeX', 0);
const screenSizeY = useStorage('screenSizeY', 0);

watch([screenSizeX], () => {
    useStorage('screenSizeX', screenSizeX.value);
});

watch([screenSizeY], () => {
    useStorage('screenSizeY', screenSizeX.value);
});
</script>
<template>
    <!-- Open the modal using ID.showModal() method -->
    <button class="btn btn-accent" onclick="screensizeModal.showModal()">Alterar tamanho da tela</button>
    <dialog id="screensizeModal" class="modal">
        <div class="modal-box">

            <div class="flex">
                <div class="join join-vertical">
                    <div class="label">
                        <span class="label-text-alt">O tamanho X da tela</span>
                    </div>
                    <input type="number" v-model="screenFullSizeX" placeholder="O tamanho da tela completo"
                        class="w-full max-w-xs input input-bordered input-accent" />
                    <div class="label">
                        <span class="label-text-alt">O tamanho Y da tela</span>
                    </div>
                    <input type="number" v-model="screenFullSizeY" placeholder="O tamanho da tela completo"
                        class="w-full max-w-xs input input-bordered input-accent" />
                </div>

                <div class="divider lg:divider-horizontal"></div>

                <div class="join join-vertical">
                    <div class="label">
                        <span class="label-text-alt">O tamanho X da tela útil</span>
                    </div>
                    <input type="number" v-model="screenSizeX" placeholder="O tamanho da tela útil"
                        class="w-full max-w-xs input input-bordered input-primary" />
                    <div class="label">
                        <span class="label-text-alt">O tamanho Y da tela útil</span>
                    </div>
                    <input type="number" v-model="screenSizeY" placeholder="O tamanho da tela útil"
                        class="w-full max-w-xs input input-bordered input-primary" />
                </div>
            </div>


            <div class="modal-action">
                <form method="dialog">
                    <button class="mt-4 btn">Salvar</button>
                </form>
            </div>
        </div>
    </dialog>
</template>
<style scoped></style>