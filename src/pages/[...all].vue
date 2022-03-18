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

<script lang="ts" setup>
    useHead({
        title: String(useRoute().name),
        meta: [
            {
                name: "description",
                content: "Page not found"
            }
        ]
    });
</script>
