<route>
{
    name: "Home"
}
</route>

<template>
    <div container class="mt-20 text-center">
        <p class="mb-4 text-3xl">
            This page is: {{ $route.name }}
        </p>

        <Test />
    </div>
</template>

<script lang="ts" setup>
    const route = useRoute();

    useHead({
        title: String(route.name),
        meta: [
            {
                name: "description",
                content: "Homepage description"
            }
        ]
    });
</script>
