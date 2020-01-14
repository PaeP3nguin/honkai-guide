<template>
  <v-container grid-list-md text-xs-start>
    <v-row>
      <v-col xs10>
        <h1>Honkai gear calculator</h1>

        <p>
          Made by PaeP3nguin (Discord: paep3nguin#9170). Bugs? Suggestions? Find
          me on the
          <a
            href="https://discord.gg/hi3"
          >official global discord.</a>
        </p>

        <v-row class="d-flex mb-6">
          <v-col class="pa-md-0 mr-8">
            <Calc v-model="leftMultipliers" />
          </v-col>

          <v-col class="pa-md-0 hidden-sm-and-down" v-if="compare">
            <Calc v-model="rightMultipliers" />
          </v-col>
        </v-row>

        <v-row class="hidden-sm-and-down">
          <v-btn color="success" @click="compare = !compare">
            <v-icon left>mdi-compare</v-icon>Toggle compare
          </v-btn>

          <v-btn v-if="compare" class="ml-6" color="success" @click="copyRight">
            <v-icon left>mdi-arrow-right</v-icon>Copy left to right
          </v-btn>

          <v-btn v-if="compare" class="ml-6" color="success" @click="copyLeft">
            <v-icon left>mdi-arrow-left</v-icon>Copy right to left
          </v-btn>
        </v-row>

        <h2 class="mt-12 mb-3">How do gear bonuses work?</h2>
        <p>
          In Honkai, your overall damage boost is calculated by adding all the
          bonuses of the same type and multiplying by all the different types.
          This is why mixing different types of bonuses together is effective.
          The different multiplier categories are listed below, with examples:
        </p>

        <ul>
          <li>
            Physical Damage Dealt -
            <a
              href="https://honkaiimpact3.gamepedia.com/Marco_Polo"
            >Marco Polo T</a>
          </li>
          <li>
            Physical Damage Taken -
            <a
              href="https://honkaiimpact3.gamepedia.com/Gustav_Klimt"
            >Gustav Klimt 2-set</a>
          </li>
          <li>
            Elemental Damage Dealt -
            <a href="https://honkaiimpact3.gamepedia.com/Nuwa">Nuwa M</a>
          </li>
          <li>
            Elemental Damage Taken -
            <a
              href="https://honkaiimpact3.gamepedia.com/Thales"
            >Thales M (stacks only)</a>,
            <a
              href="https://honkaiimpact3.gamepedia.com/Phoenix#Special"
            >Phoenix SS rank ability "Oriole"</a>
          </li>
          <li>
            Total Damage Dealt -
            <a href="https://honkaiimpact3.gamepedia.com/Jingwei">Jingwei T</a>
          </li>
          <li>
            Total Damage Taken -
            <a href="https://honkaiimpact3.gamepedia.com/Isaac_Newton">Newton B</a>
          </li>
          <li>Typing Bonus - BIO > MECH > PSY, QUA > QUA</li>
          <li>Dirac Weather Typing Bonus / QS Evadion Boost</li>
        </ul>

        <p class="mt-4">
          Note that bonuses that only apply to specific types of attacks, like
          <a
            href="https://honkaiimpact3.gamepedia.com/Sakamoto_Ryoma"
          >Sakamoto Ryoma</a>
          or bonuses that only apply to one element type are not separate
          multipliers. Since the last two are unrelated to this gear, this
          calculator does not attempt to calculate those.
        </p>

        <h3 class="mt-4">What about critical hits?</h3>
        <p>
          The combination of crit rate and crit damage can be thought of as
          another multiplier, but only forphysical damage. Critical damage
          starts at 100% and this is already factored in, so only include
          additional boosts. Be sure to convert from CRT to critical rate with
          the formula: crit rate = CRT/(Valk Level * 5 + 75). At max level, 4.75
          CRT is equal to 1% crit rate.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Calc, { Type, Multiplier } from "@/components/Calc.vue";

export default Vue.extend({
  components: {
    Calc
  },
  data: function() {
    return {
      leftMultipliers: [],
      rightMultipliers: [],
      compare: true
    };
  },
  methods: {
    copyRight() {
      this.rightMultipliers.splice(0, this.rightMultipliers.length);
      this.leftMultipliers.forEach(m => {
        this.rightMultipliers.push(m.clone());
      });
    },
    copyLeft() {
      this.leftMultipliers.splice(0, this.leftMultipliers.length);
      this.rightMultipliers.forEach(m => {
        this.leftMultipliers.push(m.clone());
      });
    }
  }
});
</script>
