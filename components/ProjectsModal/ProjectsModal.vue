<script setup lang="ts">
import { useStorage } from "@vueuse/core";


</script>
<template>
    <button class="btn btn-accent" onclick="newproject.showModal()">Adicionar novo projeto</button>
    <dialog id="newproject" class="modal">
        <div class="modal-box">
            <div class="flex">

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