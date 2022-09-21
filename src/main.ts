import { createApp } from "vue";
import App from "./App.vue";
import { createVuesticEssential } from "vuestic-ui";
import "vuestic-ui/dist/styles/essential.css"
import "vuestic-ui/dist/styles/grid.css"

const app = createApp(App);

app.use(createVuesticEssential());

app.mount("#app");
