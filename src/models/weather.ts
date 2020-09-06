class Weather {
  name: string;
  effect: string;
  icon: string;

  constructor({ name, effect, icon }: { name: string; effect: string; icon: string }) {
    this.name = name;
    this.effect = effect;
    this.icon = icon;
  }
}

const EXALTED_WEATHER = Object.freeze({
  Lightning: new Weather({
    name: "Lightning",
    effect: "Enemies takes 50% bonus Lightning DMG and 50% less Physical DMG.",
    icon: "lightning.png"
  }),
  Physical: new Weather({
    name: "Physical",
    effect: "Enemies takes 50% bonus Physical DMG and 50% less Lightning DMG.",
    icon: "physical.png"
  }),
  Ice: new Weather({
    name: "Ice",
    effect: "Enemies takes 50% bonus Ice DMG and 50% less Fire DMG.",
    icon: "ice.png"
  }),
  Fire: new Weather({
    name: "Fire",
    effect: "Enemies takes 50% bonus Fire DMG and 50% less Ice DMG.",
    icon: "fire.png"
  }),
});

export { Weather, EXALTED_WEATHER };
