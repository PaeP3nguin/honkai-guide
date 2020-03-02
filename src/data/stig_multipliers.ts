import { Type, Multiplier } from "@/models/multiplier";

const SUPPORT_STIG_MULTIPLIERS = Object.freeze({
    "Fu Hua - Margrave": {
        T: [
            new Multiplier({
                active: true,
                name:
                    "Margrave T: When 2-set effect is active, team gains elemental DMG.",
                type: Type.EleDealt,
                value: 20,
            }),
        ],
        B: [
            new Multiplier({
                active: true,
                name:
                    "Margrave B: When 2-set is active, nearby enemies take more TDM.",
                type: Type.TdmTaken,
                value: 14,
            }),
        ],
        "3 set": [
            new Multiplier({
                active: false,
                name:
                    "Margrave 3 set: When 2-set is active, B piece effect increased to 17/20%, for spending 60/120 SP.",
                type: Type.TdmTaken,
                value: 20,
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
                name:
                    "Musician 2 set: After exit, team gains TDM for 10 seconds.",
                type: Type.TdmDealt,
                value: 10,
            }),
        ],
    },
    "Gustav Klimt": {
        M: [
            new Multiplier({
                active: true,
                name:
                    "Gustav M: When using weapon active, team gains physical DMG.",
                type: Type.PhysDealt,
                value: 20,
            }),
        ],
        "2 set": [
            new Multiplier({
                active: true,
                name:
                    "Gustav 2 set: When using weapon active, enemies take more physical DMG.",
                type: Type.PhysTaken,
                value: 10,
            }),
        ],
    },
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
    Newton: {
        B: [
            new Multiplier({
                active: true,
                name:
                    "Newton B: When hitting enemy, they take more TDM for 5 seconds.",
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
});

const DPS_STIG_MULTIPLIERS = Object.freeze({
    "Dark Jixuanyuan": {
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
                name:
                    "DXY 2 set: When time fracture is active, gain physical DMG.",
                type: Type.PhysDealt,
                value: 40,
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
                name:
                    "Dirac M: During burst mode, gain 1.5% TDM every second. Max 9 stacks",
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
                name:
                    "Jingwei M: After a charged or combo attack hits, gain fire DMG for 5 seconds.",
                type: Type.EleDealt,
                value: 40,
            }),
        ],
    },
    Kafka: {
        T: [
            new Multiplier({
                active: true,
                name:
                    "Kafka T: Gain TDM for each critical hit. 2.5% per stack. Max 8 stacks",
                type: Type.TdmDealt,
                value: 20,
            }),
            new Multiplier({
                active: true,
                name:
                    "Kafka T: Gain Crit DM for each critical hit. 2.5% per stack. Max 8 stacks",
                type: Type.CritDmg,
                value: 20,
            }),
        ],
        M: [
            new Multiplier({
                active: true,
                name:
                    "Kafka M: Gain physical DMG for each critical hit. 5% per stack. Max 8 stacks.",
                type: Type.PhysDealt,
                value: 40,
            }),
        ],
        B: [
            new Multiplier({
                active: true,
                name:
                    "Kafka B: Gain crit rate for each critical hit. 2.5% per stack. Max 8 stacks.",
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
