import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import "./assets/kube.min.css";
import "./assets/core.scss";

Vue.config.productionTip = false;

new Vue({ router, store, render: execute => execute(App) }).$mount("#app");
