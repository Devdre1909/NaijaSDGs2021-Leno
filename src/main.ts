import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/css/main.scss";
// import titleMixin from "./mixins/title";

createApp(App).use(store).use(router).mount("#app");
