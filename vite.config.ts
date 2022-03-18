import { resolve } from "path";
import { existsSync } from "fs";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import WindiCSS from "vite-plugin-windicss";

import type { Resolver } from "unplugin-auto-import/types";

const compositionResolver: Resolver = (name: string): string | void => {
	if (name.startsWith("use") && existsSync(resolve(`@/composables/${name}`))) {
        return `@/composables/${name}`;
    }
};

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
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
