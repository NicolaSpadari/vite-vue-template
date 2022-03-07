import { resolve } from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import WindiCSS from "vite-plugin-windicss";

import type { Resolver } from "unplugin-auto-import/dist/types";

const compositionResolver: Resolver = (name: string) => {
	const isCompositionApi = name.startsWith("use");
	if (isCompositionApi) {
        return `@/composables/${name}`;
	}
};

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
            "@pages": resolve(__dirname, "./src/pages"),
            "@types": resolve(__dirname, "./src/types"),
            "@components": resolve(__dirname, "./src/components"),
            "@composables": resolve(__dirname, "./src/composables")
        }
    },
    plugins: [
        Vue({
            include: [/\.vue$/]
        }),
        Pages({
            extensions: ["vue"]
        }),
        WindiCSS(),
        Components({
            extensions: ["vue"],
            dirs: ["src/components"],
            deep: false
        }),
        AutoImport({
            imports: [
                "vue",
                "vue-router",
                "@vueuse/core",
                "@vueuse/head",
                {
                    axios: [["default", "axios"]]
                }
            ],
            resolvers: [compositionResolver],
            dts: "src/auto-imports.d.ts"
        })
    ],
    server: {
        fs: {
            allow: [".."]
        },
        host: true
    }
});
