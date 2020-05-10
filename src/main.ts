import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueGtag from "vue-gtag";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";

import * as firebase from "firebase/app";

Vue.config.productionTip = false;

Vue.use(
  VueGtag,
  {
    config: { id: "UA-57689110-5" }
  },
  router
);

Vue.use(VueFilterDateFormat);

firebase.initializeApp({
  apiKey: "AIzaSyCITdRoL3dbBHvx3xliyqnPWWmRC5m_9cc",
  authDomain: "honkai-guide.firebaseapp.com",
  databaseURL: "https://honkai-guide.firebaseio.com",
  projectId: "honkai-guide",
  storageBucket: "honkai-guide.appspot.com",
  messagingSenderId: "683708108958",
  appId: "1:683708108958:web:391f469e01488a9b576b8f"
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
