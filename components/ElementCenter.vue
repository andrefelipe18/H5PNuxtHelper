<script setup lang="ts">

</script>
<template>
    <div class="container w-full flex gap-5 justify-center">
        <div class="bg-[#191e24] p-5 rounded-lg">
            <h2>Calcular centro para 1 elemento</h2>
            <div class="">
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text">Largura do elemento</span>
                    </div>
                    <input type="number" class="input input-bordered input-info w-full max-w-xs" />
                </label>
            </div>
            <div class="">
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text">Altura do elemento</span>
                    </div>
                    <input type="number" class="input input-bordered input-info w-full max-w-xs" />
                </label>
            </div>
            <div class="flex flex-col justify-center gap-5 mt-2">
                <p class="flex gap-2 justify-between items-center">
                    <span>Posição X: </span>
                    <ButtonCopy />
                </p>
                <p class="flex gap-2 justify-between items-center">
                    <span>Posição Y: </span>
                    <ButtonCopy />
                </p>
            </div>
        </div>
        <div class="bg-[#191e24] p-5 rounded-lg w-fit flex">
            <div class="">
                <h2>Calcular centro X para até 5 elementos</h2>
                <div class="">
                    <label class="form-control w-full max-w-xs">
                        <div class="label">
                            <span class="label-text">Quantos elementos?</span>
                        </div>
                        <input type="number" class="input input-bordered input-info w-full max-w-xs" />
                        <div class="label">
                            <span class="label-text-alt">Máximo 5</span>
                        </div>
                    </label>
                </div>
            </div>
            <div class="divider divider-horizontal"></div>
            <div class="">
                <div class="">
                    <label class="form-control w-full max-w-xs">
                        <div class="label">
                            <span class="label-text">Largura do elemento X</span>
                        </div>
                        <input type="number" class="input input-bordered input-info w-full max-w-xs" />
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>