<route>
{
    name: "Home"
}
</route>

<template>
    <div class="container text-center mt-20">
        <test class="text-3xl mb-4">
            This page is: {{ $route.name }}
        </test>
    </div>
</template>

<script lang="ts" setup>
    useHead({
        title: String(useRoute().name),
        meta: [
            {
                name: "description",
                content: "Homepage description"
            }
        ]
    });
</script>
