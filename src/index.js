const bossToChinese = {
  'Assaka': ['阿湿波', 'asb'],
  'Argent Knight: Artemis (AKA)': ['月魂'],
  'Benares': ['贝纳勒斯', '龙'],
  'Cursed Soul': ['姬子', '被诅咒的英魂'],
  'Dark Jixuanyuan (DXY, DJXY)': ['皮皮马', '马', '姬麟·黑'],
  'Doom': ['沉灵', '湮灭沉灵'],
  'Herrscher of the Void (HoV)': ['空之律者', '女王'],
  'Heimdall': ['海姆达尔', '海胖'],
  'Hellmaru': ['狐狸', '绯狱丸'],
  'HOMU King': ['吼姆'],
  'Jizo Mitama': ['地藏', '地藏御魂'],
  'Kallen': ['卡莲'],
  'MHT-3 Pax (tank)': ['和平使者', 'MHT', '坦克'],
  'MR-06X Hephaestus': ['赫菲斯托斯'],
  'Padrino': ['教父'],
  'Parvati': ['冰猪', '帕凡提'],
  'RPC': ['飞机', 'RPC - 6626'],
  'Shadow Knight (SK)': ['月轮'],
  'Son of Darkness (Dirac only)': ['黑夜之子'],
};

const valkToChinese = {
  'Accipiter (VA)': ['迅'],
  'Arctic Kreigmesser (KMS)': ['极'],
  'Argent Knight: Artemis (AKA)': ['月魂'],
  'Black Nucleus (BN)': ['黑'],
  'Battlestorm (BS)': ['疾'],
  'Bladestrike (VB)': ['强'],
  'Blood Rose (BR)': ['玫'],
  'Celestial Hymn (CH)': ['神'],
  'Chariot (VC)': ['战'],
  'Crimson Impulse (CI)': ['绯'],
  'Herrscher of Reason (HoR, Tronya)': ['理', '律鸭'],
  'Dimension Break (DB)': ['次'],
  'Divine Prayer (DP)': ['圣'],
  'Flame Sakitama (FS)': ['炎'],
  'Herrscher of the Void (God Kiana, GK, HoV)': ['律'],
  'Imayoh (IR)': ['今'],
  'Knight Moonbeam (KMB)': ['月'],
  'Lightning Empress (LE)': ['鬼'],
  'Liliya (Blueberry Blitz / BB)': ['蓝'],
  'Luna Kindred (LK)': ['月', '[初'],
  'Memento (Meme)': ['勿'],
  'Miko': ['逆'],
  'Molotov Cherry (Roza, MC)': ['粉', '孤儿队'],
  'Night Squire (NS)': ['白'],
  'Phantom Iron (PI)': ['狗'],
  'Phoenix (PX)': ['炽'],
  'Pledge (VP)': ['誓'],
  'Ranger (VR)': ['游'],
  'Rondo': ['樱'],
  'Scarlet Fusion (SF)': ['深'],
  'Sin Hunter (Sundenjaegar / SJ)': ['原罪'],
  'Snowy Sniper (SS)': ['雪'],
  'Shadow Dash (SD)': ['影'],
  'Shadow Knight (SK)': ['轮'],
  'Sixth Serenade (6S)': ['六'],
  'Triumph (VT)': ['凯'],
  'Umbral Rose (UR)': ['黯'],
  'Vermillion Knight (VK)': ['真'],
  'Void Drifter (VD)': ['游'], // 苍穹游侠
  'Violet Executor/Twilight Paladin (VE/TP)': ['紫'],
  'White Comet (WC)': ['白'],
  'Wolf Dawn (WD)': ['银'],
  'Yamabuki Armor/Drive Kometa (YA)(DK)': ['山'],
};

const modifiersToChinese = {
  'F2P / No gacha Gear': '零蛋',
  '2 - 3 pieces of gacha gear': '低配',
  'No JST': '无叶',
  'No newton': '无牛',
  'EX MA': '终极区',
  'Dirac': '狄拉克',
  'Q-Singularis': '量子奇点',
  'Red Lotus': '红莲',
  'Myriad': '无限',
};

const modifiers = Object
  .keys(modifiersToChinese)
  .map((m) => ({name: m, value: false}));

const pointsPerSecond = 53 + 1 / 3;
// Use list of objects instead of dictionary to ensure greatest to least ordering with v-for.
const scoresByTime = [];
const five = moment.duration(5, 'm');
for (let i = 0; i <= 120; i += 5) {
  const rawScore = 32000 - pointsPerSecond * (i + 1);
  const score = Math.floor(rawScore);
  const up = Math.round(rawScore * 1.2);
  const time = five.clone().subtract(i, 's');
  scoresByTime.push({
    'score': score,
    'up': up,
    'time': time.format('m:ss'),
  });
}

Vue.use(Vuetify);

const app = new Vue({
  el: '#app',
  data: {
    selectedBoss: null,
    selectedValks: [],
    valkInput: null,
    score: null,
    bosses: Object.keys(bossToChinese),
    valks: Object.keys(valkToChinese),
    scores: scoresByTime.map((s) => s.score),
    scoresByTime: scoresByTime,
    modifiers: modifiers,
  },
  computed: {
    bossNames: function() {
      return this.selectedBoss ? bossToChinese[this.selectedBoss] : [''];
    },
    // Some valks have multiple names, make all combos of valk team.
    valkCombos: function() {
      let combos = [''];
      this.selectedValks
        .map((v) => valkToChinese[v])
        .forEach((names) => {
          combos = combos.reduce((acc, curr) => {
            names.forEach((n) => acc.push(curr + n));
            return acc;
          }, []);
        });
      return combos;
    },
    biliLinks: function() {
      const baseUrl = 'https://search.bilibili.com/all?keyword=';

      // Build combos of boss name + valk team.
      let baseParams = [];
      this.bossNames.forEach((name) => {
        this.valkCombos.forEach((combo) => {
          const combined = name + combo;
          if (combined) {
            baseParams.push(combined);
          }
        });
      });
      if (!baseParams.length) {
        baseParams.push('');
      }

      // Static modifiers that go at the end.
      let modifierParams = '';
      for (const m of this.modifiers) {
        if (m.value) {
          modifierParams += modifiersToChinese[m.name];
        }
      }
      if (this.score) {
        modifierParams += this.score;
      }

      return baseParams.map((base) => `${baseUrl}${base}${modifierParams}`);
    },
  },
});
