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
                name:
                    "Positron: Active: Enemies hit take more physical DMG (15.3% at lvl 50).",
                type: Type.PhysTaken,
                value: 20,
            }),
        ],
        "Thunder Kikaku": [
            new Multiplier({
                active: true,
                name:
                    "Kikaku: Passive: Enemies hit during burst mode take more lightning DMG.",
                type: Type.EleTaken,
                value: 60,
            }),
        ],
    },
    Cannons: {
        "Star Shatterer - Vikrant": [
            new Multiplier({
                active: true,
                name:
                    "Vikrant: Passive: Team TDM boost against weakened enemies",
                type: Type.TdmDealt,
                value: 15,
            }),
        ],
    },
    Katanas: {
        "MAG-Typhoon": [
            new Multiplier({
                active: true,
                name:
                    "Typhoon: Active: Enemies hit take more lightning DMG (13.2% at level 50).",
                type: Type.EleTaken,
                value: 25,
            }),
        ],
        "Ruinous Sakura": [
            new Multiplier({
                active: true,
                name:
                    "Ruinous: Active: Enemies hit take more fire DMG (28.6% at level 50).",
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
                name:
                    "11th: Active: Teammates in the range of cross gain crit rate.",
                type: Type.CritRate,
                value: 10,
            }),
        ],
        "11th Leitourgia": [
            new Multiplier({
                active: true,
                name:
                    "11th PRI: Active: Teammates in the range of cross gain crit rate.",
                type: Type.CritRate,
                value: 20,
            }),
        ],
        "Super-☆ Sonata": [
            new Multiplier({
                active: true,
                name:
                    "Sonata: Active: Teammates in the range of cross gain elemental DMG.",
                type: Type.EleDealt,
                value: 15,
            }),
        ],
    },
    Gauntlets: {
        "Nebulous Duality": [
            new Multiplier({
                active: true,
                name:
                    "Duality: Passive: Fu Hua bonus: hitting enemy with last hit of combo boosts team TDM by 4% once switched out. Max 3 stacks.",
                type: Type.TdmDealt,
                value: 12,
            }),
        ],
    },
    // Scythes
    // Lances
});

const DPS_WEAPON_MULTIPLIERS = Object.freeze({
    Pistols: {
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
                name:
                    "Arias: Passive: Within 5s of switching in or ult, gain TDM.",
                type: Type.TdmDealt,
                value: 50,
            }),
        ],
    },
    Cannons: {
        "Key of Reason": [
            new Multiplier({
                active: true,
                name: "Key of Reason: Passive: Ice DMG boost.",
                type: Type.EleDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name: "Key of Reason: Active: After using active, gain TDM.",
                type: Type.TdmDealt,
                value: 35,
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
                name:
                    "Naraka: Active: Enemies in field generated by active take more ice DMG.",
                type: Type.EleTaken,
                value: 25,
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
                name:
                    "Surtr: Passive: When burst ATKs hit, gain 5% TDM. Max 4 stacks.",
                type: Type.TdmDealt,
                value: 20,
            }),
        ],
        "Might of An-Utu": [
            new Multiplier({
                active: true,
                name: "An-Utu: Active: Enemies take 20% more fire on hit.",
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
                name:
                    "Hekate: Passive: Every 10 hits on enemies gives 2.5% physical DMG. Max 10 stacks",
                type: Type.PhysDealt,
                value: 25,
            }),
        ],
    },
    Gauntlets: {
        "Grips of Tai Xuan": [
            new Multiplier({
                active: true,
                name:
                    "Tai Xuan: Passive: When basic, combo, burst, or switch/QTE attacks hit, gain 8% TDM. Each attack type is separate stack.",
                type: Type.TdmDealt,
                value: 32,
            }),
        ],
        "Nebulous Duality": [
            new Multiplier({
                active: true,
                name:
                    "Duality: Passive: Fu Hua bonus: hitting enemy with last hit of combo boosts TDM by 6%. Max 3 stacks.",
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
                name:
                    "Nuada PRI: Active: During burst or within 5s of using weapon active or ult, emits shockwave that makes enemies take 3.5% more lightning DMG. Max 7 stacks.",
                type: Type.EleTaken,
                value: 24.5,
            }),
        ],
        "Skoll and Hati": [
            new Multiplier({
                active: true,
                name:
                    "Skoll: Passive: When attacks hit, gain 3% physical DMG. Max 10 stacks.",
                type: Type.PhysDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name:
                    "Skoll: Passive: Attacks against enemies affected by time slow, reduced attack or move speed gain 10% crit rate.",
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
        "Path to Acheron": [
            new Multiplier({
                active: true,
                name: "Acheron: Passive",
                type: Type.PhysDealt,
                value: 20,
            }),
            new Multiplier({
                active: true,
                name:
                    "Acheron: Passive: Gain crit rate when using switch skill or ult.",
                type: Type.CritRate,
                value: 10,
            }),
            new Multiplier({
                active: true,
                name:
                    "Acheron: Passive: Gain crit DMG when using switch skill or ult.",
                type: Type.CritDmg,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name:
                    "Acheron: Passive: Stygian Nymph marks gain 30% TDM boost.",
                type: Type.TdmDealt,
                value: 30,
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
    // Lances
});

export { SUPPORT_WEAPON_MULTIPLIERS, DPS_WEAPON_MULTIPLIERS };
