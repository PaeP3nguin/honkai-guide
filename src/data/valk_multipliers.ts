import { Type, Multiplier } from "@/models/multiplier";

const VALK_MULTIPLIERS = Object.freeze({
    // Kiana
    // Mei
    Bronya: {
        "Herrscher of Reason (HoR)": [
            new Multiplier({
                active: true,
                name: "[HoR] Leader Skill.",
                type: Type.EleDealt,
                value: 24,
            }),
            new Multiplier({
                active: true,
                name: "[HoR] Leader Skill.",
                type: Type.TdmDealt,
                value: 21,
            }),
            new Multiplier({
                active: true,
                name: "[HoR] Passive: Against analyzed enemies.",
                type: Type.TdmDealt,
                value: 40,
            }),
            new Multiplier({
                active: true,
                name: "[HoR] Passive: Chilling Build: Charged attacks.",
                type: Type.EleDealt,
                value: 54,
            }),
            new Multiplier({
                active: true,
                name:
                    "[HoR] Special Attack: Speed Decypher: Ult and charged attacks.",
                type: Type.TdmDealt,
                value: 30,
            }),
            new Multiplier({
                active: false,
                name:
                    "[HoR] Special Attack: Speed Decypher: Additional bonus on ult and charged attacks for PSY-type enemies.",
                type: Type.TdmDealt,
                value: 40,
            }),
            new Multiplier({
                active: false,
                name:
                    "[HoR] Special Attack: Stream Transfer: Non-ult charge attacks. 15% per stack. Max 3 stacks.",
                type: Type.EleDealt,
                value: 45,
            }),
        ],
    },
    // Himeko
    // Yae
    // Theresa
    "Fu Hua": {
        "Hawk of the Fog (HF)": [
            new Multiplier({
                active: false,
                name:
                    "[HF] Passive: Unity Mantra: Bonus when breaking shield, 12 seconds.",
                type: Type.TdmDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name: "[HF] Passive: Vajra Mantra: Bonus lightning.",
                type: Type.EleDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name:
                    "[HF] Passive: Shattering Mantra: Against shielded enemies.",
                type: Type.TdmDealt,
                value: 30,
            }),
            new Multiplier({
                active: false,
                name:
                    "[HF] Basic ATK: Flux Wyrm: Bonus for Six-sided Shock when doing basic attacks during Flux Wyrm. 14% per stack. Max 5 stacks.",
                type: Type.EleDealt,
                value: 70,
            }),
            new Multiplier({
                active: true,
                name:
                    "[HF] Ult: Teravolt Maul: Bonus on ultimate and paralyzes non-paralyzed enemies for 5.0s.",
                type: Type.TdmDealt,
                value: 50,
            }),
            new Multiplier({
                active: true,
                name:
                    "[HF] Switch/QTE/Ult: Conductive Impact: Within 18s of entry or ult.",
                type: Type.EleDealt,
                value: 45,
            }),
        ],
        "Night Squire (NS)": [
            new Multiplier({
                active: true,
                name: "[NS] Passive: Magister: Bonus on consuming Ripple.",
                type: Type.PhysDealt,
                value: 40,
            }),
            new Multiplier({
                active: false,
                name:
                    "[NS] Passive: Imperator: With available Ripple, bonus against bleeding, ignited, move slowed enemies.",
                type: Type.TdmDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name: "[NS] Evasion: Inquisitor: Bonus on time fracture.",
                type: Type.CritRate,
                value: 25,
            }),
            new Multiplier({
                active: true,
                name:
                    "[NS] Basic ATK: Marshal: Bonus on last strike of Combo ATKs on hit. 4% per stack. Max 5 stack.",
                type: Type.CritRate,
                value: 20,
            }),
            new Multiplier({
                active: false,
                name:
                    "[NS] Switch: Enigma: Bonus on exiting with 0 Ripple. Team buff for 10s.",
                type: Type.TdmDealt,
                value: 15,
            }),
            new Multiplier({
                active: true,
                name: "[NS] Ult: Authority: Small AOE around NS",
                type: Type.PhysTaken,
                value: 40,
            }),
        ],
    },
    // Kallen
    // Rita
    // Olenyevas
    // Seele
});

export default VALK_MULTIPLIERS;
