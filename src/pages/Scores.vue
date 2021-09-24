<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="10" lg="8">
        <h2 class="mb-4">Convert between scores and time:</h2>
        <v-row justify="center">
          <v-col>
            <v-autocomplete
              v-model="selectedTime"
              @change="computeByTime"
              label="Time"
              auto-select-first
              :items="times"
            ></v-autocomplete>
          </v-col>

          <v-col>
            <v-autocomplete
              v-model="selectedScore"
              @change="computeByScore"
              label="Score"
              autofocus
              auto-select-first
              :items="scores"
            ></v-autocomplete>
          </v-col>

          <v-col>
            <v-autocomplete
              v-model="selectedUpScore"
              @change="computeByUpScore"
              label="Score (20% bonus)"
              auto-select-first
              :items="upScores"
            ></v-autocomplete>
          </v-col>

          <v-col>
            <v-autocomplete
              v-model="selectedSssScore"
              @change="computeBySssScore"
              label="Score (SSS)"
              auto-select-first
              :items="sssScores"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col sm="10" lg="8">
        <h2 class="mb-4">All scores and times:</h2>
        <!-- Purposefully don't change on mobile as this ruins the density of the table! -->
        <v-data-table
          :headers="tableHeaders"
          :items="scoresByTime"
          :items-per-page="50"
          :footer-props="tableFooterProps"
          :mobile-breakpoint="null"
          item-key="score"
          dense
        >
          <template v-slot:item.elapsedSec="{ item }">
            {{ item.elapsedSec | countdownSeconds }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { generateScores, countdownSecondsFilter } from "@/util/score_util";

const tableHeaders = [
  {
    text: "Time",
    value: "elapsedSec",
    width: "25%",
  },
  {
    text: "Score",
    value: "score",
    width: "25%",
  },
  {
    text: "Score (20% bonus)",
    value: "up",
    width: "25%",
  },
  {
    text: "Score (SSS)",
    value: "sssScore",
    width: "25%",
  },
];

const scoresByTime = generateScores(300);

function elapsedSecToAutocompleteItem(elapsedSec: number) {
  return {
    text: countdownSecondsFilter(elapsedSec.toString()),
    value: elapsedSec,
  };
}

export default Vue.extend({
  data: function () {
    return {
      scoresByTime: scoresByTime,

      // Converter stuff
      scores: scoresByTime.map((s) => s.score),
      upScores: scoresByTime.map((s) => s.up),
      sssScores: scoresByTime.map((s) => s.sssScore),
      times: scoresByTime.map((s) => elapsedSecToAutocompleteItem(s.elapsedSec)),
      selectedScore: null,
      selectedUpScore: null,
      selectedTime: null,
      selectedSssScore: null,

      // Table stuff
      tableHeaders: tableHeaders,
      tableFooterProps: {
        "items-per-page-options": [10, 20, 30, 40, 50, 75, 100],
      },
    };
  },
  methods: {
    computeByScore: function () {
      const computedScore = scoresByTime.find((s) => s.score == this.selectedScore);
      this.fillSelectionsWithComputedScore(computedScore);
    },
    computeByUpScore: function () {
      const computedScore = scoresByTime.find((s) => s.up == this.selectedUpScore);
      this.fillSelectionsWithComputedScore(computedScore);
    },
    computeByTime: function () {
      const computedScore = scoresByTime.find((s) => s.elapsedSec == this.selectedTime);
      this.fillSelectionsWithComputedScore(computedScore);
    },
    computeBySssScore: function () {
      const computedScore = scoresByTime.find((s) => s.sssScore == this.selectedSssScore);
      this.fillSelectionsWithComputedScore(computedScore);
    },
    fillSelectionsWithComputedScore: function (computedScore) {
      this.selectedScore = computedScore.score;
      this.selectedUpScore = computedScore.up;
      this.selectedSssScore = computedScore.sssScore;
      this.selectedTime = elapsedSecToAutocompleteItem(computedScore.elapsedSec);
    },
  },
  filters: {
    countdownSeconds: countdownSecondsFilter,
  },
});
</script>
