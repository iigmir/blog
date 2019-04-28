import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/kube.min.css";
import "./assets/core.scss";

Vue.config.productionTip = false;

new Vue({ router, store, render: execute => execute(App) }).$mount("#app");
