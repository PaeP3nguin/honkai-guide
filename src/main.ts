import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueGtag from "vue-gtag";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";

import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase_config";

Vue.config.productionTip = false;

Vue.use(
  VueGtag,
  {
    config: { id: "UA-57689110-5" },
  },
  router
);

Vue.use(VueFilterDateFormat);

const firebaseApp = initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");

export { firebaseApp };
