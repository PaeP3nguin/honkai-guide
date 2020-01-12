Vue.use(Vuetify);

const Type = {
  TdmDealt: "Total DMG dealt",
  TdmTaken: "Total DMG taken",
  EleDealt: "Elemental DMG dealt",
  EleTaken: "Elemental DMG taken",
  PhysDealt: "Physical DMG dealt",
  PhysTaken: "Physical DMG taken",
  CritDmg: "Critical DMG",
};

const FinalStats = {
  TotalEle: "Total elemental",
  TotalPhysNoCrits: "Total physical (no crits)",
  TotalPhys: "Total physical (with crits)",
};

class Multiplier {
  id;
  name;
  type;
  value;

  constructor() {
    this.id = Math.random();
  }

  // Converts this multiplier to a decimal percentage value if it matches the desired type, else returns 0.
  toPercent(type) {
    if (this.type != type) {
      return 0;
    }

    return this.value / 100;
  }
}

const tableHeaders = [
  {
    text: 'Name',
    value: 'name',
    width: '50%',
  },
  {
    text: 'Type',
    value: 'type',
    width: '30%',
  },
  {
    text: 'Value',
    value: 'value',
    width: '20%',
  },
];

new Vue({
  el: '#app',
  data: {
    // Constants.
    Type: Type,
    FinalStats: FinalStats,

    // Stuff that actually changes.
    drawer: null,
    multiplierTableHeaders: tableHeaders,
    multiplierTypes: Object.values(Type),
    multiplier: new Multiplier(),
    multipliers: [],
    selectedMultipliers: [],
    critRate: 25,

    // Validation rules.
    nameRules: [
      v => !!v || 'Name is required',
    ],
    multiplierTypeRules: [
      v => !!v || 'Type is required',
    ],
    valueRules: [
      v => !!v || 'Percentage is required',
    ],
  },
  computed: {
    calculationResults: function() {
      let result = {};
      for (key in Type) {
        const type = Type[key];
        result[type] = this.multipliers.reduce((acc, m) => acc + m.toPercent(type), 1);
      }

      const critRate = this.critRate / 100;
      const tdmOnly = result[Type.TdmDealt] * result[Type.TdmTaken];
      const eleOnly = result[Type.EleDealt] * result[Type.EleTaken];
      const physOnlyNoCrits = result[Type.PhysDealt] * result[Type.PhysTaken];
      const physOnly = physOnlyNoCrits * (critRate) * (result[Type.CritDmg] + 1) + physOnlyNoCrits * (1 - critRate);
      result[FinalStats.TotalEle] = tdmOnly * eleOnly;
      result[FinalStats.TotalPhys] = tdmOnly * physOnly;
      result[FinalStats.TotalPhysNoCrits] = tdmOnly * physOnlyNoCrits;
      return result;
    },
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
      this.multiplier = new Multiplier();
      this.$refs.multiplierForm.reset();

      this.$refs.nameField.focus();
    },
    removeSelectedMultipliers() {
      this.selectedMultipliers.forEach((m) => {
        const i = this.multipliers.indexOf(m);
        this.multipliers.splice(i, 1);
      });
    }
  },
  vuetify: new Vuetify({
    theme: {
      dark: true,
    },
  }),
});