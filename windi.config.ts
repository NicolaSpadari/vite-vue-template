import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
    transformCSS: "pre",
    attributify: false,
    darkMode: "class",
    extract: {
        include: ["index.html", "src/**/*.{vue,html,ts,js}"],
        exclude: ["node_modules", ".gitignore", ".eslintrc", ".eslintignore", ".env"]
    },
    corePlugins: {
        container: false
    },
    theme: {
        extend: {
            inset: {
                unset: "unset"
            }
        }
    }
});
