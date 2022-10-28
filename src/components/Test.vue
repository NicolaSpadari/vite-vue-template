<template>
    <div flex justify-center space-x-4>
        <i-heroicons-solid-user w-5 h-5 text-blue-400 />
        <p text-dark-800>
            {{ test }}
        </p>
    </div>
</template>

<script lang="ts" setup>
    const test = useTest();
</script>
