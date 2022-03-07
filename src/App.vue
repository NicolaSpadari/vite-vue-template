<template>
	<router-view />
</template>

<style lang="scss">
	html {
		-webkit-tap-highlight-color: transparent;
		scroll-behavior: smooth;
	}
	img {
		-webkit-user-drag: none;
		user-select: none;
	}
    .custom-scrollbar{
        scrollbar-color: #e4e4e7 initial;
        overflow: overlay;
        scrollbar-width: thin;

        &::-webkit-scrollbar{
            @apply w-2 h-2;

            &-track{
                @apply bg-initial;
            }
            &-thumb{
                @apply bg-gray rounded;
            }
        }
    }
</style>
