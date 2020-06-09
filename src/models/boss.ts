class Boss {
  name: string;
  shortName: string;
  image: string;
  wikiLink: string;

  constructor({
    name,
    shortName,
    image,
    wikiLink
  }: {
    name: string;
    shortName: string;
    image: string;
    wikiLink: string;
  }) {
    this.name = name;
    this.shortName = shortName;
    this.image = image;
    this.wikiLink = wikiLink;
  }
}

class BossLineup {
  id: number;
  date: Date;
  bosses: Boss[];
  event: string;

  constructor({ date, bosses, event }: { date: Date; bosses?: Boss[]; event?: string }) {
    this.id = Math.random();
    this.date = date;
    if (bosses) {
      this.bosses = bosses;
    }
    if (event) {
      this.event = event;
    }
  }
}

const Bosses = {
  Assaka: new Boss({
    name: "Assaka",
    shortName: "Assaka",
    image: "assaka.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Assaka_(Memorial_Arena)"
  }),
  AKA: new Boss({
    name: "Argent Knight: Artemis",
    shortName: "AKA",
    image: "aka.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Argent_Knight_-_Artemis_(Memorial_Arena)"
  }),
  Benares: new Boss({
    name: "Benares",
    shortName: "Benares",
    image: "benares.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Benares_(Memorial_Arena)"
  }),
  BKE: new Boss({
    name: "Bright Knight - Exelcsis",
    shortName: "BKE",
    image: "bke.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com"
  }),
  CursedSoul: new Boss({
    name: "Cursed Soul",
    shortName: "Cursed Soul",
    image: "",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Cursed_Soul_(Memorial_Arena)"
  }),
  DXY: new Boss({
    name: "Dark Jixuanyuan",
    shortName: "DXY",
    image: "dxy.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Dark_Jixuanyuan_(Memorial_Arena)"
  }),
  Doom: new Boss({
    name: "Doom",
    shortName: "Doom",
    image: "doom.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Deathly_Doom_(Memorial_Arena)"
  }),
  HoV: new Boss({
    name: "Herrscher of the Void",
    shortName: "HoV",
    image: "hov.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Herrscher_of_the_Void_(Memorial_Arena)"
  }),
  Heimdall: new Boss({
    name: "Heimdall",
    shortName: "Heimdall",
    image: "heimdall.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Aesir_Heimdall_(Memorial_Arena)"
  }),
  Hellmaru: new Boss({
    name: "Hellmaru",
    shortName: "Hellmaru",
    image: "hellmaru.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Hellmaru_(Memorial_Arena)"
  }),
  HOMU: new Boss({
    name: "HOMU King",
    shortName: "HOMU",
    image: "homu.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/HOMU_Emperor_(Memorial_Arena)"
  }),
  Jizo: new Boss({
    name: "Jizo Mitama",
    shortName: "Jizo",
    image: "jizo.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Jizo_Mitama_(Memorial_Arena)"
  }),
  Kallen: new Boss({
    name: "Kallen",
    shortName: "Kallen",
    image: "kallen.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Kallen_(Memorial_Arena)"
  }),
  Mexicatl: new Boss({
    name: "Mexicatl: Umbreist",
    shortName: "Mexicatl",
    image: "mexicatl.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Mexicatl_-_Umbreist_(Memorial_Arena)"
  }),
  Pax: new Boss({
    name: "MHT-3 Pax",
    shortName: "Pax",
    image: "pax.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/MHT-3_Pax_(Memorial_Arena)"
  }),
  Hephaestus: new Boss({
    name: "MR-06X Hephaestus",
    shortName: "Hephaestus",
    image: "hephaestus.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Hephaestus_(Memorial_Arena)"
  }),
  Padrino: new Boss({
    name: "Padrino",
    shortName: "Padrino",
    image: "padrino.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Padrino_Legion_(Memorial_Arena)"
  }),
  Parvati: new Boss({
    name: "Parvati",
    shortName: "Parvati",
    image: "parvati.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Parvati_(Memorial_Arena)"
  }),
  RPC: new Boss({
    name: "RPC",
    shortName: "RPC",
    image: "rpc.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/RPC-6626_(Memorial_Arena)"
  }),
  SK: new Boss({
    name: "Shadow Knight",
    shortName: "SK",
    image: "sk.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Shadow_Knight_(Memorial_Arena)"
  }),
  Tonatiuh: new Boss({
    name: "Tonatiuh",
    shortName: "Tonatiuh",
    image: "tonatiuh.png",
    wikiLink: "https://honkaiimpact3.gamepedia.com/Tonatiuh_(Memorial_Arena)"
  })
};

export { Boss, BossLineup, Bosses };
