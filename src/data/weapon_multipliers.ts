import { Type, Multiplier } from "@/models/multiplier";

const SUPPORT_WEAPON_MULTIPLIERS = Object.freeze({
    // Pistols
    Cannons: {
        "Star Shatterer - Vikrant": [
            new Multiplier({
                active: true,
                name:
                    "Vikrant: passive: Team TDM boost against weakened enemies",
                type: Type.TdmDealt,
                value: 15,
            }),
        ],
    },
    // Katanas
    Greatswords: {
        "Blood Dance (BD)": [
            new Multiplier({
                active: true,
                name: "Blood Dance: active",
                type: Type.EleTaken,
                value: 60,
            }),
        ],
    },
    // Crosses
    // Gauntlets
    // Scythes
    // Lances
});

const DPS_WEAPON_MULTIPLIERS = Object.freeze({
    // Pistols
    // Cannons
    // Katanas
    Greatswords: {
        "Might of An-Utu": [
            new Multiplier({
                active: true,
                name:
                    "Might of An-Utu: active: Enemies take 20% more fire on hit.",
                type: Type.EleDealt,
                value: 20,
            }),
            new Multiplier({
                active: true,
                name: "Might of An-Utu: passive",
                type: Type.TdmDealt,
                value: 30,
            }),
        ],
    },
    // Crosses
    // Gauntlets
    // Scythes
    // Lances
});

export { SUPPORT_WEAPON_MULTIPLIERS, DPS_WEAPON_MULTIPLIERS };
