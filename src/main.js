import Vue from "vue";
import App from "./App.vue";
import "normalize-scss";
// bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// fortawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// rutas
import routes from "./routes";
import VueRouter from "vue-router";
//Import app store
import store from "./store";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Vue router
Vue.use(VueRouter);
// Add icon
library.add(faShoppingCart);
Vue.component("font-awesome-icon", FontAwesomeIcon);

const router = new VueRouter({ mode: "history", routes });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
