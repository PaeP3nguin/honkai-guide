import { Type, Multiplier } from "@/models/multiplier";

const SUPPORT_STIG_MULTIPLIERS = Object.freeze({
    "Jin Shengtan": {
        T: [
            new Multiplier({
                active: true,
                name:
                    "Jin Shengtan T: Allies in Blue Phoenix Field (2-set effect).",
                type: Type.EleDealt,
                value: 15,
            }),
        ],
        M: [
            new Multiplier({
                active: false,
                name: "Jin Shengtan M: When undeployed, team gains Ice DMG.",
                type: Type.EleDealt,
                value: 15,
            }),
        ],
        "2 set": [
            new Multiplier({
                active: true,
                name: "Jin Shengtan 2 set: Allies in Blue Phoenix Field.",
                type: Type.EleDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name: "Jin Shengtan 2 set: Enemies in Blue Phoenix Field.",
                type: Type.EleTaken,
                value: 10,
            }),
        ],
    },
});

const DPS_STIG_MULTIPLIERS = Object.freeze({
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
                name:
                    "Ryunosuke 2 set: Host receives shield. While shield unbroken, gain Crit DMG.",
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
                name: "Welt M",
                type: Type.EleDealt,
                value: 20,
            }),
            new Multiplier({
                active: true,
                name:
                    "Welt M: Hits on enemies. 1% ice taken per stack. Max 10 stacks.",
                type: Type.EleTaken,
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
                name:
                    "Welt 2 set: Charged attacks for 5 seconds following the first hit.",
                type: Type.TdmDealt,
                value: 60,
            }),
        ],
        "3 set": [
            new Multiplier({
                active: true,
                name: "Welt 3 set",
                type: Type.EleDealt,
                value: 40,
            }),
        ],
    },
});

export { DPS_STIG_MULTIPLIERS, SUPPORT_STIG_MULTIPLIERS };
