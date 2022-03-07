<route>
{
    name: "404"
}
</route>

<template>
	<div class="container">
		<p>404 page</p>
	</div>
</template>

<script setup>
	useHead({
		title: useRoute().name,
		meta: [
			{
				name: "description",
				content: "Page not found"
			}
		]
	});
</script>
