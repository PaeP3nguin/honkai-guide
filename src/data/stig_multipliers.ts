import { Type, Multiplier } from "@/models/multiplier";

const SUPPORT_STIG_MULTIPLIERS = Object.freeze({
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
                name:
                    "Beet 2 set: After ult, next valk to switch in gains melee physical boost.",
                type: Type.PhysDealt,
                value: 40,
            }),
        ],
    },
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
                name:
                    "Dirac 2 set: If any 2 Dirac stig effects are active, gain physical DMG.",
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
                name: "Fuxi T: Attacks against paralyzed enemies.",
                type: Type.EleDealt,
                value: 92,
            }),
        ],
        B: [
            new Multiplier({
                active: true,
                name: "Fuxi T: Attacks against ignited enemies.",
                type: Type.EleDealt,
                value: 51,
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
                name:
                    "Leeuwenhoek T: Gain TDM for every 10% HP lost. 4% per stack. Max 4 stacks. Gain max stacks on activating 2 set or when use lance skill.",
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
                name:
                    "Leeuwenhoek B: Gain TDM for 10s on entry or attacking ignited enemy.",
                type: Type.TdmDealt,
                value: 25,
            }),
        ],
        "2 set": [
            new Multiplier({
                active: true,
                name: "Leeuwenhoek 2 set",
                type: Type.TdmDealt,
                value: 20,
            }),
            new Multiplier({
                active: true,
                name:
                    "Leeuwenhoek 2 set: Enemies take more fire DMG for 10s after using ult. (activate all single stig conditional effects)",
                type: Type.EleTaken,
                value: 20,
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
                name:
                    "Monet M: 2% lightning DMG per combo count. Max 15 stacks.",
                type: Type.EleDealt,
                value: 30,
            }),
        ],
        "2 set": [
            new Multiplier({
                active: true,
                name:
                    "Monet 2 set: Gain shield that gives lightning boost when active.",
                type: Type.EleDealt,
                value: 30,
            }),
        ],
    },
    Poe: {
        T: [
            new Multiplier({
                active: true,
                name:
                    "Poe T: Crit rate boost. For every enemy past the first, decreases by 2%. Max 5 stacks.",
                type: Type.CritRate,
                value: 18,
            }),
            new Multiplier({
                active: false,
                name:
                    "Poe T: physical DMG boost. For every enemy past the first, increases by 4%. Max 5 stacks.",
                type: Type.PhysDealt,
                value: 20,
            }),
        ],
        M: [
            new Multiplier({
                active: true,
                name:
                    "Poe M: Spend 3/33/63 SP to increase Crit DMG of basic attacks by 50/60/70%",
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
                name:
                    "Poe 2 set: TDM increased by 40% for 1s when doing charged ATK. 2s CD.",
                type: Type.TdmDealt,
                value: 40,
            }),
            new Multiplier({
                active: true,
                name: "Poe 2 set: TDM boost when equipped on Seele.",
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
                name:
                    "Thales T: Gain 1.5% fire DMG per combo count. Max 10 stacks.",
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
                name:
                    "Thales M: Hits on enemies cause them to take more fire DMG from the host. 2% per hit. Max 10 stacks.",
                type: Type.EleTakenHost,
                value: 20,
            }),
        ],
        "2 set": [
            new Multiplier({
                active: true,
                name:
                    "Thales 2 set: Once every 10 seconds, next charged ATK gains TDM and enter Blazer Mode for 10s.",
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
                name:
                    "Welt M: Hits on enemies cause them to take more ice DMG from the host. 1% per stack. Max 10 stacks.",
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
                name:
                    "Welt 2 set: Charged attacks for 5 seconds following the first hit.",
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
});

export { DPS_STIG_MULTIPLIERS, SUPPORT_STIG_MULTIPLIERS };
