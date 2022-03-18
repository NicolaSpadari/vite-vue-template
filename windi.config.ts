import { defineConfig } from "vite-plugin-windicss";
import BsGrid from "@spada/windicss-plugin-bsgrid";

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
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1400px"
        }
    },
    plugins: [BsGrid()]
});
