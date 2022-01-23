<route>
{
    name: "Home"
}
</route>

<template>
	<div class="container">
        <p>Homepage</p>

        <Test />
    </div>
</template>

<script setup>
	import { computed } from "vue";
	import { useHead } from "@vueuse/head";
	import { router } from "@/router";

	const currentRoute = computed(() => {
		return router.currentRoute.value.name;
	});

	useHead({
		title: currentRoute.value,
		meta: [
			{
				name: "description",
				content: "Page description",
			},
		],
	});
</script>