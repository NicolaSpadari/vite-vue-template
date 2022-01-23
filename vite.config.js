import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import WindiCSS from "vite-plugin-windicss";
import { resolve } from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
            "@pages": resolve(__dirname, "./src/pages"),
            "@components": resolve(__dirname, "./src/components"),
            "@composables": resolve(__dirname, "./src/composables"),
        },
    },
    plugins: [
        Vue({
            include: [/\.vue$/],
        }),
        Pages({
            extensions: ["vue"],
        }),
        WindiCSS(),
        Components({
            extensions: ["vue"],
            dirs: ["src/components"],
            deep: false,
        }),
    ],
    server: {
        fs: {
            allow: [".."],
        },
        host: true,
    },
});
