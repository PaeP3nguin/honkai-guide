<template>
  <v-app>
    <v-app-bar app color="indigo" clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Honkai helper</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" clipped app>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Bilibili search</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/calc">
          <v-list-item-action>
            <v-icon>mdi-math-compass</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Gear calculator</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "app",
  data: function() {
    return {
      drawer: null
    };
  }
});
</script>

<style lang="scss">
</style>
