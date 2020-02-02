import { Type, Multiplier } from "@/models/multiplier";

const VALK_MULTIPLIERS = {
    // Kiana
    // Mei
    Bronya: {
        "Herrscher of Reason (HoR)": [
            new Multiplier({
                active: true,
                name: "[HoR] Lead Skill",
                type: Type.EleDealt,
                value: 24,
            }),
            new Multiplier({
                active: true,
                name: "[HoR] Lead Skill",
                type: Type.TdmDealt,
                value: 21,
            }),
            new Multiplier({
                active: true,
                name: "[HoR] Passive: Against analyzed enemies",
                type: Type.TdmDealt,
                value: 40,
            }),
            new Multiplier({
                active: true,
                name: "[HoR] Chilling Build: Charge attacks",
                type: Type.EleDealt,
                value: 54,
            }),
            new Multiplier({
                active: true,
                name: "[HoR] Speed Decypher: ult and charged attacks",
                type: Type.TdmDealt,
                value: 30,
            }),
            new Multiplier({
                active: false,
                name:
                    "[HoR] Stream Transfer: Non-ult charge attacks (15%/stack, max 3 stacks)",
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
                name: "[HF] Unity Mantra: bonus when breaking shield, 12 seconds",
                type: Type.TdmDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name: "[HF] Vajra Mantra: bonus lightning",
                type: Type.EleDealt,
                value: 30,
            }),
            new Multiplier({
                active: true,
                name: "[HF] Shattering Mantra: against shielded enemies",
                type: Type.TdmDealt,
                value: 30,
            }),
            new Multiplier({
                active: false,
                name:
                    "[HF] Flux Wyrm: bonus for Six-sided Shock when doing basic attacks during Flux Wyrm, 14%/stack, max 5 stacks",
                type: Type.EleDealt,
                value: 70,
            }),
            new Multiplier({
                active: true,
                name: "[HF] Teravolt Maul: bonus on ultimate",
                type: Type.TdmDealt,
                value: 50,
            }),
            new Multiplier({
                active: true,
                name: "[HF] Conductive Impact: within 18s of entry or ult",
                type: Type.EleDealt,
                value: 45,
            }),
        ],
    },
    // Kallen
    // Rita
    // Olenyevas
    // Seele
};

export default VALK_MULTIPLIERS;
