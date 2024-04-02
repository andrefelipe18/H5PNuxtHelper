<script setup>
import { useStorage } from "@vueuse/core";

const newProjectName = ref('');

const projects = useStorage('projects', []);

const newProject = () => {
    console.log(newProjectName.value);
    projects.value.push({
        id: Math.random().toString(36).substr(2, 9),
        name: newProjectName.value,
        elements: []
    });
    newProjectName.value = '';
};
</script>
<template>
    <button class="btn btn-accent" onclick="newproject.showModal()">Adicionar novo projeto</button>
    <dialog id="newproject" class="modal">
        <div class="modal-box">
            <div class="flex w-full">
                <ProjectsModalInputName v-model:newProjectName="newProjectName" />
            </div>


            <div class="modal-action">
                <form method="dialog">
                    <div class="flex gap-2">
                        <button @click="newProject" class="mt-4 btn btn-success text-white">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    </dialog>
</template>