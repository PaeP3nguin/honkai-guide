<template>
  <div>
    <h2 class="mt-3 mb-3">Calculated multipliers</h2>

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

    <v-dialog v-model="editDialog" max-width="800px" @click:outside="closeEditDialog">
      <v-card>
        <v-card-title>
          <span class="headline">Edit multiplier</span>
        </v-card-title>

        <v-card-text>
          <v-form ref="editMultiplierForm" @submit.prevent="saveEditedMultiplier">
            <v-container class="pa-0">
              <v-row dense>
                <v-col>
                  <v-text-field
                    label="Name"
                    v-model="editedMultiplier.name"
                    :rules="nameRules"
                    autofocus
                    required
                  ></v-text-field>
                </v-col>

                <v-col>
                  <v-select
                    label="Type"
                    v-model="editedMultiplier.type"
                    :items="multiplierTypes"
                    :rules="multiplierTypeRules"
                    required
                  ></v-select>
                </v-col>

                <v-col>
                  <v-text-field
                    type="number"
                    v-model.number="editedMultiplier.value"
                    label="Percentage"
                    :rules="valueRules"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="closeEditDialog">Close</v-btn>
          <v-btn text color="primary" @click="saveEditedMultiplier">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-data-table
      :headers="multiplierTableHeaders"
      :items="multipliers"
      item-key="id"
      hide-default-footer
    >
      <template v-slot:item.active="{ item }">
        <v-checkbox v-model="item.active" color="primary"></v-checkbox>
      </template>

      <template v-slot:item.name="props">
        <v-edit-dialog :return-value.sync="props.item.name">
          {{ props.item.name }}
          <template v-slot:input>
            <v-text-field v-model="props.item.name" :rules="nameRules" label="Edit" single-line></v-text-field>
          </template>
        </v-edit-dialog>
      </template>

      <template v-slot:item.value="props">
        <v-edit-dialog :return-value.sync="props.item.value">
          {{ props.item.value }}%
          <template v-slot:input>
            <v-text-field
              v-model="editedMultiplier.value"
              :rules="valueRules"
              label="Edit"
              single-line
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn icon @click.stop="startEditMultiplier(item)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="removeMultiplier(item)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>

      <template slot="no-data">Add some multipliers!</template>
    </v-data-table>

    <v-dialog v-model="saveDialog" max-width="800px" @click:outside="closeSaveDialog">
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

        <v-divider></v-divider>

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

        <v-divider></v-divider>

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
import { Type, Multiplier } from "@/models/multiplier";
import ValkMultipliers from "@/data/valk_multipliers";

enum FinalStats {
  OverallEle = "Overall elemental",
  OverallPhysNoCrits = "Overall physical (no crits)",
  OverallPhys = "Overall physical (with crits)"
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
    width: "25%"
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
    text: "Actions",
    value: "actions",
    width: "15%"
  }
];

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
      ValkMultipliers: ValkMultipliers,

      // Save/load
      saveDialog: false,
      saveName: "",
      saveNameErrors: [],
      savedMultipliers: {},

      // Edit
      editDialog: false,
      editedMultiplier: Multiplier.empty(),

      // Stuff that actually changes.
      multiplierTableHeaders: tableHeaders,
      multiplierTypes: Object.values(Type),
      multiplier: Multiplier.empty(),
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
      this.multiplier = Multiplier.empty();
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
      this.multipliers = this.savedMultipliers[name].map(m =>
        Multiplier.fromObject(m)
      );
    },
    deleteSavedMultipliers(name) {
      Vue.delete(this.savedMultipliers, name);
      localStorage.savedMultipliers = JSON.stringify(this.savedMultipliers);
    },
    closeSaveDialog() {
      this.$refs.saveForm.reset();
      this.saveDialog = false;
    },
    startEditMultiplier(multiplier) {
      this.editedMultiplier = multiplier.clone();
      this.editDialog = true;
    },
    closeEditDialog() {
      this.$refs.editMultiplierForm.reset();
      this.editDialog = false;
    },
    saveEditedMultiplier() {
      if (!this.$refs.editMultiplierForm.validate()) {
        return;
      }

      for (let i = 0; i < this.multipliers.length; i++) {
        const multiplier = this.multipliers[i];
        if (multiplier.id === this.editedMultiplier.id) {
          Vue.set(this.multipliers, i, this.editedMultiplier);
          break;
        }
      }
      this.editedMultiplier = Multiplier.empty();
      this.editDialog = false;
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
