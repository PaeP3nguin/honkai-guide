import { Type, Multiplier } from "@/models/multiplier";

const SUPPORT_STIG_MULTIPLIERS = Object.freeze({
  Avogadro: {
    M: [
      new Multiplier({
        active: true,
        name: "Avogadro M: team gains total DMG boost after host casts weapon active.",
        type: Type.TdmDealt,
        value: 10,
      }),
    ],
  },
  Beethoven: {
    M: [
      new Multiplier({
        active: true,
        name: "Beet M: Team gains melee physical boost.",
        type: Type.PhysDealt,
        value: 15,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Beet 2 set: After ult, next valk to switch in gains melee physical boost.",
        type: Type.PhysDealt,
        value: 40,
      }),
    ],
  },
  "Fu Hua - Margrave": {
    T: [
      new Multiplier({
        active: true,
        name: "Margrave T: When 2-set effect is active, team gains elemental DMG.",
        type: Type.EleDealt,
        value: 20,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Margrave B: When 2-set is active, nearby enemies take more TDM.",
        type: Type.TdmTaken,
        value: 14,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Margrave 3 set: When spending 60/120 SP, increase 2-set effect to 17/20%.",
        type: Type.TdmTaken,
        value: 6,
      }),
    ],
  },
  "Fu Hua Musician": {
    M: [
      new Multiplier({
        active: true,
        name: "Musician M: When undeployed, team gains fire DMG.",
        type: Type.EleDealt,
        value: 10,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Musician 2 set: After exit, team gains TDM for 10 seconds.",
        type: Type.TdmDealt,
        value: 10,
      }),
    ],
  },
  "Gustav Klimt": {
    M: [
      new Multiplier({
        active: true,
        name: "Gustav M: When using weapon active, team gains physical DMG.",
        type: Type.PhysDealt,
        value: 20,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Gustav 2 set: When using weapon active, enemies take more physical DMG.",
        type: Type.PhysTaken,
        value: 10,
      }),
    ],
  },
  "Irene Adler": {
    T: [
      new Multiplier({
        active: true,
        name: "Adler T: When undeployed, team gains elemental DMG.",
        type: Type.EleDealt,
        value: 12,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Adler B: charge attack and ult make enemies take more elemental DMG.",
        type: Type.EleTaken,
        value: 15,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Adler 2 set: team gain elemental DMG against enemies hit by charge attack and ult.",
        type: Type.EleDealt,
        value: 18,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Adler 3 set: charge attack and ult boost team lightning DMG.",
        type: Type.EleDealt,
        value: 10,
      }),
    ],
  },
  "Jin Shengtan (JST)": {
    T: [
      new Multiplier({
        active: true,
        name: "JST T: Allies in Blue Phoenix Field (2-set effect).",
        type: Type.EleDealt,
        value: 15,
      }),
    ],
    M: [
      new Multiplier({
        active: false,
        name: "JST M: When undeployed, team gains Ice DMG.",
        type: Type.EleDealt,
        value: 15,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "JST 2 set: Allies in Blue Phoenix Field.",
        type: Type.EleDealt,
        value: 30,
      }),
      new Multiplier({
        active: true,
        name: "JST 2 set: Enemies in Blue Phoenix Field.",
        type: Type.EleTaken,
        value: 10,
      }),
    ],
  },
  "New Year (Fireworks)": {
    "2 set": [
      new Multiplier({
        active: true,
        name: "New Year B: Fireworks boost physical DMG for team members in AoE.",
        type: Type.PhysDealt,
        value: 20,
      }),
    ],
  },
  Newton: {
    B: [
      new Multiplier({
        active: true,
        name: "Newton B: When hitting enemy, they take more TDM for 5 seconds.",
        type: Type.TdmTaken,
        value: 31,
      }),
    ],
  },
  Ogier: {
    T: [
      new Multiplier({
        active: true,
        name: "Ogier T: When undeployed, team gains elemental DMG.",
        type: Type.EleDealt,
        value: 7,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Ogier B: When undeployed, team gains physical DMG.",
        type: Type.PhysDealt,
        value: 5,
      }),
    ],
  },
  Picasso: {
    "2 set": [
      new Multiplier({
        active: true,
        name: "Picasso 2 set: When orange paint mixes, enemy takes more physical DMG.",
        type: Type.PhysTaken,
        value: 25,
      }),
    ],
  },
  "Pool Party Mei (PPM)": {
    M: [
      new Multiplier({
        active: true,
        name: "Mei M: When hitting enemy, they take more TDM for 5 seconds.",
        type: Type.TdmTaken,
        value: 15,
      }),
    ],
  },
  "Shuijing (Sima)": {
    T: [
      new Multiplier({
        active: true,
        name: "Shuijing T: Team gains physical boost.",
        type: Type.PhysDealt,
        value: 8,
      }),
      new Multiplier({
        active: true,
        name: "Shuijing T: When QTE hits a target, team gains physical boost.",
        type: Type.PhysDealt,
        value: 8,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Shuijing B: When QTE hits a target, target takes more physical DMG.",
        type: Type.PhysTaken,
        value: 18,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Shuijing 3 set: When using ult, team gains total DMG boost.",
        type: Type.TdmDealt,
        value: 20,
      }),
    ],
  },
  "Summer Day (balloon)": {
    M: [
      new Multiplier({
        active: true,
        name: "Balloon M: When balloon explodes, allies in AoE gain elemental DMG boost.",
        type: Type.EleDealt,
        value: 30,
      }),
    ],
  },
  "Tesla Band": {
    T: [
      new Multiplier({
        active: true,
        name: "Tesla Band T: When undeployed, team gains physical DMG.",
        type: Type.PhysDealt,
        value: 10,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Tesla Band M: When undeployed, team gains lightning DMG.",
        type: Type.EleDealt,
        value: 15,
      }),
    ],
  },
  "Theresa - Gluttony": {
    T: [
      new Multiplier({
        active: true,
        name: "Gluttony T: Team gains 16% TDM when picking up candy.",
        type: Type.TdmDealt,
        value: 16,
      }),
      new Multiplier({
        active: false,
        name: "Gluttony T: Team gains 24% TDM when picking up two candies.",
        type: Type.TdmDealt,
        value: 24,
      }),
    ],
  },
  Turgenev: {
    T: [
      new Multiplier({
        active: true,
        name: "Turgenev T: team gains total DMG when Hunter Marked enemies exist.",
        type: Type.TdmDealt,
        value: 18,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Turgenev B: team gains elemental DMG against Hunter Marked enemies.",
        type: Type.EleDealt,
        value: 36,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Turgenev 2 set: team gains elemental DMG against Hunter Marked enemies.",
        type: Type.EleTaken,
        value: 21,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: false,
        name: "Turgenev 3 set: team gains ice DMG against Hunter Marked enemies.",
        type: Type.EleDealt,
        value: 25,
      }),
    ],
  },
});

const DPS_STIG_MULTIPLIERS = Object.freeze({
  "Ana Schariac": {
    T: [
      new Multiplier({
        active: true,
        name: "Ana T: ice DMG boost.",
        type: Type.EleDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Ana T: total DMG boost against enemies within 5 meters. Drops by 2% per meter past 5, down to 10% minimum.",
        type: Type.TdmDealt,
        value: 20,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Ana M: ice DMG boost.",
        type: Type.EleDealt,
        value: 25,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Ana B: ice DMG boost against enemies within 5 meters. Drops by 3% per meter past 5, down to 15% minimum.",
        type: Type.EleDealt,
        value: 30,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Ana 2 set: ice DMG boost.",
        type: Type.EleDealt,
        value: 25,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Ana 3 set: combo and charged attacks gain TDM boost.",
        type: Type.TdmDealt,
        value: 50,
      }),
      new Multiplier({
        active: true,
        name: "Ana 3 set: enemies within 5 meters take extra ice DMG from host.",
        type: Type.EleTakenHost,
        value: 10,
      }),
    ],
  },
  Attila: {
    B: [
      new Multiplier({
        active: true,
        name: "Attila B: when combo count exceeds 30, gain physical DMG.",
        type: Type.PhysDealt,
        value: 31,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Attila 2 set",
        type: Type.CritDmg,
        value: 30,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Attila 3 set",
        type: Type.Crt,
        value: 40,
      }),
    ],
  },
  Avogadro: {
    T: [
      new Multiplier({
        active: true,
        name: "Avogadro T",
        type: Type.TdmDealt,
        value: 20,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Avogadro M: team gains total DMG boost after host casts weapon active.",
        type: Type.TdmDealt,
        value: 10,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Avogadro B: host weapon active gains physical DMG boost for 5s after its activation.",
        type: Type.PhysDealt,
        value: 65,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Avogadro 3 set",
        type: Type.TdmDealt,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Avogadro 3 set: host deals more TDM against marked enemies.",
        type: Type.TdmDealt,
        value: 15,
      }),
    ],
  },
  "Benares: Awakening": {
    T: [
      new Multiplier({
        active: true,
        name: "Benares T",
        type: Type.TdmDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Benares T: Lightning boost in herrscher form.",
        type: Type.EleDealt,
        value: 50,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Benares M: Lightning boost.",
        type: Type.EleDealt,
        value: 25,
      }),
      new Multiplier({
        active: true,
        name: "Benares M: Gain TDM for 9s after switch in or using weapon active.",
        type: Type.TdmDealt,
        value: 15,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Benares B: Lightning boost.",
        type: Type.EleDealt,
        value: 25,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Benares 2 set",
        type: Type.TdmDealt,
        value: 20,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Benares 3 set: Lightning boost",
        type: Type.EleDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Benares 3 set: Enemies hit by Herrscher mode attacks take more lightning DMG.",
        type: Type.EleTaken,
        value: 15,
      }),
    ],
  },
  "Children/Columbus": {
    T: [
      new Multiplier({
        active: true,
        name: "Children T",
        type: Type.PhysDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Children T: bonus crit DMG for 4s after landing a charged (can stack).",
        type: Type.CritDmg,
        value: 30,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Children M",
        type: Type.TdmDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Children M: bonus against single enemies.",
        type: Type.CritDmg,
        value: 20,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Children B",
        type: Type.CritRate,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Children B: attacks against same target gain physical DMG (15% max).",
        type: Type.PhysDealt,
        value: 15,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Children 2 set: gain totl DMG for 6s when Charged ATK hits single enemies.",
        type: Type.TdmDealt,
        value: 45,
      }),
    ],
  },
  Cleopatra: {
    M: [
      new Multiplier({
        active: true,
        name: "Cleo M: Attacks against stunned enemies.",
        type: Type.TdmDealt,
        value: 82,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Cleo B: Attacks against paralyzed enemies.",
        type: Type.TdmDealt,
        value: 82,
      }),
    ],
  },
  Dante: {
    T: [
      new Multiplier({
        active: true,
        name: "Dante T",
        type: Type.CritRate,
        value: 15,
      }),
      new Multiplier({
        active: false,
        name: "Dante T: When hit, gain physical DMG.",
        type: Type.PhysDealt,
        value: 8,
      }),
      new Multiplier({
        active: true,
        name: "Dante T: After ultimate evasion or retaliation, gain physical DMG (overwrites on-hit effect).",
        type: Type.PhysDealt,
        value: 16,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Dante M",
        type: Type.PhysDealt,
        value: 30,
      }),
      new Multiplier({
        active: false,
        name: "Dante M: When hit, gain crit DMG.",
        type: Type.CritDmg,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Dante M: After ultimate evasion or retaliation, gain crit DMG (overwrites on-hit effect).",
        type: Type.CritDmg,
        value: 30,
      }),
    ],
    B: [
      new Multiplier({
        active: false,
        name: "Dante B: When hit, gain total DMG.",
        type: Type.TdmDealt,
        value: 10,
      }),
      new Multiplier({
        active: true,
        name: "Dante B: After ultimate evasion or retaliation, gain total DMG (overwrites on-hit effect).",
        type: Type.TdmDealt,
        value: 20,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Dante 2 set",
        type: Type.CritDmg,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Dante 2 set: When performing charge attack in burst mode, charge attacks gain physical DMG.",
        type: Type.PhysDealt,
        value: 30,
      }),
    ],
  },
  "Dark Jixuanyuan (DXY)": {
    M: [
      new Multiplier({
        active: true,
        name: "DXY M: When time fracture is active, gain crit rate.",
        type: Type.CritRate,
        value: 30,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "DXY 2 set: When time fracture is active, gain physical DMG.",
        type: Type.PhysDealt,
        value: 40,
      }),
    ],
  },
  Dickens: {
    T: [
      new Multiplier({
        active: true,
        name: "Dickens T",
        type: Type.PhysDealt,
        value: 30,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Dickens M",
        type: Type.PhysDealt,
        value: 30,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Dickens B",
        type: Type.TdmDealt,
        value: 25,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Dickens 2 set: basic, combo, charged atks deal bonus physical DMG.",
        type: Type.PhysDealt,
        value: 20,
      }),
      new Multiplier({
        active: false,
        name: "Dickens 2 set: basic, combo, charged atks deal bonus physical DMG against MECH enemies.",
        type: Type.PhysDealt,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Dickens 2 set: casting Ultimate boosts basic, combo, charged atks total DMG.",
        type: Type.TdmDealt,
        value: 20,
      }),
    ],
  },
  Dirac: {
    T: [
      new Multiplier({
        active: true,
        name: "Dirac T",
        type: Type.CritRate,
        value: 10,
      }),
      new Multiplier({
        active: true,
        name: "Dirac T: After entry or weapon skill, gain crit rate.",
        type: Type.CritRate,
        value: 10,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Dirac M: Ultimate attacks gain TDM.",
        type: Type.TdmDealt,
        value: 26,
      }),
      new Multiplier({
        active: true,
        name: "Dirac M: During burst mode, gain TDM.",
        type: Type.TdmDealt,
        value: 26,
      }),
      new Multiplier({
        active: false,
        name: "Dirac M: During burst mode, gain 1.5% TDM every second. Max 9 stacks",
        type: Type.TdmDealt,
        value: 13.5,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Dirac B",
        type: Type.PhysDealt,
        value: 20,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Dirac 2 set: If any 2 Dirac stig effects are active, gain physical DMG.",
        type: Type.PhysDealt,
        value: 35,
      }),
    ],
  },
  Edison: {
    T: [
      new Multiplier({
        active: true,
        name: "Edison T: Lightning DMG boost.",
        type: Type.EleDealt,
        value: 15,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Edison M: Lightning DMG boost.",
        type: Type.EleDealt,
        value: 10,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: false,
        name: "Edison 2 set: Gain a charge every 12s. Next basic attack gains TDM boost.",
        type: Type.TdmDealt,
        value: 50,
      }),
      new Multiplier({
        active: false,
        name: "Edison 2 set: Gain a charge every 12s. Gain TDM boost for 6s.",
        type: Type.TdmDealt,
        value: 15,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Edison 3 set: Lightning DMG boost.",
        type: Type.EleDealt,
        value: 25,
      }),
    ],
  },
  "Elizabeth Bathory": {
    T: [
      new Multiplier({
        active: true,
        name: "Bathory T",
        type: Type.CritRate,
        value: 5,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Bathory M",
        type: Type.PhysDealt,
        value: 10,
      }),
      new Multiplier({
        active: true,
        name: "Bathory M: When above 80% HP.",
        type: Type.PhysDealt,
        value: 10,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Bathory 2 set",
        type: Type.PhysDealt,
        value: 20,
      }),
    ],
  },
  Ekaterina: {
    M: [
      new Multiplier({
        active: true,
        name: "Ekaterina M: When over 40 combo, gain physical DMG.",
        type: Type.PhysDealt,
        value: 41,
      }),
    ],
  },
  "Fu Hua: Pride": {
    B: [
      new Multiplier({
        active: true,
        name: "Fu Hua Pride B: Gain melee physical DMG.",
        type: Type.PhysDealt,
        value: 30,
      }),
    ],
  },
  Fuxi: {
    T: [
      new Multiplier({
        active: true,
        name: "Fuxi T: Attacks against frozen enemies.",
        type: Type.EleDealt,
        value: 92,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Fuxi M: Attacks against paralyzed enemies.",
        type: Type.EleDealt,
        value: 92,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Fuxi B: Attacks against ignited enemies.",
        type: Type.EleDealt,
        value: 51,
      }),
    ],
  },
  Goemon: {
    T: [
      new Multiplier({
        active: true,
        name: "Goemon T: Melee attacks give 7% lightning DMG. 12% under Kenbu mode (2-set). Max 3 stacks.",
        type: Type.EleDealt,
        value: 36,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Goemon M",
        type: Type.TdmDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Goemon M: After using ult, gain 15% lightning DMG for 6s. 25% under Kenbu mode (2-set).",
        type: Type.EleDealt,
        value: 25,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Goemon B: Lightning boost.",
        type: Type.EleDealt,
        value: 35,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Goemon 2 set: Enter Kenbu mode when combo ATK hits.",
        type: Type.TdmDealt,
        value: 30,
      }),
    ],
  },
  "Irene Adler": {
    T: [
      new Multiplier({
        active: true,
        name: "Adler T: Lightning damage boost.",
        type: Type.EleDealt,
        value: 20,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Adler M: Lightning damage boost.",
        type: Type.EleDealt,
        value: 20,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Adler B",
        type: Type.TdmDealt,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Adler B: charge attack and ult make enemies take more elemental DMG.",
        type: Type.EleTaken,
        value: 15,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Adler 2 set",
        type: Type.TdmDealt,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Adler 2 set: team gain elemental DMG against enemies hit by charge attack and ult.",
        type: Type.EleDealt,
        value: 18,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Adler 3 set: charge attack and ult boost team lightning DMG.",
        type: Type.EleDealt,
        value: 10,
      }),
      new Multiplier({
        active: false,
        name: "Adler 3 set: Boost if equipped on Rita.",
        type: Type.TdmDealt,
        value: 25,
      }),
    ],
  },
  Jingwei: {
    T: [
      new Multiplier({
        active: true,
        name: "Jingwei T: Gain TDM when only 1 enemy.",
        type: Type.TdmDealt,
        value: 31,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Jingwei M: After a charged or combo attack hits, gain fire DMG for 5 seconds.",
        type: Type.EleDealt,
        value: 40,
      }),
    ],
  },
  Kafka: {
    T: [
      new Multiplier({
        active: true,
        name: "Kafka T: Gain TDM for each critical hit. 2.5% per stack. Max 8 stacks",
        type: Type.TdmDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Kafka T: Gain Crit DMG for each critical hit. 2.5% per stack. Max 8 stacks",
        type: Type.CritDmg,
        value: 20,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Kafka M: Gain physical DMG for each critical hit. 5% per stack. Max 8 stacks.",
        type: Type.PhysDealt,
        value: 40,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Kafka B: Gain crit rate for each critical hit. 2.5% per stack. Max 8 stacks.",
        type: Type.CritRate,
        value: 20,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Kafka 2 set: When charged attack used, gain TDM.",
        type: Type.TdmDealt,
        value: 45,
      }),
    ],
  },
  Leeuwenhoek: {
    T: [
      new Multiplier({
        active: true,
        name: "Leeuwenhoek T: Fire boost.",
        type: Type.EleDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Leeuwenhoek T: Gain TDM for every 10% HP lost. 4% per stack. Max 4 stacks. Gain max stacks on activating 2 set or when use lance skill.",
        type: Type.TdmDealt,
        value: 16,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Leeuwenhoek M",
        type: Type.TdmDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Leeuwenhoek M: Gain fire DMG after ultimate evasion.",
        type: Type.EleDealt,
        value: 20,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Leeuwenhoek B: Fire boost.",
        type: Type.EleDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Leeuwenhoek B: Gain TDM for 10s on entry or attacking ignited enemy.",
        type: Type.TdmDealt,
        value: 25,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Leeuwenhoek 2 set",
        type: Type.TdmDealt,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Leeuwenhoek 2 set: Enemies take more fire DMG from host for 10s after using ult. (activate all single stig conditional effects)",
        type: Type.EleTakenHost,
        value: 15,
      }),
    ],
  },
  Lier: {
    B: [
      new Multiplier({
        active: true,
        name: "Lier B: At 100% HP, gain physical DMG.",
        type: Type.PhysDealt,
        value: 46,
      }),
    ],
  },
  "Marco Polo": {
    T: [
      new Multiplier({
        active: true,
        name: "Polo T",
        type: Type.PhysDealt,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Polo T: When above 30 combo.",
        type: Type.PhysDealt,
        value: 15,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Polo M",
        type: Type.CritDmg,
        value: 25,
      }),
      new Multiplier({
        active: true,
        name: "Polo M: When above 30 combo.",
        type: Type.CritDmg,
        value: 25,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Polo B",
        type: Type.CritRate,
        value: 11,
      }),
    ],
  },
  Michelangelo: {
    T: [
      new Multiplier({
        active: true,
        name: "Mich T: Gain 7.2% physical DMG per basic attack. Max 5 stacks.",
        type: Type.PhysDealt,
        value: 36,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Mich M: Gain 3% crit rate per basic attack. Max 5 stacks.",
        type: Type.CritRate,
        value: 15,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Mich B: Gain 14% crit DMG per basic attack. Max 5 stacks.",
        type: Type.CritDmg,
        value: 70,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Mich 2 set: TDM boost.",
        type: Type.TdmDealt,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Mich 2 set: TDM boost for 15s upon switching in.",
        type: Type.TdmDealt,
        value: 15,
      }),
    ],
  },
  Monet: {
    T: [
      new Multiplier({
        active: true,
        name: "Monet T: Lightning boost.",
        type: Type.EleDealt,
        value: 30,
      }),
      new Multiplier({
        active: true,
        name: "Monet T: 1% total DMG per combo count. Max 15 stacks.",
        type: Type.TdmDealt,
        value: 15,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Monet M: 2% lightning DMG per combo count. Max 15 stacks.",
        type: Type.EleDealt,
        value: 30,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Monet 2 set: Gain shield that gives lightning boost when active.",
        type: Type.EleDealt,
        value: 30,
      }),
    ],
  },
  Newton: {
    B: [
      new Multiplier({
        active: true,
        name: "Newton B: When hitting enemy, they take more TDM for 5 seconds.",
        type: Type.TdmTaken,
        value: 31,
      }),
    ],
  },
  Peary: {
    T: [
      new Multiplier({
        active: true,
        name: "Peary T",
        type: Type.TdmDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Peary T: When combo is above 20, gain ice DMG.",
        type: Type.EleDealt,
        value: 20,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Peary M: Gain 0.4% TDM for each combo count. Max 60 stacks.",
        type: Type.TdmDealt,
        value: 24,
      }),
      new Multiplier({
        active: true,
        name: "Peary M: Gain 0.5% ice DMG for each combo count. Max 60 stacks.",
        type: Type.EleDealt,
        value: 30,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Peary 3 set",
        type: Type.TdmDealt,
        value: 25,
      }),
    ],
  },
  Planck: {
    M: [
      new Multiplier({
        active: true,
        name: "Planck M: Physical boost for basic attacks.",
        type: Type.PhysDealt,
        value: 51,
      }),
    ],
  },
  Poe: {
    T: [
      new Multiplier({
        active: true,
        name: "Poe T: Crit rate boost. For every enemy past the first, decreases by 2%. Max 5 stacks.",
        type: Type.CritRate,
        value: 18,
      }),
      new Multiplier({
        active: false,
        name: "Poe T: physical DMG boost. For every enemy past the first, increases by 4%. Max 5 stacks.",
        type: Type.PhysDealt,
        value: 20,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Poe M: Spend 3/33/63 SP to increase Crit DMG of basic attacks by 50/60/70%",
        type: Type.CritDmg,
        value: 70,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Poe 2 set",
        type: Type.TdmDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Poe 2 set: TDM increased by 40% for 1s when doing charged ATK. 2s CD.",
        type: Type.TdmDealt,
        value: 40,
      }),
      new Multiplier({
        active: true,
        name: "Poe 2 set: Extra charge attack TDM boost when equipped on Seele.",
        type: Type.TdmDealt,
        value: 40,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Poe 3 set: Seele equip bonus",
        type: Type.TdmDealt,
        value: 25,
      }),
    ],
  },
  "Pool Party Mei (PPM)": {
    M: [
      new Multiplier({
        active: true,
        name: "Mei M",
        type: Type.TdmDealt,
        value: 18,
      }),
      new Multiplier({
        active: true,
        name: "Mei M: When hitting enemy, they take more TDM for 4 seconds.",
        type: Type.TdmTaken,
        value: 15,
      }),
    ],
  },
  Rasputin: {
    T: [
      new Multiplier({
        active: true,
        name: "Rasputin T",
        type: Type.TdmDealt,
        value: 12,
      }),
      new Multiplier({
        active: false,
        name: "Rasputin T: Attacks against frozen or move slowed enemies gain TDM.",
        type: Type.TdmDealt,
        value: 12,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Rasputin M: Gain 20/35% ice DMG when above 10/30 combo respectively.",
        type: Type.EleDealt,
        value: 35,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Rasputin B: Ice DMG boost.",
        type: Type.EleDealt,
        value: 25,
      }),
      new Multiplier({
        active: true,
        name: "Rasputin B: Gain ice DMG for 10s after entry.",
        type: Type.EleDealt,
        value: 15,
      }),
    ],
  },
  "Rebel Blades": {
    "Kiana T": [
      new Multiplier({
        active: true,
        name: "Kiana T: Lightning DMG boost.",
        type: Type.EleDealt,
        value: 10,
      }),
      new Multiplier({
        active: true,
        name: "Kiana T: Gain 5% lightning DMG boost per hit. Max 5 stacks.",
        type: Type.EleDealt,
        value: 25,
      }),
    ],
    "Mei M": [
      new Multiplier({
        active: true,
        name: "Mei M: Lightning DMG boost.",
        type: Type.EleDealt,
        value: 10,
      }),
    ],
    "Bronya B": [
      new Multiplier({
        active: true,
        name: "Bronya B: Lightning DMG boost.",
        type: Type.EleDealt,
        value: 20,
      }),
      new Multiplier({
        active: false,
        name: "Bronya B: Lightning DMG boost for 10s after ultimate evasion.",
        type: Type.EleDealt,
        value: 10,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Rebel Blades 2 set: TDM boost when combo is above 25.",
        type: Type.TdmDealt,
        value: 30,
      }),
    ],
  },
  "Ryunosuke Akutagawa": {
    T: [
      new Multiplier({
        active: true,
        name: "Ryunosuke T: Melee physical boost.",
        type: Type.PhysDealt,
        value: 20,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Ryunosuke M: 5.0 CRT per combo hit. Max 5 stacks.",
        type: Type.Crt,
        value: 25,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Ryunosuke 2 set: Host receives shield. While shield unbroken, gain Crit DMG.",
        type: Type.CritDmg,
        value: 40,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Ryunosuke 3 set: Melee attacks.",
        type: Type.TdmDealt,
        value: 20,
      }),
    ],
  },
  Scott: {
    T: [
      new Multiplier({
        active: true,
        name: "Scott T: Ice DMG boost.",
        type: Type.EleDealt,
        value: 12,
      }),
      new Multiplier({
        active: true,
        name: "Scott T: Gain 0.5% TDM for each combo hit. Max 20 stacks.",
        type: Type.TdmDealt,
        value: 10,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Scott M: Ice DMG boost.",
        type: Type.EleDealt,
        value: 15,
      }),
      new Multiplier({
        active: true,
        name: "Scott M: Charge or combo attacks gain ice DMG.",
        type: Type.EleDealt,
        value: 20,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Scott 2 set",
        type: Type.TdmDealt,
        value: 12,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Scott 3 set: Gain ice DMG for 6s after using combo or charge attack.",
        type: Type.EleDealt,
        value: 18,
      }),
    ],
  },
  Schrodinger: {
    T: [
      new Multiplier({
        active: true,
        name: "Schro T: High roll.",
        type: Type.TdmDealt,
        value: 205,
      }),
      new Multiplier({
        active: false,
        name: "Schro T: Low roll.",
        type: Type.TdmDealt,
        value: 52,
      }),
    ],
  },
  Shakespeare: {
    T: [
      new Multiplier({
        active: true,
        name: "Shakespeare T: Lightning boost.",
        type: Type.EleDealt,
        value: 51,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Shakespeare M: Fire boost.",
        type: Type.EleDealt,
        value: 51,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Shakespeare B: Ice boost.",
        type: Type.EleDealt,
        value: 51,
      }),
    ],
  },
  "Shuijing (Sima)": {
    T: [
      new Multiplier({
        active: true,
        name: "Shuijing T",
        type: Type.PhysDealt,
        value: 8,
      }),
      new Multiplier({
        active: true,
        name: "Shuijing T: When QTE hits a target, gains physical boost.",
        type: Type.PhysDealt,
        value: 8,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Shuijing M",
        type: Type.PhysDealt,
        value: 30,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Shuijing B: When QTE hits a target, target takes more physical DMG.",
        type: Type.PhysTaken,
        value: 18,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Shuijing 2 set",
        type: Type.TdmDealt,
        value: 30,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Shuijing 3 set: When using ult, team gains total DMG boost.",
        type: Type.TdmDealt,
        value: 20,
      }),
      new Multiplier({
        active: false,
        name: "Shuijing 3 set: When using ult, Zhuge gains crit DMG boost.",
        type: Type.CritDmg,
        value: 40,
      }),
    ],
  },
  "Sirin Ascendant": {
    T: [
      new Multiplier({
        active: true,
        name: "Sirin Asc T",
        type: Type.PhysDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Sirin Asc T: Herrscher form.",
        type: Type.PhysDealt,
        value: 30,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Sirin Asc M",
        type: Type.CritDmg,
        value: 30,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Sirin Asc B: Shield Active.",
        type: Type.PhysDealt,
        value: 15,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Sirin Asc 2 set: For each summoned space core, gain 12% TDM. Max 2 stacks.",
        type: Type.TdmDealt,
        value: 36,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Sirin Asc 3 set",
        type: Type.CritDmg,
        value: 50,
      }),
      new Multiplier({
        active: true,
        name: "Sirin Asc 3 set: Herrscher form.",
        type: Type.CritRate,
        value: 15,
      }),
    ],
  },
  Tesla: {
    T: [
      new Multiplier({
        active: true,
        name: "Tesla T: Attacks against paralyzed enemies.",
        type: Type.TdmDealt,
        value: 51,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Tesla M: Attacks against frozen enemies.",
        type: Type.TdmDealt,
        value: 51,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Tesla B: Attacks against stunned enemies.",
        type: Type.TdmDealt,
        value: 51,
      }),
    ],
  },
  Thales: {
    T: [
      new Multiplier({
        active: true,
        name: "Thales T",
        type: Type.TdmDealt,
        value: 25,
      }),
      new Multiplier({
        active: true,
        name: "Thales T: Gain 1.5% fire DMG per combo count. Max 10 stacks.",
        type: Type.EleDealt,
        value: 15,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Thales M",
        type: Type.TdmDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Thales M: Hits on enemies cause them to take more fire DMG from the host. 2% per hit (each stack is separate multiplier). Max 10 stacks.",
        type: Type.EleTakenHost,
        value: 22,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Thales 2 set: Once every 10 seconds, next charged ATK gains TDM and enter Blazer Mode for 10s.",
        type: Type.TdmDealt,
        value: 50,
      }),
      new Multiplier({
        active: false,
        name: "Thales 2 set: During Blazer Mode, ult attacks gain TDM.",
        type: Type.TdmDealt,
        value: 30,
      }),
    ],
  },
  "Welt Yang": {
    T: [
      new Multiplier({
        active: true,
        name: "Welt T",
        type: Type.TdmDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Welt T: Herrscher form (ult and charged attacks).",
        type: Type.EleDealt,
        value: 50,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Welt M: Ice boost",
        type: Type.EleDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Welt M: Hits on enemies cause them to take more ice DMG from the host. 1% per stack. Max 10 stacks.",
        type: Type.EleTakenHost,
        value: 10,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Welt B",
        type: Type.TdmDealt,
        value: 15,
      }),
    ],
    "2 set": [
      new Multiplier({
        active: true,
        name: "Welt 2 set: Charged attacks for 5 seconds following the first hit.",
        type: Type.TdmDealt,
        value: 60,
      }),
    ],
    "3 set": [
      new Multiplier({
        active: true,
        name: "Welt 3 set: Ice boost",
        type: Type.EleDealt,
        value: 40,
      }),
    ],
  },
  Zhangheng: {
    B: [
      new Multiplier({
        active: true,
        name: "Zhang B: gain lightning DMG for 2s after an ultimate evade when combo count is below 20.",
        type: Type.EleDealt,
        value: 120,
      }),
    ],
  },
  Zorro: {
    T: [
      new Multiplier({
        active: true,
        name: "Zorro T",
        type: Type.TdmDealt,
        value: 20,
      }),
    ],
    M: [
      new Multiplier({
        active: true,
        name: "Zorro M",
        type: Type.CritDmg,
        value: 40,
      }),
      new Multiplier({
        active: true,
        name: "Zorro M: After ultimate evasion, gain crit rate for 5s.",
        type: Type.CritRate,
        value: 15,
      }),
    ],
    B: [
      new Multiplier({
        active: true,
        name: "Zorro B",
        type: Type.PhysDealt,
        value: 20,
      }),
      new Multiplier({
        active: true,
        name: "Zorro B: After ultimate evasion, gain physical DMG for 5s.",
        type: Type.PhysDealt,
        value: 20,
      }),
    ],
  },
});

export { DPS_STIG_MULTIPLIERS, SUPPORT_STIG_MULTIPLIERS };
