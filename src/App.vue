<template>
  <v-app>
    <v-app-bar app color="indigo" clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Honkai helper</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon target="_blank" href="https://github.com/PaeP3nguin/honkai-guide">
        <v-icon>mdi-github</v-icon>
      </v-btn>
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

        <v-list-item link to="/affix_compare">
          <v-list-item-action>
            <v-img max-width="24" left :src="require('@/assets/icon_stig.png')"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Affix calculator</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/scores">
          <v-list-item-action>
            <v-icon>mdi-timer</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>MA score to time</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/memorial_lineups">
          <v-list-item-action>
            <v-img max-width="24" left :src="require('@/assets/icon_enemy.png')"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Future MA lineups</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-content>

    <v-footer class="hidden-sm-and-down" color="indigo" app>
      <span>
        By paep3nguin#9170 with help from Aeru. Bugs? Suggestions? Find me on the
        <a class="white--text" href="https://discord.gg/hi3">official global discord</a>
        or the
        <a class="white--text" href="https://discord.gg/cswCHHC">CafeQuanta armada</a>
        .
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import * as firebase from "firebase/app";
import "firebase/auth";

export default Vue.extend({
  name: "app",
  data: function() {
    return {
      drawer: null
    };
  },
  async created() {
    window.addEventListener(
      "keydown",
      function(e) {
        if (e.keyCode !== 8) {
          // Only wanna prevent backspace.
          return;
        }

        const target = e.target as Element;
        window.console.log(target);
        if (
          target == document.body ||
          target.hasAttribute("readonly") ||
          ["submit", "checkbox", "button"].includes(target.getAttribute("type"))
        ) {
          e.preventDefault();
          return false;
        }
      },
      true
    );

    await firebase.auth().signInAnonymously();
  }
});
</script>

<style lang="scss">
</style>
