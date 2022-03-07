import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { router } from "@/router";
import App from "@/App.vue";
import "@/assets/css/bs-grid.min.css";
import "virtual:windi-base.css";
import "virtual:windi-utilities.css";
import "virtual:windi-devtools";

const head = createHead();
const app = createApp(App);

app.use(head);
app.use(router);

app.mount("#app");
