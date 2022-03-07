<route>
{
    name: "Home"
}
</route>

<template>
	<div class="container text-center mt-20">
		<p class="text-3xl mb-4">
			This page is: {{ $route.name }}
		</p>
	</div>
</template>

<script setup>
	useHead({
		title: useRoute().name,
		meta: [
			{
				name: "description",
				content: "Homepage description"
			}
		]
	});
</script>
