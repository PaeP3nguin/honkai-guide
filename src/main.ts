import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueGtag from "vue-gtag";

Vue.config.productionTip = false;

Vue.use(require("moment"));

Vue.use(VueGtag, {
  config: { id: "UA-57689110-5" }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
