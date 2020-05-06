<template>
  <div class="boss-card">
    <a :href="boss.wikiLink" target="_blank">
      <div class="boss-card__name">{{ boss.name }}</div>
      <div v-if="uprate" class="boss-card__uprate">Score +20%</div>
      <img class="boss-card__pic" :src="require('@/assets/bosses/' + boss.image)" />
    </a>
  </div>
</template>

<style>
.boss-card {
  width: 256px;
  height: 100px;
  position: relative;
  border: 2px solid #45c6c2;
  border-radius: 4px;
  box-sizing: content-box;
}
.boss-card__name {
  z-index: 2;
  position: absolute;
  background-color: #000000bb;
  padding: 0px 8px;
  left: 4px;
  bottom: 4px;
  border-radius: 4px;
  color: white;
}
.boss-card__uprate {
  z-index: 2;
  position: absolute;
  background-color: #f68f44dd;
  padding: 0px 8px;
  top: 4px;
  right: 4px;
  border-radius: 4px;
  color: white;
}
.boss-card__pic {
  position: absolute;
  left: 0;
  top: 0;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BossCard",
  props: {
    boss: Object,
    uprate: Boolean
  }
});
</script>
