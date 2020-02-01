enum Type {
    TdmDealt = "Total DMG dealt",
    TdmTaken = "Total DMG taken",
    EleDealt = "Elemental DMG dealt",
    EleTaken = "Elemental DMG taken",
    PhysDealt = "Physical DMG dealt",
    PhysTaken = "Physical DMG taken",
    CritDmg = "Critical DMG"
}

class Multiplier {
    id: number;
    name: string;
    type: Type;
    value: number;
    active: boolean;

    constructor({
        id,
        name,
        type,
        value,
        active
    }: {
        active?: boolean;
        id?: number;
        name?: string;
        type?: Type;
        value?: number;
    }) {
        this.id = id || Math.random();
        if (name) {
            this.name = name;
        }
        if (type) {
            this.type = type;
        }
        if (value) {
            this.value = value;
        }
        this.active = active;
    }

    static fromObject(object: any): Multiplier {
        return new Multiplier({
            // id: object.id,
            name: object.name,
            type: object.type,
            value: object.value,
            active: object.active
        });
    }

    static empty(): Multiplier {
        return new Multiplier({});
    }

    /**
     * Converts this multiplier to a decimal percentage value if it matches the desired type, else returns 0.
     *
     * If the multiplier is not active, also returns 0.
     */
    toPercent(type: Type): number {
    if (this.type != type || !this.active) {
        return 0;
    }

    return this.value / 100;
    }

    clone(): Multiplier {
        return new Multiplier({
            name: this.name,
            type: this.type,
            value: this.value,
            active: this.active
        });
    }
}

export { Type, Multiplier };
