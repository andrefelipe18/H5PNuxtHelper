<script setup>
defineProps({
	elementDetail: Object,
});

</script>
<template>
	<dialog id="moreDetail" class="modal">
		<div class="modal-box">
			<h3 class="font-bold text-lg">{{ elementDetail.name }} - {{ elementDetail.items.length }} Items</h3>
			<p class="py-4">
			<h4 class="font-bold">Items:</h4>
			<ul>
				<li v-for="item in elementDetail.items" :key="item.id" class="m-2">
					<p>Item: {{ item.name }}</p>
					<div class="flex flex-col justify-center">
						<div class="flex gap-2">
							<p class="w-1/2">X Base: {{ item.xBase }}</p>
							<p>Y Base: {{ item.yBase }}</p>
						</div>
						<div class="flex gap-2">
							<p class="w-1/2">Altura: {{ item.heightBase }}</p>
							<p>Largura: {{ item.widthBase }}</p>
						</div>
					</div>
				</li>
			</ul>

			</p>
			<div class="modal-action">
				<form method="dialog">
					<button class="btn">Fechar</button>
				</form>
			</div>
		</div>
	</dialog>
</template>