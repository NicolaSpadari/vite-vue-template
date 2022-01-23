import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
    transformCSS: "pre",
    attributify: false,
    darkMode: "class",
    extract: {
        include: ["index.html", "src/**/*.{vue,html,js}"],
        exclude: ["node_modules", ".gitignore", ".eslintrc", ".eslingignore", ".env"],
    },
    corePlugins: {
        container: false,
    },
    theme: {
        extend: {
            inset: {
                unset: "unset",
            },
        },
    },
});
