<template>
  <div>
    <h2 class="mt-6 mb-3">Calculated multipliers</h2>

    <div v-for="f in FinalStats" v-bind:key="f">
      <span class="font-weight-bold">{{ f }}:&nbsp;</span>
      <span>{{ calculationResults[f].toFixed(2) }}</span>
    </div>

    <v-slider
      label="Crit rate"
      class="mt-6"
      v-model="critRate"
      thumb-label="always"
      :thumb-size="24"
      min="0"
      max="100"
    ></v-slider>

    <h3 class="mt-8">Enter new multiplier:</h3>

    <v-form ref="multiplierForm" @submit.prevent="submitMultiplier">
      <v-container class="pa-0">
        <v-row dense>
          <v-col>
            <v-text-field
              ref="nameField"
              label="Name"
              v-model="multiplier.name"
              :rules="nameRules"
              autofocus
              required
            ></v-text-field>
          </v-col>

          <v-col>
            <v-select
              label="Type"
              v-model="multiplier.type"
              :items="multiplierTypes"
              :rules="multiplierTypeRules"
              required
            ></v-select>
          </v-col>

          <v-col>
            <v-text-field
              type="number"
              v-model.number="multiplier.value"
              label="Percentage"
              :rules="valueRules"
              required
            ></v-text-field>
          </v-col>

          <v-col class="col-auto">
            <v-btn block color="primary" type="submit">Add</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-data-table
      :headers="multiplierTableHeaders"
      :items="multipliers"
      item-key="id"
      hide-default-footer
    >
      <template v-slot:item.active="{item}">
        <v-checkbox v-model="item.active" color="primary"></v-checkbox>
      </template>

      <template v-slot:item.value="{item}">{{ item.value }}%</template>

      <template v-slot:item.delete="{item}">
        <v-btn icon @click="removeMultiplier(item)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>

      <template slot="no-data">Add some multipliers!</template>
    </v-data-table>

    <v-dialog v-model="saveDialog" max-width="600px" @click:outside="closeSaveDialog">
      <template v-slot:activator="{ on }">
        <v-btn class="mt-8" color="primary" v-on="on">
          <v-icon left>mdi-content-save</v-icon>Save/Load
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Save/Load</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row class="align-center">
              <v-col class="pa-0 mr-4">
                <v-form ref="saveForm" @submit.prevent="saveMultipliers">
                  <v-text-field
                    label="Name"
                    v-model="saveName"
                    :rules="nameRules"
                    :error-messages="saveNameErrors"
                    autofocus
                    required
                  ></v-text-field>
                </v-form>
              </v-col>

              <v-col class="pa-0 col-auto">
                <v-btn color="primary" @click="saveMultipliers">
                  <v-icon left>mdi-content-save</v-icon>Save/Load
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-text>
          <h3>Saved gear:</h3>
        </v-card-text>

        <v-list-item
          v-for="(multipliers, name) in this.savedMultipliers"
          v-bind:key="name"
          class="mx-3"
        >
          <v-list-item-content>
            <v-list-item-title>{{ name }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn color="primary" @click="loadMultipliers(name)">Load</v-btn>
          </v-list-item-action>

          <v-list-item-action>
            <v-btn color="primary" @click="deleteSavedMultipliers(name)">delete</v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="closeSaveDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

enum Type {
  TdmDealt = "Total DMG dealt",
  TdmTaken = "Total DMG taken",
  EleDealt = "Elemental DMG dealt",
  EleTaken = "Elemental DMG taken",
  PhysDealt = "Physical DMG dealt",
  PhysTaken = "Physical DMG taken",
  CritDmg = "Critical DMG"
}

enum FinalStats {
  OverallEle = "Overall elemental",
  OverallPhysNoCrits = "Overall physical (no crits)",
  OverallPhys = "Overall physical (with crits)"
}

class Multiplier {
  id: number;
  name: string;
  type: Type;
  value: number;
  active: boolean;

  constructor(
    active: boolean,
    id?: number,
    name?: string,
    type?: Type,
    value?: number
  ) {
    this.id = id || Math.random();
    if (name) {
      this.name = name;
    }
    if (type) {
      this.type = type;
    }
    if (value) {
      this.value = value;
    }
    this.active = active;
  }

  static fromObject(object: any): Multiplier {
    return new Multiplier(
      object.active,
      object.id,
      object.name,
      object.type,
      object.value
    );
  }

  /**
   * Converts this multiplier to a decimal percentage value if it matches the desired type, else returns 0.
   *
   * If the multiplier is not active, also returns 0.
   */
  toPercent(type: Type): number {
    if (this.type != type || !this.active) {
      return 0;
    }

    return this.value / 100;
  }

  clone(): Multiplier {
    return new Multiplier(
      this.active,
      this.id,
      this.name,
      this.type,
      this.value
    );
  }
}

const tableHeaders = [
  {
    text: "Active",
    value: "active",
    width: "10%"
  },
  {
    text: "Name",
    value: "name",
    width: "30%"
  },
  {
    text: "Type",
    value: "type",
    width: "30%"
  },
  {
    text: "Value",
    value: "value",
    width: "20%"
  },
  {
    text: "Delete",
    value: "delete",
    width: "10%"
  }
];

export { Type, Multiplier };

export default Vue.extend({
  name: "gear-calc",
  props: {
    value: Array
  },
  data: function() {
    return {
      // Constants.
      Type: Type,
      FinalStats: FinalStats,

      // Save/load
      saveDialog: false,
      saveName: "",
      saveNameErrors: [],
      savedMultipliers: {},

      // Stuff that actually changes.
      multiplierTableHeaders: tableHeaders,
      multiplierTypes: Object.values(Type),
      multiplier: new Multiplier(true),
      multipliers: this.value,
      critRate: 25,

      // Validation rules.
      nameRules: [(v: any) => !!v || "Name is required"],
      saveNameRules: [(v: any) => !!v || "Name is required"],
      multiplierTypeRules: [(v: any) => !!v || "Type is required"],
      valueRules: [(v: any) => !!v || "Percentage is required"]
    };
  },
  computed: {
    calculationResults: function() {
      let result = {};
      for (let key in Type) {
        const type = Type[key];
        result[type] = this.multipliers.reduce(
          (acc, m) => acc + m.toPercent(type),
          1
        );
      }

      const critRate = this.critRate / 100;
      const tdmOnly = result[Type.TdmDealt] * result[Type.TdmTaken];
      const eleOnly = result[Type.EleDealt] * result[Type.EleTaken];
      const physOnlyNoCrits = result[Type.PhysDealt] * result[Type.PhysTaken];
      const physOnly =
        physOnlyNoCrits * critRate * (result[Type.CritDmg] + 1) +
        physOnlyNoCrits * (1 - critRate);
      result[FinalStats.OverallEle] = tdmOnly * eleOnly;
      result[FinalStats.OverallPhys] = tdmOnly * physOnly;
      result[FinalStats.OverallPhysNoCrits] = tdmOnly * physOnlyNoCrits;
      return result;
    }
  },
  watch: {
    saveDialog: function(value) {
      if (!value) {
        // Dialog is closing.
        return;
      }

      this.savedMultipliers = JSON.parse(localStorage.savedMultipliers || {});
    }
  },
  methods: {
    submitMultiplier() {
      if (!this.$refs.multiplierForm.validate()) {
        return;
      }

      if (this.multiplier.value < 1) {
        // Convert to integer percentage if user typed decimal.
        this.multiplier.value *= 100;
      }
      this.multipliers.push(this.multiplier);
      this.multiplier = new Multiplier(true);
      this.$refs.multiplierForm.reset();

      this.$refs.nameField.focus();
    },
    saveMultipliers() {
      if (!this.$refs.saveForm.validate()) {
        return;
      }

      if (this.savedMultipliers.hasOwnProperty(this.saveName)) {
        this.saveNameErrors.push("Name already used");
        return;
      }

      if (this.multipliers.length == 0) {
        this.saveNameErrors.push("No gear entered");
        return;
      }

      this.savedMultipliers[this.saveName] = this.multipliers.map(m =>
        m.clone()
      );

      localStorage.savedMultipliers = JSON.stringify(this.savedMultipliers);

      this.$refs.saveForm.reset();
    },
    loadMultipliers(name) {
      this.multipliers = this.savedMultipliers[name].map(m => Multiplier.fromObject(m));
    },
    deleteSavedMultipliers(name) {
      Vue.delete(this.savedMultipliers, name);
      localStorage.savedMultipliers = JSON.stringify(this.savedMultipliers);
    },
    closeSaveDialog() {
      this.$refs.saveForm.reset();
      this.saveDialog = false;
    },
    removeMultiplier(multiplier) {
      const i = this.multipliers.indexOf(multiplier);
      if (i === -1) {
        return;
      }
      this.multipliers.splice(i, 1);
    }
  }
});
</script>
