import { Type, Multiplier } from "@/models/multiplier";

const VALK_MULTIPLIERS = Object.freeze({
    // Kiana
    // Mei
    Bronya: {
        "Herrscher of Reason (HoR) [S]": [
            new Multiplier({
                active: true,
                name: "[HoR] Leader: Source Protocol.",
                type: Type.EleDealt,
                value: 24,
            }),
            new Multiplier({
                active: true,
                name: "[HoR] Leader: Source Protocol.",
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
                name: "[HoR] Passive: Chilling Build: Bonus Ice DMG on Charged ATK.",
                type: Type.EleDealt,
                value: 54,
            }),
            new Multiplier({
                active: true,
                name:
                    "[HoR] Special Attack: Speed Decypher: Ult and Charged ATK.",
                type: Type.TdmDealt,
                value: 30,
            }),
            new Multiplier({
                active: false,
                name:
                    "[HoR] Special Attack: Speed Decypher: Additional bonus on Ult and Charged ATK for PSY-type enemies.",
                type: Type.TdmDealt,
                value: 40,
            }),
            new Multiplier({
                active: false,
                name:
                    "[HoR] Special Attack: Stream Transfer: Bonus Ice DMG on Non-Ult Charged ATK. 15% per stack. Max 3 stacks.",
                type: Type.EleDealt,
                value: 45,
            }),
        ],
    },
    "Himeko": {
        "Vermilion Knight: Eclipse (VK) [S]": [
            new Multiplier({
                active: true,
                name: "[AE] Leader: Vermilion Mark: Bonus for Switch ATKs and Ults.",
                type: Type.TdmDealt,
                value: 23,
            }),
            new Multiplier({
                active: false,
                name: "[AE] Leader: Vermilion Mark: Fire DMG bonus for teams consisting of 3 different battlesuit types.",
                type: Type.TdmDealt,
                value: 31.5,
            }),
            new Multiplier({
                active: false,
                name: "[AE] Passive: After Burn: Fire DMG bonus for combo hit count. 0.8% per stack. Max 50 stacks.",
                type: Type.EleDealt,
                value: 40,
            }),
            new Multiplier({
                active: true,
                name: "[AE] Passive: Molten Cleaver: Fire DMG debuff bonus against ignited enemies.",
                type: Type.EleTaken,
                value: 50,
            }),
            new Multiplier({
                active: false,
                name: "[AE] Charged ATK: Incomplete Combustion: Fire DMG bonus while in Overdrive State.",
                type: Type.EleDealt,
                value: 25,
            }),
        ],
    },
    // Yae
    "Theresa": {
        "Twilight Paladin (TP) [SS, Core 5*]": [
            new Multiplier({
                active: true,
                name: "[TP] Leader: Execution Time.",
                type: Type.PhysDealt,
                value: 50,
            }),
            new Multiplier({
                active: true,
                name: "[TP] Passive: Fated Judgment: Bonus for hitting the same target. 2% per stack. Max 30 stacks.",
                type: Type.CritDmg,
                value: 60,
            }),
            new Multiplier({
                active: true,
                name: "[TP] Basic Attack: Flesh Raker. Bonus against unshielded enemies.",
                type: Type.PhysDealt,
                value: 50,
            }),
            new Multiplier({
                active: false,
                name: "[TP] Basic Attack: Flesh Raker. Bonus against shielded enemies.",
                type: Type.CritDmg,
                value: 50,
            }),
            new Multiplier({
                active: true,
                name: "[TP] Special Attack: Feverish Barrage: Bonus on last sequence of Charged ATK.",
                type: Type.TdmDealt,
                value: 120,
            }),
            new Multiplier({
                active: true,
                name: "[TP] Ult: Blood Tide: 15s bonus after Ult ends.",
                type: Type.PhysDealt,
                value: 35,
            }),
        ],
    },
    "Fu Hua": {
        "Azure Empyrea (AE) [S] (as support)": [
            new Multiplier({
                active: true,
                name: "[AE] Leader: Hex of Exposure: 15s bonus after entry.",
                type: Type.TdmDealt,
                value: 16,
            }),
            new Multiplier({
                active: false,
                name: "[AE] Leader: Hex of Exposure: Bonus for teams consisting of 3 different battlesuit types.",
                type: Type.TdmDealt,
                value: 23,
            }),
            new Multiplier({
                active: true,
                name: "[AE] Combo ATK: Yin-Yang Tempo (Yang Combo): Team bonus for 15s.",
                type: Type.EleDealt,
                value: 30,
            }),
            new Multiplier({
                active: false,
                name: "[AE] Combo ATK/Ult: Hex of Crucibles: 15s Fire DMG bonus on Combo ATK hit.",
                type: Type.EleDealt,
                value: 35,
            }),
            new Multiplier({
                active: false,
                name: "[AE] Combo ATK/Ult: Hex of Drowning: 15s Ice DMG bonus on Combo ATK hit.",
                type: Type.EleDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name: "[AE] Ult: Hex of Enervation: 15s Lightning bonus on Ult hit.",
                type: Type.EleDealt,
                value: 30,
            }),
        ],
        "Hawk of the Fog (HF) [SSS, Core 6*]": [
            new Multiplier({
                active: false,
                name:
                    "[HF] Passive: Unity Mantra: Bonus when breaking shield, 12 seconds.",
                type: Type.TdmDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name: "[HF] Passive: Vajra Mantra: Bonus Lightning DMG.",
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
                    "[HF] Basic ATK: Flux Wyrm: Bonus for Six-sided Shock when doing Basic ATK during Flux Wyrm. 14% per stack. Max 5 stacks.",
                type: Type.EleDealt,
                value: 70,
            }),
            new Multiplier({
                active: true,
                name:
                    "[HF] Ult: Teravolt Maul: Bonus on Ult and paralyzes non-paralyzed enemies for 5.0s.",
                type: Type.TdmDealt,
                value: 50,
            }),
            new Multiplier({
                active: true,
                name:
                    "[HF] Switch/QTE/Ult: Conductive Impact: Within 18s of entry or Ult.",
                type: Type.EleDealt,
                value: 45,
            }),
        ],
        "Night Squire (NS) [SSS]": [
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
                name: "[NS] Evasion: Inquisitor: Bonus on Time Fracture.",
                type: Type.CritRate,
                value: 25,
            }),
            new Multiplier({
                active: true,
                name:
                    "[NS] Basic ATK: Marshal: Bonus on last strike of Combo ATK on hit. 4% per stack. Max 5 stack.",
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
                name: "[NS] Ult: Authority: Small AOE around NS.",
                type: Type.PhysTaken,
                value: 40,
            }),
        ],
    },
    // Kallen
    // Rita
    // Olenyevas
    "Seele": {
        "Stygian Nymph (SN) [S]": [
            new Multiplier({
                active: true,
                name: "[SN] Leader: Cursed Blessing.",
                type: Type.CritRate,
                value: 14,
            }),
            new Multiplier({
                active: false,
                name: "[SN] Leader: Cursed Blessing: Bonus for teams consisting of 3 different battlesuit types.",
                type: Type.PhysDealt,
                value: 21,
            }),
            new Multiplier({
                active: true,
                name: "[SN] Passive: Robust Ambiguity: Bonus after consuming all Saulian Ego or Veilian Id for 10s.",
                type: Type.PhysDealt,
                value: 20,
            }),
            new Multiplier({
                active: true,
                name: "[SN] Basic/Charged ATK: Mark of Judgment: Bonus on Marked enemies.",
                type: Type.PhysDealt,
                value: 25,
            }),
            new Multiplier({
                active: true,
                name: "[SN] Charged ATK: Spirit of Moirai: Bonus on resonated marks.",
                type: Type.CritRate,
                value: 20,
            }),
            new Multiplier({
                active: true,
                name: "[SN] Charged ATK: Spirit of Keres: Bonus on resonated marks.",
                type: Type.CritDmg,
                value: 35,
            }),
            new Multiplier({
                active: false,
                name: "[SN] Ult: Scythe of Hemera: Bonus when Ult is used by Veliona to awaken Saule for 12s.",
                type: Type.PhysDealt,
                value: 25,
            }),
        ],
    },
});

export default VALK_MULTIPLIERS;
