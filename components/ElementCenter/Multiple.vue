<script setup lang="ts">

</script>
<template>
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
</template>