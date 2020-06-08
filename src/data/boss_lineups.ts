import { Bosses, BossLineup } from "@/models/boss";

const today = new Date();

function daysDifference(d0: Date, d1: Date) {
  const diff = new Date(+d1).setHours(12) - new Date(+d0).setHours(12);
  return Math.round(diff / 8.64e7);
}

// For weekly lineups: https://space.bilibili.com/20678696
// Can also search: 崩坏3 记忆战场一档
const BOSS_LINEUPS = Object.freeze([
  new BossLineup({
    date: new Date("2020-04-20T00:00:00"),
    bosses: [Bosses.Tonatiuh, Bosses.SK, Bosses.HoV]
  }),
  new BossLineup({
    date: new Date("2020-04-27T00:00:00"),
    bosses: [Bosses.AKA, Bosses.Jizo, Bosses.Kallen]
  }),
  new BossLineup({
    date: new Date("2020-05-04T00:00:00"),
    bosses: [Bosses.Tonatiuh, Bosses.HoV, Bosses.Hellmaru]
  }),
  new BossLineup({
    date: new Date("2020-05-11T00:00:00"),
    bosses: [Bosses.DXY, Bosses.Hephaestus, Bosses.Jizo]
  }),
  new BossLineup({
    date: new Date("2020-05-14T00:00:00"),
    event: "Patch 3.9"
  }),
  new BossLineup({
    date: new Date("2020-05-18T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.DXY, Bosses.Assaka]
  }),
  new BossLineup({
    date: new Date("2020-05-25T00:00:00"),
    bosses: [Bosses.SK, Bosses.HoV, Bosses.Doom]
  }),
  new BossLineup({
    date: new Date("2020-06-01T00:00:00"),
    bosses: [Bosses.Benares, Bosses.DXY, Bosses.Parvati]
  }),
  new BossLineup({
    date: new Date("2020-06-08T00:00:00"),
    bosses: [Bosses.Jizo, Bosses.Tonatiuh, Bosses.HoV]
  }),
  new BossLineup({
    date: new Date("2020-06-15T00:00:00"),
    bosses: [Bosses.Benares, Bosses.Hellmaru, Bosses.Heimdall]
  }),
  new BossLineup({
    date: new Date("2020-06-22T00:00:00"),
    bosses: [Bosses.SK, Bosses.AKA, Bosses.Hephaestus]
  }),
  new BossLineup({
    date: new Date("2020-06-25T00:00:00"),
    event: "Patch 4.0"
  }),
  new BossLineup({
    date: new Date("2020-06-29T00:00:00"),
    bosses: [Bosses.SK, Bosses.Tonatiuh, Bosses.Hellmaru]
  }),
  new BossLineup({
    date: new Date("2020-07-06T00:00:00"),
    bosses: [Bosses.BKE, Bosses.Hephaestus, Bosses.AKA]
  })
]);

const RECENT_LINEUPS = Object.freeze(
  BOSS_LINEUPS.filter(lineup => daysDifference(today, lineup.date) >= -6)
);

export { BOSS_LINEUPS, RECENT_LINEUPS };
