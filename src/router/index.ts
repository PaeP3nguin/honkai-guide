import Vue from "vue";
import VueRouter from "vue-router";
const GearComparison = () => import("../pages/GearComparison.vue");
const Search = () => import("../pages/Search.vue");
const Scores = () => import("../pages/Scores.vue");
const AffixComparison = () => import("../pages/AffixComparison.vue");
const MemorialLineups = () => import("../pages/MemorialLineups.vue");

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
    component: GearComparison
  },
  {
    path: "/affix_compare",
    name: "affix_compare",
    component: AffixComparison
  },
  {
    path: "/scores",
    name: "scores",
    component: Scores
  },
  {
    path: "/memorial_lineups",
    name: "memorial_lineups",
    component: MemorialLineups
  }
];

const router = new VueRouter({
  routes
});

export default router;
