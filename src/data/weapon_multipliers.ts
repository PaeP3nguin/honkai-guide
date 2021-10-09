import { Type, Multiplier } from "@/models/multiplier";

const SUPPORT_WEAPON_MULTIPLIERS = Object.freeze({
  Pistols: {
    "Judgment of Shamash": [
      new Multiplier({
        active: true,
        name: "Shamash: Active: Enemies hit take more total DMG.",
        type: Type.TdmTaken,
        value: 15,
      }),
    ],
    "Positron Blasters": [
      new Multiplier({
        active: true,
        name: "Positron: Active: Enemies hit take more physical DMG (15.3% at lvl 50).",
        type: Type.PhysTaken,
        value: 20,
      }),
    ],
    "Thunder Kikaku": [
      new Multiplier({
        active: true,
        name: "Kikaku: Passive: Enemies hit during burst mode take more lightning DMG.",
        type: Type.EleTaken,
        value: 60,
      }),
    ],
  },
  Cannons: {
    "Crusher Bunny 19C": [
      new Multiplier({
        active: true,
        name: "Crusher Bunny: Active: team ice DMG boost for 15 sec.",
        type: Type.EleDealt,
        value: 27,
      }),
      new Multiplier({
        active: true,
        name: "Crusher Bunny: Passive: team elemental DMG boost.",
        type: Type.EleDealt,
        value: 12,
      }),
    ],
    "Star Shatterer - Vikrant": [
      new Multiplier({
        active: true,
        name: "Vikrant: Passive: Team TDM boost against weakened enemies",
        type: Type.TdmDealt,
        value: 15,
      }),
    ],
  },
  Katanas: {
    "MAG-Typhoon": [
      new Multiplier({
        active: true,
        name: "Typhoon: Active: Enemies hit take more lightning DMG (13.2% at level 50).",
        type: Type.EleTaken,
        value: 25,
      }),
    ],
    "Ruinous Sakura": [
      new Multiplier({
        active: true,
        name: "Ruinous: Active: Enemies hit take more fire DMG (28.6% at level 50).",
        type: Type.EleTaken,
        value: 42,
      }),
    ],
  },
  Greatswords: {
    "Blood Dance (BD)": [
      new Multiplier({
        active: true,
        name: "Blood Dance: Active",
        type: Type.EleTaken,
        value: 60,
      }),
    ],
  },
  Crosses: {
    "11th Sacred Relic": [
      new Multiplier({
        active: true,
        name: "11th: Active: Teammates in the range of cross gain crit rate.",
        type: Type.CritRate,
        value: 10,
      }),
    ],
    "11th Leitourgia": [
      new Multiplier({
        active: true,
        name: "11th PRI: Active: Teammates in the range of cross gain crit rate.",
        type: Type.CritRate,
        value: 20,
      }),
    ],
    "Super-☆ Sonata": [
      new Multiplier({
        active: true,
        name: "Sonata: Active: Teammates in the range of cross gain elemental DMG.",
        type: Type.EleDealt,
        value: 15,
      }),
    ],
    "Zither's Lament": [
      new Multiplier({
        active: true,
        name: "Zither: Passive: Team's ultimate and burst gain physical DMG.",
        type: Type.PhysDealt,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Zither: Active: Valks in range gain 15% physical DMG.",
        type: Type.PhysDealt,
        value: 15,
      }),
    ],
  },
  Gauntlets: {
    "Nebulous Duality": [
      new Multiplier({
        active: true,
        name: "Duality: Passive: Fu Hua bonus: hitting enemy with last hit of combo boosts team TDM by 4% once switched out. Max 3 stacks.",
        type: Type.TdmDealt,
        value: 12,
      }),
    ],
  },
  Scythes: {
    "Iris of the Dreams": [
      new Multiplier({
        active: true,
        name: "Iris: Passive: Team deals 15% more TDM to enemies marked by FR charge.",
        type: Type.TdmDealt,
        value: 15,
      }),
    ],
  },
  // Lances
});

const DPS_WEAPON_MULTIPLIERS = Object.freeze({
  Pistols: {
    "Key of Radiance": [
      new Multiplier({
        active: true,
        name: "Key of Radiance: boost fire DMG",
        type: Type.EleDealt,
        value: 20,
      }),
      new Multiplier({
        active: false,
        name: "Key of Radiance: boost total DMG of combo ATK and ultimate",
        type: Type.TdmDealt,
        value: 25,
      }),
    ],
    "Domain of Incandescence": [
      new Multiplier({
        active: true,
        name: "DoI: boost fire DMG",
        type: Type.EleDealt,
        value: 30,
      }),
      new Multiplier({
        active: false,
        name: "DoI: boost total DMG of combo ATK and ultimate",
        type: Type.TdmDealt,
        value: 35,
      }),
      new Multiplier({
        active: true,
        name: "DoI: enemies hit by weapon active explosion take bonus fire DMG",
        type: Type.EleTaken,
        value: 15,
      }),
    ],
    "Tranquil Arias": [
      new Multiplier({
        active: true,
        name: "Arias: Passive",
        type: Type.PhysDealt,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Arias: Passive",
        type: Type.EleDealt,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Arias: Passive: Within 5s of switching in or ult, gain TDM.",
        type: Type.TdmDealt,
        value: 50,
      }),
    ],
    "Domain of the Void": [
      new Multiplier({
        active: true,
        name: "KoV Pri",
        type: Type.PhysDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "KoV Pri",
        type: Type.CritDmg,
        value: 20,
      }),
    ],
  },
  Cannons: {
    "Briareus EX": [
      new Multiplier({
        active: false,
        name: "Bri EX: Passive: MECH valks gain TDM.",
        type: Type.TdmDealt,
        value: 16,
      }),
      new Multiplier({
        active: false,
        name: "Bri EX: Passive: BIO valks gain physical DMG.",
        type: Type.PhysDealt,
        value: 20,
      }),
    ],
    "Dark Star": [
      new Multiplier({
        active: true,
        name: "Dark Star: Passive: Team deals bonus physical DMG to bleeding enemies",
        type: Type.PhysDealt,
        value: 15,
      }),
    ],
    "Key of Reason (KoR)": [
      new Multiplier({
        active: true,
        name: "KoR: Passive: Ice DMG boost.",
        type: Type.EleDealt,
        value: 30,
      }),
      new Multiplier({
        active: true,
        name: "KoR: Active: After using active, gain TDM.",
        type: Type.TdmDealt,
        value: 35,
      }),
    ],
    "Domain of Revelation (DoR)": [
      new Multiplier({
        active: true,
        name: "DoR: Passive: Ice DMG boost.",
        type: Type.EleDealt,
        value: 40,
      }),
      new Multiplier({
        active: true,
        name: "DoR: Passive: total DMG boost for charged and ultimate ATKs.",
        type: Type.TdmDealt,
        value: 30,
      }),
      new Multiplier({
        active: true,
        name: "DoR: Active: After using active, gain TDM.",
        type: Type.TdmDealt,
        value: 40,
      }),
    ],
  },
  Katanas: {
    "Frozen Naraka": [
      new Multiplier({
        active: true,
        name: "Naraka: Passive: Ice DMG boost.",
        type: Type.EleDealt,
        value: 45,
      }),
      new Multiplier({
        active: true,
        name: "Naraka: Active: Enemies in field generated by active take more ice DMG.",
        type: Type.EleTaken,
        value: 25,
      }),
    ],
    "MAG-Typhoon": [
      new Multiplier({
        active: true,
        name: "Typhoon: Passive: Lightning boost.",
        type: Type.EleDealt,
        value: 50,
      }),
      new Multiplier({
        active: true,
        name: "Typhoon: Active: Enemies hit take more lightning DMG (13.2% at level 50).",
        type: Type.EleTaken,
        value: 25,
      }),
    ],
    "Key of Castigation": [
      new Multiplier({
        active: true,
        name: "KoC: Passive: Lightning boost.",
        type: Type.EleDealt,
        value: 35,
      }),
    ],
    "Domain of Sanction": [
      new Multiplier({
        active: false,
        name: "DoS: Active: dragon laser boost (is passive even though in active description).",
        type: Type.EleDealt,
        value: 40,
      }),
      new Multiplier({
        active: true,
        name: "DoS: Passive: Using weapon active or HoT ult boosts TDM.",
        type: Type.TdmDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "DoS: Passive: Lightning boost.",
        type: Type.EleDealt,
        value: 45,
      }),
      new Multiplier({
        active: true,
        name: "DoS: Passive: HoT gains lightning boost when attacking enemies with Narukami's Mark.",
        type: Type.EleDealt,
        value: 20,
      }),
    ],
  },
  Greatswords: {
    "Godslayer - Surtr": [
      new Multiplier({
        active: true,
        name: "Surtr: Passive",
        type: Type.TdmDealt,
        value: 25,
      }),
      new Multiplier({
        active: true,
        name: "Surtr: Passive: When burst ATKs hit, gain 5% TDM. Max 4 stacks.",
        type: Type.TdmDealt,
        value: 20,
      }),
    ],
    "Might of An-Utu": [
      new Multiplier({
        active: true,
        name: "An-Utu: Active: Enemies take more fire DMG on hit.",
        type: Type.EleDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "An-Utu: Passive",
        type: Type.TdmDealt,
        value: 30,
      }),
    ],
    "Sleeping Beauty": [
      new Multiplier({
        active: true,
        name: "Sleeping Beauty: Active: Gain crit rate.",
        type: Type.CritRate,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Sleeping Beauty: Active: Gain crit DMG.",
        type: Type.CritDmg,
        value: 50,
      }),
    ],
    "Shuhadaku of Uriel (Utu PRI)": [
      new Multiplier({
        active: true,
        name: "Utu PRI: Passive",
        type: Type.TdmDealt,
        value: 35,
      }),
      new Multiplier({
        active: true,
        name: "Utu PRI: Active: Enemies take more fire DMG on hit.",
        type: Type.EleTaken,
        value: 23,
      }),
    ],
    "Surtr Muspellsverd": [
      new Multiplier({
        active: false,
        name: "Surtr PRI: Active: VK charge and ult gain 30% fire boost.",
        type: Type.EleDealt,
        value: 30,
      }),
      new Multiplier({
        active: true,
        name: "Surtr PRI: Passive",
        type: Type.TdmDealt,
        value: 30,
      }),
      new Multiplier({
        active: true,
        name: "Surtr PRI: Passive: When ult or burst ATKs hit, gain 12% fire DMG. Max 4 stacks.",
        type: Type.EleDealt,
        value: 48,
      }),
    ],
  },
  Crosses: {
    "Hekate's Gloom": [
      new Multiplier({
        active: true,
        name: "Hekate: Passive",
        type: Type.TdmDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Hekate: Passive: Every 10 hits on enemies gives 2.5% physical DMG. Max 10 stacks",
        type: Type.PhysDealt,
        value: 25,
      }),
    ],
  },
  Gauntlets: {
    "Grips of Tai Xuan": [
      new Multiplier({
        active: true,
        name: "Tai Xuan: Passive: When basic, combo, burst, or switch/QTE attacks hit, gain 8% TDM. Each attack type is separate stack.",
        type: Type.TdmDealt,
        value: 32,
      }),
    ],
    "Nebulous Duality": [
      new Multiplier({
        active: true,
        name: "Duality: Passive: Fu Hua bonus: hitting enemy with last hit of combo boosts TDM by 6%. Max 3 stacks.",
        type: Type.TdmDealt,
        value: 18,
      }),
    ],
    "Nuada's Revenge": [
      new Multiplier({
        active: true,
        name: "Nuada PRI: Passive: lightning DMG boost.",
        type: Type.EleDealt,
        value: 40,
      }),
      new Multiplier({
        active: false,
        name: "Nuada PRI: Active: During burst or within 5s of using weapon active or ult, emits shockwave that makes enemies take 3.5% more lightning DMG. Max 7 stacks.",
        type: Type.EleTaken,
        value: 24.5,
      }),
    ],
    "Skoll and Hati": [
      new Multiplier({
        active: true,
        name: "Skoll: Passive: When attacks hit, gain 3% physical DMG. Max 10 stacks.",
        type: Type.PhysDealt,
        value: 30,
      }),
      new Multiplier({
        active: true,
        name: "Skoll: Passive: Attacks against enemies affected by time slow, reduced attack or move speed gain 10% crit rate.",
        type: Type.CritRate,
        value: 10,
      }),
    ],
  },
  Scythes: {
    Aphrodite: [
      new Multiplier({
        active: true,
        name: "Aphrodite: Passive",
        type: Type.PhysDealt,
        value: 20,
      }),
    ],
    "Iris of the Dreams": [
      new Multiplier({
        active: true,
        name: "Iris: Passive: Charge attack increases TDM by 15%.",
        type: Type.TdmDealt,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Iris: Passive: Team deals 15% more TDM to enemies marked by FR charge.",
        type: Type.TdmDealt,
        value: 15,
      }),
    ],
    "Path to Acheron": [
      new Multiplier({
        active: true,
        name: "Acheron: Passive",
        type: Type.PhysDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Acheron: Passive: Gain crit rate when using switch skill or ult.",
        type: Type.CritRate,
        value: 10,
      }),
      new Multiplier({
        active: true,
        name: "Acheron: Passive: Gain crit DMG when using switch skill or ult.",
        type: Type.CritDmg,
        value: 30,
      }),
      new Multiplier({
        active: true,
        name: "Acheron: Passive: Stygian Nymph marks gain 30% TDM boost.",
        type: Type.TdmDealt,
        value: 30,
      }),
    ],
    "Path to Acheron: Kindred": [
      new Multiplier({
        active: true,
        name: "Kindred: Mark: Gain crit rate when using switch skill or ult.",
        type: Type.CritRate,
        value: 10,
      }),
      new Multiplier({
        active: true,
        name: "Kindred: Mark: Gain crit DMG when using switch skill or ult.",
        type: Type.CritDmg,
        value: 36,
      }),
      new Multiplier({
        active: true,
        name: "Kindred: Mark: Veliona gains additional crit DMG after switch/ult (70% total)",
        type: Type.CritDmg,
        value: 34,
      }),
      new Multiplier({
        active: true,
        name: "Kindred: Nirvana",
        type: Type.PhysDealt,
        value: 26,
      }),
      new Multiplier({
        active: true,
        name: "Kindred: Nirvana: Stygian Nymph marks gain TDM boost.",
        type: Type.TdmDealt,
        value: 36,
      }),
    ],
    "Sanguine Gaze": [
      new Multiplier({
        active: true,
        name: "Sanguine Gaze: Passive: Ice DMG",
        type: Type.EleDealt,
        value: 25,
      }),
      new Multiplier({
        active: true,
        name: "Sanguine Gaze: Ultimate and Burst mode attacks deal bonus total DMG.",
        type: Type.TdmDealt,
        value: 30,
      }),
    ],
    "Sanguine Gaze: Union": [
      new Multiplier({
        active: true,
        name: "Sanguine Gaze Union: Passive: Ice DMG",
        type: Type.EleDealt,
        value: 30,
      }),
      new Multiplier({
        active: true,
        name: "Sanguine Gaze Union: Ultimate and Burst mode attacks deal bonus total DMG.",
        type: Type.TdmDealt,
        value: 40,
      }),
      new Multiplier({
        active: true,
        name: "Sanguine Gaze Union: charged attacks deal bonus total DMG.",
        type: Type.TdmDealt,
        value: 20,
      }),
    ],
    "Undine's Tale": [
      new Multiplier({
        active: true,
        name: "Undine: Passive: Backside hits on enemy gives TDM.",
        type: Type.TdmDealt,
        value: 15,
      }),
    ],
  },
  Lances: {
    "Abyss Flower": [
      new Multiplier({
        active: true,
        name: "Abyss Flower: Passive",
        type: Type.CritRate,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Abyss Flower: Passive: Physical DMG is increased for 15s during burst.",
        type: Type.PhysDealt,
        value: 35,
      }),
    ],
    "Abyss Flower: Liminal Spiral": [
      new Multiplier({
        active: true,
        name: "Abyss Flower PRI: Passive",
        type: Type.CritRate,
        value: 25,
      }),
      new Multiplier({
        active: true,
        name: "Abyss Flower PRI: Passive: Physical DMG is increased for 15s during burst.",
        type: Type.PhysDealt,
        value: 35,
      }),
      new Multiplier({
        active: true,
        name: "Abyss Flower PRI: Passive: Crit DMG is increased for 15s during burst.",
        type: Type.CritDmg,
        value: 20,
      }),
    ],
    "Hler's Serenity": [
      new Multiplier({
        active: true,
        name: "Hler: Passive: Crit rate boost.",
        type: Type.CritRate,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Hler: Passive: Retaliation grants crit rate for 3s.",
        type: Type.CritRate,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Hler: Passive: Charged ATKs and Throws mark enemies, deal more crit DMG against mark enemies.",
        type: Type.CritDmg,
        value: 20,
      }),
    ],
    "Lance of Longinus": [
      new Multiplier({
        active: false,
        name: 'Asuka Equip Bonus: Passive: Charged ATK, "Mind, Matching, Moment", and Ultimate finisher deal bonus total DMG.',
        type: Type.TdmDealt,
        value: 15,
      }),
      new Multiplier({
        active: false,
        name: 'Asuka Equip Bonus: Passive: Charged ATK, "Mind, Matching, Moment", and Ultimate finisher gain crit rate.',
        type: Type.CritRate,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Lance of Longinus: Passive",
        type: Type.PhysDealt,
        value: 30,
      }),
    ],
    "Sagittarius Astra": [
      new Multiplier({
        active: true,
        name: 'Sagittarius Astra: Passive: Ultimate or Burst Mode attacks deal bonus Fire DMG',
        type: Type.EleDealt,
        value: 35,
      }),
      new Multiplier({
        active: true,
        name: 'Sagittarius Astra: Passive: Enemies hit by shattered Stardust take bonus Fire DMG',
        type: Type.EleTaken,
        value: 20,
      }),
    ],
    "Starlance Prime": [
      new Multiplier({
        active: true,
        name: 'Starlance: Passive: Ultimate or Burst Mode attacks deal bonus Fire DMG',
        type: Type.EleDealt,
        value: 25,
      }),
      new Multiplier({
        active: true,
        name: 'Starlance: Passive: Enemies hit by shattered Stardust take bonus Fire DMG',
        type: Type.EleTaken,
        value: 16,
      }),
    ],
  },
  Bows: {
    "Whisper of the Past": [
      new Multiplier({
        active: true,
        name: "Whisper of the Past: Passive: Charged ATKs deal bonus phys DMG",
        type: Type.PhysDealt,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Whisper of the Past: Passive: Using weapon active or charged ATKs boost crit DMG",
        type: Type.CritDmg,
        value: 20,
      }),
    ],
    "Whisper of the Past: Sonnet": [
      new Multiplier({
        active: true,
        name: "Whisper of the Past PRI: Passive: Charged ATKs deal bonus phys DMG",
        type: Type.PhysDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Whisper of the Past PRI: Passive: Using weapon active or charged ATKs boost crit DMG",
        type: Type.CritDmg,
        value: 30,
      }),
      new Multiplier({
        active: true,
        name: "Whisper of the Past PRI: Passive: Wielder deals bonus total DMG",
        type: Type.TdmDealt,
        value: 15,
      }),
    ],
  },
});

export { SUPPORT_WEAPON_MULTIPLIERS, DPS_WEAPON_MULTIPLIERS };
