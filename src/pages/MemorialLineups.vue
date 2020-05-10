<template>
  <v-container grid-list-md text-xs-start>
    <v-row>
      <v-col xs10>
        <h1>Future Memorial Arena lineups</h1>

        <p>
          Since patch 3.8, the memorial arena boss schedule seems to be following CN's schedule. For
          example, week 1 of patch 3.8, CN has AKA, Hephaestus, Hellmaru. SEA and global also had
          the same bosses on our first week of patch 3.8. With this knowledge, we're able to predict
          what bosses we'll have ahead of time! In addition, CN server publishes its boss pools of
          all possible bosses in a patch, linked below.
        </p>
        <h2 class="mt-6">
          <a :href="require('@/assets/boss_pool_38.png')" target="_blank">
            CN 3.8 boss pool
          </a>
        </h2>

        <h2 class="mt-6">
          <a :href="require('@/assets/boss_pool_39.png')" target="_blank">
            CN 3.9 boss pool
          </a>
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="d-flex mb-6" v-for="lineup in lineups" v-bind:key="lineup.id">
          <h2 class="boss-date align-self-start">{{ lineup.date | dateFormat("MMM DD") }}</h2>

          <v-divider class="mr-6" vertical fill-height></v-divider>

          <div class="d-flex flex-wrap flex-grow-1">
            <template v-if="lineup.bosses">
              <BossCard
                class="mx-2 my-2"
                v-for="(boss, i) in lineup.bosses"
                v-bind:key="boss.name"
                :boss="boss"
                :uprate="i == 0"
              ></BossCard>
            </template>
            <template v-if="lineup.event">
              <h2>{{ lineup.event }}</h2>
            </template>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.boss-date {
  min-width: 100px;
}
.v-divider--vertical {
  border-width: 0 medium 0 0;
}
</style>

<script lang="ts">
import Vue from "vue";
import BossCard from "@/components/BossCard.vue";
import { RECENT_LINEUPS } from "@/data/boss_lineups";

export default Vue.extend({
  components: { BossCard },
  data: function() {
    return {
      lineups: RECENT_LINEUPS
    };
  }
});
</script>
