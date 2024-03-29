import { Boss, Bosses } from "@/models/boss";
import { daysDifference } from "@/util/dates";

class BossLineup {
  id: number;
  date: Date;

  // Date the lineup appeared in CN, defaults to 4 weeks back.
  cnDate: Date;
  bosses: Boss[];

  // Optional event name, bosses will be ignored.
  event: string;

  constructor({
    date,
    cnDate,
    bosses,
    event,
  }: {
    date: Date;
    cnDate?: Date;
    bosses?: Boss[];
    event?: string;
  }) {
    this.id = Math.random();
    this.date = date;
    if (cnDate) {
      this.cnDate = cnDate;
    } else {
      this.cnDate = new Date(date);
      this.cnDate.setDate(this.cnDate.getDate() - 4 * 7);
    }
    if (bosses) {
      this.bosses = bosses;
    }
    if (event) {
      this.event = event;
    }
  }
}

const BOSS_LINEUPS = Object.freeze([
  new BossLineup({
    date: new Date("2020-04-20T00:00:00"),
    bosses: [Bosses.Tonatiuh, Bosses.SK, Bosses.HoV],
  }),
  new BossLineup({
    date: new Date("2020-04-27T00:00:00"),
    bosses: [Bosses.AKA, Bosses.Jizo, Bosses.Kallen],
  }),
  new BossLineup({
    date: new Date("2020-05-04T00:00:00"),
    bosses: [Bosses.Tonatiuh, Bosses.HoV, Bosses.Hellmaru],
  }),
  new BossLineup({
    date: new Date("2020-05-11T00:00:00"),
    bosses: [Bosses.DXY, Bosses.Hephaestus, Bosses.Jizo],
  }),
  new BossLineup({
    date: new Date("2020-05-14T00:00:00"),
    event: "Patch 3.9",
  }),
  new BossLineup({
    date: new Date("2020-05-18T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.DXY, Bosses.Assaka],
  }),
  new BossLineup({
    date: new Date("2020-05-25T00:00:00"),
    bosses: [Bosses.SK, Bosses.HoV, Bosses.Doom],
  }),
  new BossLineup({
    date: new Date("2020-06-01T00:00:00"),
    bosses: [Bosses.Benares, Bosses.DXY, Bosses.Parvati],
  }),
  new BossLineup({
    date: new Date("2020-06-08T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.Tonatiuh, Bosses.HoV],
  }),
  new BossLineup({
    date: new Date("2020-06-15T00:00:00"),
    bosses: [Bosses.Benares, Bosses.Hellmaru, Bosses.Heimdall],
  }),
  new BossLineup({
    date: new Date("2020-06-22T00:00:00"),
    bosses: [Bosses.SK, Bosses.AKA, Bosses.Hephaestus],
  }),
  new BossLineup({
    date: new Date("2020-06-22T00:00:00"),
    event: "Patch 4.0",
  }),
  new BossLineup({
    date: new Date("2020-06-29T00:00:00"),
    bosses: [Bosses.SK, Bosses.Tonatiuh, Bosses.Hellmaru],
  }),
  new BossLineup({
    date: new Date("2020-07-06T00:00:00"),
    bosses: [Bosses.BKE, Bosses.Hephaestus, Bosses.AKA],
  }),
  new BossLineup({
    date: new Date("2020-07-13T00:00:00"),
    bosses: [Bosses.HoV, Bosses.DXY, Bosses.Jizo],
    // Was actually DXY/Tona/AKA NO UPRATE: https://cdn.discordapp.com/attachments/590279568556818455/732327806943625305/unknown.png
  }),
  new BossLineup({
    date: new Date("2020-07-20T00:00:00"),
    bosses: [Bosses.HoV, Bosses.Hellmaru, Bosses.Kallen],
  }),
  new BossLineup({
    date: new Date("2020-07-27T00:00:00"),
    bosses: [Bosses.BKE, Bosses.Hephaestus, Bosses.Kallen],
  }),
  new BossLineup({
    date: new Date("2020-08-03T00:00:00"),
    bosses: [Bosses.SK, Bosses.Jizo, Bosses.Tonatiuh],
  }),
  new BossLineup({
    date: new Date("2020-08-06T00:00:00"),
    event: "Patch 4.1",
  }),
  new BossLineup({
    date: new Date("2020-08-10T00:00:00"),
    bosses: [Bosses.BKE, Bosses.Tonatiuh, Bosses.DXY],
    // Was actually Heimdall/DXY/Hellmaru
  }),
  new BossLineup({
    date: new Date("2020-08-17T00:00:00"),
    bosses: [Bosses.Heimdall, Bosses.Kallen, Bosses.AKA],
    // Was actually Jizo/Hellmaru/Benares
  }),
  new BossLineup({
    date: new Date("2020-08-24T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.Hephaestus, Bosses.AKA],
    // Was actually Heimdall/AKA/Kallen
  }),
  new BossLineup({
    date: new Date("2020-08-31T00:00:00"),
    bosses: [Bosses.BKE, Bosses.Kallen, Bosses.Tonatiuh],
  }),
  new BossLineup({
    date: new Date("2020-09-07T00:00:00"),
    bosses: [Bosses.Heimdall, Bosses.DXY, Bosses.Hellmaru],
  }),
  new BossLineup({
    date: new Date("2020-09-14T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.Hellmaru, Bosses.Benares],
  }),
  new BossLineup({
    date: new Date("2020-09-15T00:00:00"),
    cnDate: new Date("2020-08-20T00:00:00"),
    event: "Patch 4.2",
  }),
  new BossLineup({
    date: new Date("2020-09-21T00:00:00"),
    bosses: [Bosses.Huodou, Bosses.Heimdall, Bosses.SK],
  }),
  new BossLineup({
    date: new Date("2020-09-28T00:00:00"),
    bosses: [Bosses.HoV, Bosses.BKE, Bosses.AKA],
  }),
  new BossLineup({
    date: new Date("2020-10-05T00:00:00"),
    bosses: [Bosses.Hephaestus, Bosses.DXY, Bosses.AKA],
    // Was actually BKE/Heph/Kallen (CN got 4.3)
  }),
  new BossLineup({
    date: new Date("2020-10-12T00:00:00"),
    bosses: [Bosses.HoV, Bosses.DXY, Bosses.Jizo],
    // Was actually SK/Jizo/Tona
  }),
  new BossLineup({
    date: new Date("2020-10-19T00:00:00"),
    bosses: [Bosses.Hephaestus, Bosses.Tonatiuh, Bosses.AKA],
  }),
  new BossLineup({
    date: new Date("2020-10-26T00:00:00"),
    bosses: [Bosses.Huodou, Bosses.HOMU, Bosses.Kallen],
  }),
  new BossLineup({
    date: new Date("2020-10-29T00:00:00"),
    event: "Patch 4.3 (predicted)",
  }),
  new BossLineup({
    date: new Date("2020-11-02T00:00:00"),
    bosses: [Bosses.SK, Bosses.Jizo, Bosses.Hellmaru],
  }),
  new BossLineup({
    date: new Date("2020-11-09T00:00:00"),
    bosses: [Bosses.BKE, Bosses.Hephaestus, Bosses.Kallen],
  }),
  new BossLineup({
    date: new Date("2020-11-16T00:00:00"),
    bosses: [Bosses.SK, Bosses.HOMU, Bosses.Tonatiuh],
  }),
  new BossLineup({
    date: new Date("2020-11-23T00:00:00"),
    bosses: [Bosses.Huodou, Bosses.Heimdall, Bosses.Hephaestus],
  }),
  new BossLineup({
    date: new Date("2020-11-30T00:00:00"),
    bosses: [Bosses.BKE, Bosses.AKA, Bosses.HOMU],
  }),
  new BossLineup({
    date: new Date("2020-12-07T00:00:00"),
    bosses: [Bosses.SK, Bosses.AKA, Bosses.Tonatiuh],
  }),
  new BossLineup({
    date: new Date("2020-12-10T00:00:00"),
    event: "Patch 4.4 (predicted)",
  }),
  new BossLineup({
    date: new Date("2020-12-14T00:00:00"),
    bosses: [Bosses.Huodou, Bosses.Jizo, Bosses.Kallen],
  }),
  new BossLineup({
    date: new Date("2020-12-21T00:00:00"),
    bosses: [Bosses.Parvati, Bosses.Tonatiuh, Bosses.Doom],
  }),
  new BossLineup({
    date: new Date("2020-12-28T00:00:00"),
    bosses: [Bosses.Rimestar, Bosses.DXY, Bosses.BKE],
  }),
  new BossLineup({
    date: new Date("2021-01-04T00:00:00"),
    bosses: [Bosses.HoV, Bosses.Jizo, Bosses.Huodou],
  }),
  new BossLineup({
    date: new Date("2021-01-11T00:00:00"),
    bosses: [Bosses.HoV, Bosses.Hephaestus, Bosses.BKE],
  }),
  new BossLineup({
    date: new Date("2021-01-18T00:00:00"),
    bosses: [Bosses.Rimestar, Bosses.Assaka, Bosses.Doom],
  }),
  new BossLineup({
    date: new Date("2021-01-21T00:00:00"),
    event: "Patch 4.5 (predicted)",
  }),
  // Didn't run, skipped a week?
  // new BossLineup({
  //   date: new Date("2021-01-25T00:00:00"),
  //   bosses: [Bosses.Tonatiuh, Bosses.Jizo, Bosses.BKE]
  // }),
  new BossLineup({
    cnDate: new Date("2021-01-04T00:00:00"),
    date: new Date("2021-01-25T00:00:00"),
    bosses: [Bosses.AKA, Bosses.HoV, Bosses.DXY],
  }),
  new BossLineup({
    cnDate: new Date("2021-01-11T00:00:00"),
    date: new Date("2021-02-01T00:00:00"),
    // Whelp, we off again...
    // bosses: [Bosses.Huodou, Bosses.Parvati, Bosses.Hellmaru]
    bosses: [Bosses.Huodou, Bosses.Jizo, Bosses.Kallen],
  }),
  // new BossLineup({
  //   cnDate: new Date("2021-01-18T00:00:00"),
  //   date: new Date("2021-02-08T00:00:00"),
  //   bosses: [Bosses.AKA, Bosses.DXY, Bosses.Rimestar]
  // }),
  // new BossLineup({
  //   cnDate: new Date("2021-01-25T00:00:00"),
  //   date: new Date("2021-02-15T00:00:00"),
  //   bosses: [Bosses.Tonatiuh, Bosses.HoV, Bosses.Heimdall]
  // }),
  new BossLineup({
    date: new Date("2021-03-04T00:00:00"),
    event: "Patch 4.6",
  }),
  new BossLineup({
    date: new Date("2021-03-08T00:00:00"),
    bosses: [Bosses.Parvati, Bosses.HOMU, Bosses.Assaka],
  }),
  new BossLineup({
    date: new Date("2021-03-15T00:00:00"),
    bosses: [Bosses.Doom, Bosses.Tonatiuh, Bosses.SK],
  }),
  new BossLineup({
    date: new Date("2021-03-22T00:00:00"),
    bosses: [Bosses.Couatl, Bosses.HOMU, Bosses.Benares],
  }),
  new BossLineup({
    date: new Date("2021-03-29T00:00:00"),
    bosses: [Bosses.Parvati, Bosses.Huodou, Bosses.Heimdall],
  }),
  new BossLineup({
    date: new Date("2021-04-05T00:00:00"),
    bosses: [Bosses.Couatl, Bosses.Benares, Bosses.Rimestar],
  }),
  new BossLineup({
    date: new Date("2021-04-12T00:00:00"),
    bosses: [Bosses.Parvati, Bosses.SK, Bosses.Tonatiuh],
  }),
  new BossLineup({
    date: new Date("2021-04-19T00:00:00"),
    bosses: [Bosses.Doom, Bosses.Rimestar, Bosses.Assaka],
  }),
  new BossLineup({
    date: new Date("2021-04-22T00:00:00"),
    event: "Patch 4.7 (predicted)",
  }),
  new BossLineup({
    date: new Date("2021-04-26T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.Kallen, Bosses.Parvati],
  }),
  new BossLineup({
    date: new Date("2021-05-03T00:00:00"),
    bosses: [Bosses.Huodou, Bosses.Parvati, Bosses.Doom],
  }),
  new BossLineup({
    date: new Date("2021-05-10T00:00:00"),
    bosses: [Bosses.Rimestar, Bosses.Assaka, Bosses.BKE],
  }),
  new BossLineup({
    date: new Date("2021-05-17T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.Doom, Bosses.Kallen],
  }),
  new BossLineup({
    date: new Date("2021-05-24T00:00:00"),
    bosses: [Bosses.Huodou, Bosses.HoV, Bosses.Assaka],
  }),
  new BossLineup({
    date: new Date("2021-05-27T00:00:00"),
    event: "Patch 4.8",
  }),
  new BossLineup({
    date: new Date("2021-05-31T00:00:00"),
    bosses: [Bosses.Hellmaru, Bosses.Huodou, Bosses.BKE],
  }),
  new BossLineup({
    date: new Date("2021-06-07T00:00:00"),
    bosses: [Bosses.Kasumi, Bosses.DXY, Bosses.Huodou],
  }),
  new BossLineup({
    date: new Date("2021-06-14T00:00:00"),
    bosses: [Bosses.Couatl, Bosses.SK, Bosses.Kallen],
  }),
  new BossLineup({
    date: new Date("2021-06-21T00:00:00"),
    bosses: [Bosses.Kasumi, Bosses.AKA, Bosses.Jizo],
  }),
  new BossLineup({
    date: new Date("2021-06-28T00:00:00"),
    bosses: [Bosses.Couatl, Bosses.HoV, Bosses.Hephaestus],
  }),
  new BossLineup({
    date: new Date("2021-07-05T00:00:00"),
    bosses: [Bosses.Hellmaru, Bosses.Tonatiuh, Bosses.BKE],
  }),
  new BossLineup({
    date: new Date("2021-07-08T00:00:00"),
    event: "Patch 4.9",
  }),
  new BossLineup({
    date: new Date("2021-07-12T00:00:00"),
    bosses: [Bosses.Parvati, Bosses.Doom, Bosses.BKE],
  }),
  new BossLineup({
    date: new Date("2021-07-19T00:00:00"),
    bosses: [Bosses.Andrius, Bosses.Hephaestus, Bosses.Hellmaru],
  }),
  new BossLineup({
    date: new Date("2021-07-26T00:00:00"),
    bosses: [Bosses.Tonatiuh, Bosses.Couatl, Bosses.Rimestar],
  }),
  new BossLineup({
    date: new Date("2021-08-02T00:00:00"),
    bosses: [Bosses.Andrius, Bosses.Jizo, Bosses.DXY],
  }),
  new BossLineup({
    date: new Date("2021-08-09T00:00:00"),
    bosses: [Bosses.Parvati, Bosses.Doom, Bosses.Rimestar],
  }),
  new BossLineup({
    date: new Date("2021-08-12T00:00:00"),
    event: "Patch 5.0",
  }),
  new BossLineup({
    date: new Date("2021-08-16T00:00:00"),
    bosses: [Bosses.MHT3B, Bosses.Couatl, Bosses.DXY],
  }),
  new BossLineup({
    date: new Date("2021-08-23T00:00:00"),
    bosses: [Bosses.Kasumi, Bosses.Hellmaru, Bosses.Huodou],
    // Was actually Jizo, Hellmaru, Huodou
  }),
  new BossLineup({
    date: new Date("2021-08-30T00:00:00"),
    bosses: [Bosses.Tonatiuh, Bosses.Heimdall, Bosses.Jizo],
  }),
  new BossLineup({
    date: new Date("2021-09-06T00:00:00"),
    bosses: [Bosses.Kasumi, Bosses.Parvati, Bosses.Rimestar],
  }),
  new BossLineup({
    date: new Date("2021-09-13T00:00:00"),
    bosses: [Bosses.MHT3B, Bosses.DXY, Bosses.Andrius],
  }),
  new BossLineup({
    date: new Date("2021-09-15T00:00:00"),
    event: "Patch 5.1",
  }),
  new BossLineup({
    date: new Date("2021-09-20T00:00:00"),
    bosses: [Bosses.MHT3B, Bosses.Benares, Bosses.Heimdall],
  }),
  new BossLineup({
    date: new Date("2021-09-27T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.SK, Bosses.Tonatiuh],
  }),
  new BossLineup({
    date: new Date("2021-10-04T00:00:00"),
    bosses: [Bosses.MHT3B, Bosses.AKA, Bosses.Kasumi],
  }),
  new BossLineup({
    date: new Date("2021-10-11T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.Hellmaru, Bosses.Kallen],
  }),
  new BossLineup({
    date: new Date("2021-10-18T00:00:00"),
    bosses: [Bosses.MHT3B, Bosses.BKE, Bosses.Andrius],
  }),
  new BossLineup({
    date: new Date("2021-10-20T00:00:00"),
    event: "Patch 5.2",
  }),
  new BossLineup({
    date: new Date("2021-10-25T00:00:00"),
    bosses: [Bosses.Andrius, Bosses.Tonatiuh, Bosses.HoD],
  }),
  new BossLineup({
    date: new Date("2021-11-01T00:00:00"),
    bosses: [Bosses.MHT3B, Bosses.Hellmaru, Bosses.HOMU],
  }),
  new BossLineup({
    date: new Date("2021-11-08T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.Kallen, Bosses.Rimestar],
  }),
  new BossLineup({
    date: new Date("2021-11-15T00:00:00"),
    bosses: [Bosses.Andrius, Bosses.Couatl, Bosses.BKE],
  }),
  new BossLineup({
    date: new Date("2021-11-22T00:00:00"),
    bosses: [Bosses.MHT3B, Bosses.Doom, Bosses.HoD],
  }),
  new BossLineup({
    date: new Date("2021-11-29T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.HoV, Bosses.Hephaestus],
  }),
  new BossLineup({
    date: new Date("2021-12-06T00:00:00"),
    bosses: [Bosses.Nihilus, Bosses.Parvati, Bosses.HoV],
  }),
  new BossLineup({
    date: new Date("2021-12-13T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.Rimestar, Bosses.Hephaestus],
  }),
  new BossLineup({
    date: new Date("2021-12-20T00:00:00"),
    bosses: [Bosses.Andrius, Bosses.Doom, Bosses.Hellmaru],
  }),
  new BossLineup({
    date: new Date("2021-12-27T00:00:00"),
    bosses: [Bosses.Nihilus, Bosses.Tonatiuh, Bosses.Kasumi],
  }),
  new BossLineup({
    date: new Date("2022-01-03T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.HoD, Bosses.DXY],
  }),
]);
// Lineup sources:
// https://bbs.mihoyo.com/bh3/topicDetail/20
// Can also search: 崩坏3 记忆战场一档

const today = new Date();

const RECENT_LINEUPS = Object.freeze(
  BOSS_LINEUPS.filter((lineup) => daysDifference(today, lineup.date) >= -6)
);

export { RECENT_LINEUPS };
