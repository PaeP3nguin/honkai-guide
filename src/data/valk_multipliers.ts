import { Type, Multiplier } from "@/models/multiplier";

const DPS_VALK_MULTIPLIERS = Object.freeze({
    "Kiana Kaslana": {
        "Void Drifter (VD) [SSS, Core 6*]": [
            new Multiplier({
                active: true,
                name: "[VD] Passive: Tenacity",
                type: Type.CritRate,
                value: 10,
            }),
            new Multiplier({
                active: true,
                name: "[VD] Passive: Tenacity",
                type: Type.CritDmg,
                value: 15,
            }),
            new Multiplier({
                active: true,
                name: "[VD] Combo ATK: Rift Drifter: 10s bonus for consecutive Combo ATKs. 10% per stack. Max 5 stacks.",
                type: Type.TdmDealt,
                value: 50,
            }),
            new Multiplier({
                active: true,
                name: "[VD] Ult: Void Sync: 7.0s bonus during Ult.",
                type: Type.CritRate,
                value: 20,
            }),
            new Multiplier({
                active: false,
                name: "[VD] Ult: Valkyrie Frenzy: Bonus for Ult only.",
                type: Type.CritDmg,
                value: 20,
            }),
        ],
    },
    // Mei
    "Bronya Zaychik": {
        "Herrscher of Reason (HoR) [S]": [
            new Multiplier({
                active: true,
                name: "[HoR] Leader",
                type: Type.EleDealt,
                value: 24,
            }),
            new Multiplier({
                active: true,
                name: "[HoR] Leader",
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
                name:
                    "[HoR] Passive: Chilling Build: Bonus Ice DMG on Charged ATK.",
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
    "Himeko Murata": {
        "Vermilion Knight: Eclipse (VK) [S]": [
            new Multiplier({
                active: true,
                name: "[VK] Leader: Bonus for Switch ATKs and Ults.",
                type: Type.TdmDealt,
                value: 23,
            }),
            new Multiplier({
                active: false,
                name:
                    "[VK] Leader: Fire DMG bonus for teams consisting of 3 different battlesuit types.",
                type: Type.TdmDealt,
                value: 31.5,
            }),
            new Multiplier({
                active: false,
                name:
                    "[VK] Passive: After Burn: Fire DMG bonus for combo hit count. 0.8% per stack. Max 50 stacks.",
                type: Type.EleDealt,
                value: 40,
            }),
            new Multiplier({
                active: true,
                name:
                    "[VK] Passive: Molten Cleaver: Fire DMG debuff bonus against ignited enemies.",
                type: Type.EleTaken,
                value: 50,
            }),
            new Multiplier({
                active: false,
                name: "[VK] Charged ATK: Incomplete Combustion: Fire DMG bonus while in Overdrive State.",
                type: Type.EleDealt,
                value: 25,
            }),
        ],
    },
    "Yae Sakura": {
        "Darkbolt Jounin (DJ) [SSS]": [
            new Multiplier({
                active: true,
                name: "[DJ] Leader: Bonus Lightning DMG",
                type: Type.EleDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name: "[DJ] Leader",
                type: Type.TdmDealt,
                value: 15,
            }),
            new Multiplier({
                active: true,
                name: "[DJ] Passive: Branded for Hate: Bonus against targets with Darkbolt Mark.",
                type: Type.TdmDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name: "[DJ] Combo ATK: Yaksha Rush: 2s bonus for consecutive use of Naraka Finisher (Combo ATK). 12.0% per stack. Max 6 stacks. Stack durations are independent.",
                type: Type.TdmDealt,
                value: 72,
            }),
            new Multiplier({
                active: true,
                name: "[DJ] Combo ATK: Raksha AMP: Bonus Lightning DMG to enemies below 30% HP",
                type: Type.EleDealt,
                value: 15,
            }),
            new Multiplier({
                active: true,
                name: "[DJ] Ult: Tiryag's Impulse: Conductive Debuff",
                type: Type.EleTaken,
                value: 40,
            }),
            new Multiplier({
                active: true,
                name: "[DJ] SP: Biting Ember: 30s bonus after unleashing Darkbolt Pursuit (follow-up ATK)",
                type: Type.TdmDealt,
                value: 20,
            }),
        ],
    },
    "Theresa Apocalypse": {
        "Twilight Paladin (TP) [SS, Core 5*]": [
            new Multiplier({
                active: true,
                name: "[TP] Leader",
                type: Type.PhysDealt,
                value: 50,
            }),
            new Multiplier({
                active: true,
                name: "[DJ] Leader: Bonus Lightning DMG",
                type: Type.EleDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name: "[TP] Passive: Fated Judgment: Bonus for hitting the same target. 2% per stack. Max 30 stacks.",
                type: Type.CritDmg,
                value: 60,
            }),
            new Multiplier({
                active: true,
                name:
                    "[TP] Basic Attack: Flesh Raker: Bonus against unshielded enemies.",
                type: Type.PhysDealt,
                value: 50,
            }),
            new Multiplier({
                active: false,
                name:
                    "[TP] Basic Attack: Flesh Raker: Bonus against shielded enemies.",
                type: Type.CritDmg,
                value: 50,
            }),
            new Multiplier({
                active: true,
                name:
                    "[TP] Special Attack: Feverish Barrage: Bonus on last sequence of Charged ATK.",
                type: Type.TdmDealt,
                value: 120,
            }),
            new Multiplier({
                active: true,
                name: "[TP] Ult: Blood Tide: 15s bonus after Ult ends.",
                type: Type.PhysDealt,
                value: 35,
            }),
            new Multiplier({
                active: true,
                name: "[TP] Ult: 15s bonus after Ult ends.",
                type: Type.CritRate,
                value: 15,
            }),
        ],
    },
    "Fu Hua": {
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
                    "[HF] Basic ATK: Flux Wyrm: Bonus for Six-sided Shock when doing basic attacks during Flux Wyrm. 14% per stack. Max 5 stacks.",
                type: Type.TdmDealt,
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
                active: false,
                name: "[NS] Leader: Crit DMG boost for BIO valks.",
                type: Type.CritDmg,
                value: 36,
            }),
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
    "Liliya Olenyeva":  {
        "Blueberry Blitz (BB) [SSS]": [
            new Multiplier({
                active: true,
                name: "[BB] Passive: Bonus against enemies affected by Weaken or Time Slow.",
                type: Type.TdmDealt,
                value: 40,
            }),
            new Multiplier({
                active: true,
                name: "[BB] Charged ATK: Bonus against shielded enemies.",
                type: Type.PhysDealt,
                value: 50,
            }),
            new Multiplier({
                active: true,
                name: "[BB] Ult: Weakness Scan: 30s bonus after Ult.",
                type: Type.PhysDealt,
                value: 50,
            }),
            new Multiplier({
                active: true,
                name: "[BB] Ult: Lethal Strike",
                type: Type.CritRate,
                value: 40,
            }),
            
            new Multiplier({
                active: true,
                name: "[BB] Ult: Lethal Strike",
                type: Type.CritDmg,
                value: 60,
            }),
        ],
    },
    // Roza
    "Seele Vollerei": {
        "Stygian Nymph (SN) [S]": [
            new Multiplier({
                active: true,
                name: "[SN] Leader",
                type: Type.CritRate,
                value: 14,
            }),
            new Multiplier({
                active: false,
                name:
                    "[SN] Leader: Bonus for teams consisting of 3 different battlesuit types.",
                type: Type.PhysDealt,
                value: 21,
            }),
            new Multiplier({
                active: true,
                name:
                    "[SN] Passive: Robust Ambiguity: Bonus after consuming all Saulian Ego or Veilian Id for 10s.",
                type: Type.PhysDealt,
                value: 20,
            }),
            new Multiplier({
                active: true,
                name:
                    "[SN] Charged ATK: Mark of Judgment: Bonus on Marked enemies.",
                type: Type.PhysDealt,
                value: 25,
            }),
            new Multiplier({
                active: true,
                name:
                    "[SN] Charged ATK: Spirit of Moirai: Bonus on resonated marks.",
                type: Type.CritRate,
                value: 20,
            }),
            new Multiplier({
                active: true,
                name:
                    "[SN] Charged ATK: Spirit of Keres: Bonus on resonated marks.",
                type: Type.CritDmg,
                value: 35,
            }),
            new Multiplier({
                active: false,
                name:
                    "[SN] Ult: Scythe of Hemera: Bonus when Ult is used by Veliona to awaken Saule for 12s.",
                type: Type.PhysDealt,
                value: 25,
            }),
            new Multiplier({
                active: false,
                name:
                    "[SN] Ult: when ult goes from red to white, boost ult by 0.5% TDM per SP consumed. Max 75%.",
                type: Type.TdmDealt,
                value: 75,
            }),
        ],
        "Swallowtail Phantasm (SP) [SSS]": [
            new Multiplier({
                active: true,
                name: "[SP] Leader: Crit rate boost in burst mode.",
                type: Type.CritRate,
                value: 20,
            }),
            new Multiplier({
                active: true,
                name: "[SP] Leader: TDM boost if Bronya is on the team.",
                type: Type.TdmDealt,
                value: 16,
            }),
            new Multiplier({
                active: true,
                name:
                    "[SP] Passive: Fragile Fight: TDM boost against impaired enemies.",
                type: Type.TdmDealt,
                value: 40,
            }),
            new Multiplier({
                active: true,
                name:
                    "[SP] Passive: Unending Fantasy: When combo count exceeds 10/30/50, gain 20/40/60% crit DMG.",
                type: Type.CritDmg,
                value: 60,
            }),
            new Multiplier({
                active: true,
                name:
                    "[SP] Evade: Traceless Shift: Physical DMG boost during plane warp (after ultimate evasion or charge during ult).",
                type: Type.PhysDealt,
                value: 25,
            }),
            new Multiplier({
                active: false,
                name:
                    "[SP] Charged: Particle Vibration: Charged attacks cause enemies to take more TDM from Seele.",
                type: Type.TdmTakenHost,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name:
                    "[SP] Ult: Scarlet Chain: Final hit of ult and shuttle attacks cause enemies to take more TDM from Seele (replaces Particle Vibration).",
                type: Type.TdmTakenHost,
                value: 40,
            }),
            new Multiplier({
                active: true,
                name:
                    "[SP] Ult: Oneiric Shade: Physical DMG boost during ult.",
                type: Type.PhysDealt,
                value: 35,
            }),
        ],
    },
    // Durandal
});

const SUPPORT_VALK_MULTIPLIERS = Object.freeze({
    "Kiana Kaslana":    {
        "Knight Moonbeam (KMB) [SSS]": [
            new Multiplier({
                active: true,
                name: "[KMB] Leader",
                type: Type.CritDmg,
                value: 40,
            }),
            new Multiplier({
                active: false,
                name: "[KMB] Leader: Teams with 3 BIO-type battlesuits.",
                type: Type.TdmDealt,
                value: 26,
            }),
        ],
    },
    "Mei Raiden": {
        "Lightning Empress (LE) [SS]": [
            new Multiplier({
                active: true,
                name: "[LE] Leader: TDM boost when team has 3 PSY valks.",
                type: Type.TdmDealt,
                value: 23,
            }),
            new Multiplier({
                active: true,
                name: "[LE] Basic: Soul Razor: Lightning damage taken boost.",
                type: Type.EleTaken,
                value: 70,
            }),
        ],
    },
    "Bronya Zaychik": {
        "Drive Kometa (DK) [SSS, Core 6*]": [
            new Multiplier({
                active: true,
                name: "[DK] Leader: Crit rate boost when above 30 combo.",
                type: Type.CritRate,
                value: 26,
            }),
            new Multiplier({
                active: false,
                name: "[DK] Leader: Crit DMG boost for PSY valks.",
                type: Type.CritDmg,
                value: 29,
            }),
            new Multiplier({
                active: true,
                name: "[DK] Ult: Space Warp: Melee DMG boost.",
                type: Type.PhysDealt,
                value: 25,
            }),
            new Multiplier({
                active: true,
                name: "[DK] Ult: Space Warp: Melee crit rate boost.",
                type: Type.CritRate,
                value: 10,
            }),
        ],
    },
    // Himeko
    // Yae
    "Theresa Apocalypse": {
        "Celestial Hymn (CH) [S]": [
            new Multiplier({
                active: false,
                name:
                    "[CH] Leader: Physical DMG boost if team has 3 BIO valks.",
                type: Type.PhysDealt,
                value: 20,
            }),
            new Multiplier({
                active: true,
                name:
                    "[CH] Passive: Holy Dirge: Team gains crit DMG boost against impaired enemies.",
                type: Type.CritDmg,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name:
                    "[CH] Passive: Holy Dirge: Team gains physical DMG boost for 7.5s when cross is deployed.",
                type: Type.PhysDealt,
                value: 25,
            }),
        ],
    },
    "Fu Hua": {
        "Azure Empyrea (AE) [S]": [
            new Multiplier({
                active: true,
                name: "[AE] Leader: 15s bonus after entry.",
                type: Type.TdmDealt,
                value: 16,
            }),
            new Multiplier({
                active: false,
                name:
                    "[AE] Leader: Bonus for teams consisting of 3 different battlesuit types.",
                type: Type.TdmDealt,
                value: 23,
            }),
            new Multiplier({
                active: true,
                name:
                    "[AE] Combo ATK: Yin-Yang Tempo (BBB combo): Team bonus for 15s.",
                type: Type.EleDealt,
                value: 30,
            }),
            new Multiplier({
                active: false,
                name:
                    "[AE] Combo ATK/Ult: Hex of Crucibles: 15s Fire DMG bonus on Combo ATK hit.",
                type: Type.EleDealt,
                value: 35,
            }),
            new Multiplier({
                active: false,
                name:
                    "[AE] Combo ATK/Ult: Hex of Drowning: 15s Ice DMG bonus on Combo ATK hit.",
                type: Type.EleDealt,
                value: 30,
            }),
            new Multiplier({
                active: false,
                name:
                    "[AE] Ult: Hex of Enervation: 15s Lightning bonus on Ult hit.",
                type: Type.EleDealt,
                value: 30,
            }),
        ],
        "Phoenix (PX) [SS]": [
            new Multiplier({
                active: true,
                name:
                    "[PX] Leader: TDM boost on combo, charged, and ultimate attacks for teams with 3 PSY valks.",
                type: Type.TdmDealt,
                value: 32,
            }),
            new Multiplier({
                active: true,
                name:
                    "[PX] Passive: Rainbow Pinion: When over 2 bars, team gets elemental boost when PX's combo ATKs hit.",
                type: Type.EleDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name:
                    "[PX] Special: Oriole: When exiting with over 1/3 bars, enemies take 12/20% more elemental DMG.",
                type: Type.EleTaken,
                value: 20,
            }),
        ],
    },
    // Kallen
    // Rita
    "Liliya Olenyeva":  {
        "Blueberry Blitz (BB) [SSS]": [
            new Multiplier({
                active: true,
                name: "[BB] Passive: Equipment Enhancement: Upon exit, bonus for the character switching in.",
                type: Type.PhysDealt,
                value: 15,
            }),
            new Multiplier({
                active: false,
                name: "[BB] Ult: Weakness Scan: 30s bonus for Molotov Cherry after Ult.",
                type: Type.PhysDealt,
                value: 25,
            }),
        ],
    },
    // Seele
    // Durandal
});

export { DPS_VALK_MULTIPLIERS, SUPPORT_VALK_MULTIPLIERS };
