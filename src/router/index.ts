import Vue from "vue";
import VueRouter from "vue-router";
const GearCalc = () => import("../pages/GearCalc.vue");
const Search = () => import("../pages/Search.vue");
const ScorePage = () => import("../pages/Scores.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Search
  },
  {
    path: "/calc",
    name: "calc",
    component: GearCalc
  },
  {
    path: "/scores",
    name: "scores",
    component: ScorePage
  }
];

const router = new VueRouter({
  routes
});

export default router;
