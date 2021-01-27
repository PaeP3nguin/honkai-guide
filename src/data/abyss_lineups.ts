import { Boss, Bosses } from "@/models/boss";
import { Weather, EXALTED_WEATHER } from "@/models/weather";
import { daysDifference } from "@/util/dates";

class AbyssLineup {
  id: number;
  date: Date;

  // Date the lineup appeared in CN, defaults to 4 weeks back.
  cnDate: Date;
  boss: Boss;
  weather: Weather;

  // Optional event name, boss will be ignored.
  event: string;

  constructor({
    date,
    cnDate,
    boss,
    weather,
    event
  }: {
    date: Date;
    cnDate?: Date;
    boss?: Boss;
    weather?: Weather;
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
    if (event) {
      this.event = event;
    } else {
      this.boss = boss;
      this.weather = weather;
    }
  }
}

const ABYSS_LINEUPS = Object.freeze([
  new AbyssLineup({
    date: new Date("2020-09-15T00:00:00"),
    cnDate: new Date("2020-08-20T00:00:00"),
    event: "Patch 4.2"
  }),
  // 9/15 was BKE
  // 9/17 was BKE
  new AbyssLineup({
    date: new Date("2020-09-17T00:00:01"),
    cnDate: new Date("2020-08-20T00:00:00"),
    boss: Bosses.Nihilus,
    weather: EXALTED_WEATHER.Lightning
  }),
  new AbyssLineup({
    date: new Date("2020-09-21T00:00:00"),
    cnDate: new Date("2020-08-31T00:00:00"),
    boss: Bosses.Benares,
    weather: EXALTED_WEATHER.Ice
  }),
  new AbyssLineup({
    date: new Date("2020-09-24T00:00:00"),
    cnDate: new Date("2020-09-03T00:00:00"),
    boss: Bosses.Heimdall,
    weather: EXALTED_WEATHER.Fire
  }),
  new AbyssLineup({
    date: new Date("2020-09-28T00:00:00"),
    cnDate: new Date("2020-09-07T00:00:00"),
    boss: Bosses.Nihilus,
    weather: EXALTED_WEATHER.Lightning
  }),
  new AbyssLineup({
    date: new Date("2020-10-01T00:00:00"),
    cnDate: new Date("2020-09-10T00:00:00"),
    boss: Bosses.BKE,
    weather: EXALTED_WEATHER.Lightning
  }),
  new AbyssLineup({
    date: new Date("2020-10-05T00:00:00"),
    cnDate: new Date("2020-09-14T00:00:00"),
    boss: Bosses.Huodou,
    weather: EXALTED_WEATHER.Ice
  }),
  new AbyssLineup({
    date: new Date("2020-10-08T00:00:00"),
    cnDate: new Date("2020-09-17T00:00:00"),
    boss: Bosses.BKE,
    weather: EXALTED_WEATHER.Ice
  }),
  new AbyssLineup({
    date: new Date("2020-10-12T00:00:00"),
    cnDate: new Date("2020-09-21T00:00:00"),
    boss: Bosses.Jizo,
    weather: EXALTED_WEATHER.Ice
  }),
  // Started actually matching in 4.3
  new AbyssLineup({
    date: new Date("2020-10-29T00:00:00"),
    event: "Patch 4.3 (predicted)"
  }),
  new AbyssLineup({
    date: new Date("2020-12-03T00:00:00"),
    cnDate: new Date("2020-11-09T00:00:00"),
    boss: Bosses.SK,
    weather: EXALTED_WEATHER.TypeCounter
  }),
  new AbyssLineup({
    date: new Date("2020-12-07T00:00:00"),
    cnDate: new Date("2020-11-12T00:00:00"),
    boss: Bosses.Heimdall,
    weather: EXALTED_WEATHER.Fire
  }),
  new AbyssLineup({
    date: new Date("2020-12-10T00:00:00"),
    event: "Patch 4.4 (predicted)"
  }),
  new AbyssLineup({
    date: new Date("2020-12-11T00:00:00"),
    cnDate: new Date("2020-11-16T00:00:00"),
    boss: Bosses.Huodou,
    weather: EXALTED_WEATHER.TypeCounter
  }),
  new AbyssLineup({
    date: new Date("2020-12-14T00:00:00"),
    cnDate: new Date("2020-11-19T00:00:00"),
    boss: Bosses.Nihilus,
    weather: EXALTED_WEATHER.Lightning
  }),
  new AbyssLineup({
    date: new Date("2020-12-18T00:00:00"),
    cnDate: new Date("2020-11-23T00:00:00"),
    boss: Bosses.Rimestar,
    weather: EXALTED_WEATHER.Fire
  }),
  new AbyssLineup({
    date: new Date("2020-12-21T00:00:00"),
    cnDate: new Date("2020-11-26T00:00:00"),
    boss: Bosses.Jizo,
    weather: EXALTED_WEATHER.Physical
  }),
  new AbyssLineup({
    date: new Date("2020-12-25T00:00:00"),
    cnDate: new Date("2020-11-30T00:00:00"),
    boss: Bosses.Rimestar,
    weather: EXALTED_WEATHER.Fire
  }),
  new AbyssLineup({
    date: new Date("2020-12-28T00:00:00"),
    cnDate: new Date("2020-12-03T00:00:00"),
    boss: Bosses.SK,
    weather: EXALTED_WEATHER.TypeCounter
  }),
  new AbyssLineup({
    date: new Date("2020-12-31T00:00:00"),
    cnDate: new Date("2020-12-07T00:00:00"),
    boss: Bosses.Couatl,
    weather: EXALTED_WEATHER.Quantum
  }),
  new AbyssLineup({
    date: new Date("2021-01-04T00:00:00"),
    cnDate: new Date("2020-12-10T00:00:00"),
    boss: Bosses.BKE,
    weather: EXALTED_WEATHER.Lightning
  }),
  new AbyssLineup({
    date: new Date("2021-01-07T00:00:00"),
    cnDate: new Date("2020-12-14T00:00:00"),
    boss: Bosses.Benares,
    weather: EXALTED_WEATHER.Ice
  }),
  new AbyssLineup({
    date: new Date("2021-01-11T00:00:00"),
    cnDate: new Date("2020-12-17T00:00:00"),
    boss: Bosses.Parvati,
    weather: EXALTED_WEATHER.Ignite
  }),
  new AbyssLineup({
    date: new Date("2021-01-14T00:00:00"),
    cnDate: new Date("2020-12-21T00:00:00"),
    boss: Bosses.Huodou,
    weather: EXALTED_WEATHER.Ice
  }),
  new AbyssLineup({
    date: new Date("2021-01-18T00:00:00"),
    cnDate: new Date("2020-12-24T00:00:00"),
    boss: Bosses.Jizo,
    weather: EXALTED_WEATHER.Physical
  }),
  new AbyssLineup({
    date: new Date("2021-01-21T00:00:00"),
    event: "Patch 4.5 (predicted)"
  }),
  new AbyssLineup({
    date: new Date("2021-01-21T00:00:00"),
    cnDate: new Date("2020-12-28T00:00:00"),
    boss: Bosses.Benares,
    weather: EXALTED_WEATHER.Ice
  }),
  new AbyssLineup({
    date: new Date("2021-01-25T00:00:00"),
    cnDate: new Date("2020-12-31T00:00:00"),
    boss: Bosses.Huodou,
    weather: EXALTED_WEATHER.Ice
  }),
  new AbyssLineup({
    date: new Date("2021-01-28T00:00:00"),
    cnDate: new Date("2021-01-04T00:00:00"),
    boss: Bosses.Assaka,
    weather: EXALTED_WEATHER.Physical
  }),
  new AbyssLineup({
    date: new Date("2021-02-01T00:00:00"),
    cnDate: new Date("2021-01-07T00:00:00"),
    boss: Bosses.Couatl,
    weather: EXALTED_WEATHER.Quantum
  }),
  new AbyssLineup({
    date: new Date("2021-02-04T00:00:00"),
    cnDate: new Date("2021-01-11T00:00:00"),
    boss: Bosses.DXY,
    weather: EXALTED_WEATHER.TypeCounter
  }),
  new AbyssLineup({
    date: new Date("2021-02-08T00:00:00"),
    cnDate: new Date("2021-01-14T00:00:00"),
    boss: Bosses.Huodou,
    weather: EXALTED_WEATHER.Ice
  }),
  new AbyssLineup({
    date: new Date("2021-02-11T00:00:00"),
    cnDate: new Date("2021-01-18T00:00:00"),
    boss: Bosses.Rimestar,
    weather: EXALTED_WEATHER.Fire
  }),
  new AbyssLineup({
    date: new Date("2021-03-04T00:00:00"),
    event: "Patch 4.6 (predicted)"
  })
]);
// Lineup sources:
// https://space.bilibili.com/39263563
// Source with weathers in video: https://space.bilibili.com/60622135/video
// https://search.bilibili.com/all?keyword=%E8%B6%85%E5%BC%A6%E7%A9%BA%E9%97%B4&order=pubdate&duration=0&tids_1=0

const today = new Date();

const RECENT_LINEUPS = Object.freeze(
  ABYSS_LINEUPS.filter(lineup => daysDifference(today, lineup.date) >= -6)
);

export { RECENT_LINEUPS };
