import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { router } from "@/router";
import App from "@/App.vue";
import "virtual:windi.css";
import "virtual:windi-devtools";

const head = createHead();
const app = createApp(App);

app.use(head);
app.use(router);

app.mount("#app");
