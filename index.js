Vue.use(Vuetify);

const bossToChinese = {
  'Assaka': ['阿湿波', 'asb'],
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
  'Padrino': ['教父'],
  'Parvati': ['冰猪', '帕凡提'],
  'RPC': ['飞机', 'RPC - 6626'],
  'Shadow Knight ': ['月轮'],
  // Does this guy even exist?
  'Son of Darkness (Dirac only)': ['黑夜之子'],
};

const valkToChinese = {
  'Accipiter (VA)': '迅',
  'Black Nucleus (BN)': '黑',
  'Battlestorm (BS)': '疾',
  'Bladestrike (VB)': '强',
  'Blood Rose (BR)': '玫',
  'Celestial Hymn (CH)': '神',
  'Chariot (VC)': '战',
  'Crimson Impulse (CI)': '绯',
  'Dimension Break (DB)': '次',
  'Divine Prayer (DP)': '圣',
  'Flame Sakitama (FS)': '炎',
  'God Kiana (GK)': '律',
  'Imayoh (IR)': '今',
  'Knight Moonbeam (KMB)': '月',
  'Kreigmesser (KMS)': '极',
  'Lightning Empress (LE)': '鬼',
  'Liliya (Blueberry Blitz / BB)': '蓝',
  'Luna Kindred (LK)': '月', // 初 ?
  'Memento (Meme)': '勿',
  'Miko': '逆',
  'Night Squire (NS)': '白',
  'Phantom Iron (PI)': '狗',
  'Phoenix (PX)': '炽',
  'Pledge (VP)': '誓',
  'Ranger (VR)': '游',
  'Rondo': '樱',
  'Scarlet Fusion (SF)': '深',
  'Sin Hunter (Sundenjaegar / SJ)': '原罪',
  'Snowy Sniper (SS)': '雪',
  'Shadow Dash (SD)': '影',
  'Shadow Knight (SK)': '轮',
  'Sixth Serenade (6S)': '六',
  'Triumph (VT)': '凯',
  'Umbral Rose (UR)': '黯',
  'Vermillion Knight (VK)': '真',
  'Violet Executor (VE)': '紫',
  'White Comet (WC)': '白',
  'Wolf Dawn (WD)': '银',
  'Yamabuki Armor/Drive Kometa (YA)(DK)': '山',
};

const modifiersToChinese = {
  'F2P / No gacha Gear': '零蛋',
  '2 - 3 pieces of gacha gear': '低配',
  'No JST': '无叶',
  'No newton': '无牛',
  'Dirac': '狄拉克',
  'Red Lotus': '红莲',
  'Myriad': '无限',
};

const modifiers = Object
  .keys(modifiersToChinese)
  .map((m) => ({name: m, value: false}));

const pointsPerSecond = 53 + 1 / 3;
const scores = [];
for (let i = 1; i <= 35; i++) {
  scores.push(Math.floor(32000 - pointsPerSecond * i));
}

const app = new Vue({
  el: '#app',
  data: {
    selectedBoss: null,
    selectedValks: [],
    valkInput: null,
    score: null,
    bosses: Object.keys(bossToChinese),
    valks: Object.keys(valkToChinese),
    scores: scores,
    modifiers: modifiers,
  },
  computed: {
    biliLinks: function() {
      const baseUrl = 'https://search.bilibili.com/all?keyword=';
      let searchParams = '';
      for (const v of this.selectedValks) {
        searchParams += valkToChinese[v];
      }
      for (const m of this.modifiers) {
        if (m.value) {
          searchParams += modifiersToChinese[m.name];
        }
      }
      if (this.score) {
        searchParams += this.score;
      }
      if (this.selectedBoss) {
        const bossNames = bossToChinese[this.selectedBoss];
        return bossNames.map((name) => `${baseUrl}${name}${searchParams}`);
      } else {
        return [`${baseUrl}${searchParams}`];
      }
    },
  },
});
