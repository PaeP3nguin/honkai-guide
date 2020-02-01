import { Type, Multiplier } from "@/models/multiplier";

const VALK_MULTIPLIERS = {
    // Kiana
    // Mei
    // Bronya
    "Herrscher of Reason (HoR)": [
        new Multiplier({
            active: true,
            name: "HoR: Lead Skill",
            type: Type.EleDealt,
            value: 24,
        }),
        new Multiplier({
            active: true,
            name: "HoR: Lead Skill",
            type: Type.TdmDealt,
            value: 21,
        }),
    ],
    // Himeko
    // Yae
    // Theresa
    // Fu Hua
    // Kallen
    // Rita
    // Olenyevas
    // Seele
};

export default VALK_MULTIPLIERS;
