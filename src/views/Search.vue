<template>
  <v-container grid-list-md text-xs-start>
    <v-layout>
      <v-flex xs12 md10>
        <h1>Bilibili search generator</h1>
        <p>
          Chinese translations courtsey of
          <a href="https://youtu.be/0RR5VR99fvk">The Keebster</a>
          and their excellent
          <a
            href="https://docs.google.com/document/d/1PPZJ4s91tmEBh0Q6J26wbnFapCMioxShS0JhXPtZ4ec/edit"
          >Chinese Memorial Glossary</a>.
        </p>
        <p>
          <b>Psst!</b> Do you use
          <a href="http://www.3rdguide.com/web/teamnew/index">3rd guide</a>? Want to open team comps in a new tab?
          Drag this
          <a
            href="javascript:(function(){ $('#ct_det tbody').off().on('click', 'tr', function() {var urlstr = $(this).find('.tgcol0').data('url');if (urlstr != undefined) {window.open(urlstr, '_blank');}})})();"
          >Fix 3rd guide</a>
          link to your bookmark bar and click it when you're on the site!
        </p>

        <v-layout align-center>
          <img class="valk-gif mr-2" :src="require('@/assets/aij2.gif')" />
          <span>Ai-chan says, "Only fill out as much as you need!"</span>
        </v-layout>

        <v-form>
          <h3 class="section-head">Boss</h3>
          <v-autocomplete
            v-model="selectedBoss"
            hint="Start typing to autocomplete."
            autofocus
            auto-select-first
            clearable
            persistent-hint
            :items="bosses"
          ></v-autocomplete>

          <h3 class="section-head">Valkyries</h3>
          <p>Order matters! Choose the lead valk first.</p>
          <v-autocomplete
            v-model="selectedValks"
            hint="Start typing to autocomplete."
            multiple
            auto-select-first
            clearable
            persistent-hint
            @change="valkInput = ''"
            :search-input.sync="valkInput"
            :items="valks"
          ></v-autocomplete>

          <h3 class="section-head">Modifiers</h3>
          <v-layout wrap>
            <v-flex grow xs4 md3 v-for="modifier in modifiers" v-bind:key="modifier.name">
              <v-checkbox v-model="modifier.value" :label="`${modifier.name}`"></v-checkbox>
            </v-flex>
          </v-layout>

          <h3 class="section-head">Score</h3>
          <v-combobox
            v-model="score"
            hint="All input accepted, or choose from the list."
            auto-select-first
            clearable
            persistent-hint
            :items="scores"
          ></v-combobox>
        </v-form>

        <h2 class="section-head">Generated links</h2>
        <v-layout align-center>
          <img class="valk-gif mr-2" :src="require('@/assets/brn.gif')" />
          <span>Bronya works hard to instantly generate links as you type.</span>
        </v-layout>

        <p>Some bosses/valks go by multiple names, so try all links!</p>
        <p v-for="link in biliLinks" v-bind:key="link">
          <a target="_blank" class="bili-link" :href="`${link}`">{{ link }}</a>
        </p>

        <h2 class="section-head">Changelog</h2>
        <ul>
          <li>2020/02/01 - Add Azure Empyrea</li>
          <li>2020/01/07 - Increase granularity of scores by time</li>
          <li>2020/01/06 - Added HF</li>
          <li>2019/12/15 - Actually we following CN bosses</li>
          <li>2019/12/01 - Added 3.6 boss pool to sidebar</li>
          <li>2019/10/22 - Added quantum ball name</li>
          <li>2019/10/22 - Added quantum ball and both Seeles</li>
          <li>2019/10/17 - Change scores by time to every 5 seconds due to EX MA...</li>
          <li>2019/10/12 - Make TP also autocomplete to VE</li>
          <li>2019/10/10 - Added Fix 3rd guide bookmarklet!</li>
          <li>2019/10/05 - Added AKA to valk list</li>
          <li>2019/09/21 - Added scores by time sidebar</li>
          <li>2019/09/03 - Added Roza</li>
          <li>2019/09/02 - Added EX MA</li>
          <li>2019/09/02 - Added MR-06X Hephaestus</li>
          <li>2019/08/19 - Added MHT-3 Pax</li>
          <li>2019/08/11 - Added AKA boss</li>
          <li>2019/08/10 - Added Void Drifter valk, Q-Singularis modifier</li>
        </ul>
      </v-flex>

      <v-flex hidden-sm-and-down offset-xs1 md-flex md2>
        <h2 class="section-head">
          <a :href="require('@/assets/boss_pool_37.png')">Current boss pool (same as CN 3.7)</a>
        </h2>
        <h2 class="section-head">Scores by time</h2>
        <ul>
          <li
            v-for="s in scoresByTime"
            v-bind:key="s.score"
          >{{ s.score }} ({{ s.up }}) = {{ s.time }}</li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss">
.section-head {
  margin-top: 1.8em;
}

.v-autocomplete {
  padding-top: 0px;
}

.bili-link {
  font-size: 1.5em;
}

.valk-gif {
  height: 80px;
}
</style>

<script>
import * as moment from "moment/moment";
import "moment-duration-format";

const bossToChinese = {
  Assaka: ["阿湿波", "asb"],
  "Argent Knight: Artemis (AKA)": ["月魂"],
  Benares: ["贝纳勒斯", "龙"],
  "Cursed Soul": ["姬子", "被诅咒的英魂"],
  "Dark Jixuanyuan (DXY, DJXY)": ["皮皮马", "马", "姬麟·黑"],
  Doom: ["沉灵", "湮灭沉灵"],
  "Herrscher of the Void (HoV)": ["空之律者", "女王"],
  Heimdall: ["海姆达尔", "海胖"],
  Hellmaru: ["狐狸", "绯狱丸"],
  "HOMU King": ["吼姆"],
  "Jizo Mitama": ["地藏", "地藏御魂"],
  Kallen: ["卡莲"],
  "Mexicatl: Umbreist (quantum ball)": ["球", "量子军团"],
  "MHT-3 Pax (tank)": ["和平使者", "MHT", "坦克"],
  "MR-06X Hephaestus": ["赫菲斯托斯"],
  Padrino: ["教父"],
  Parvati: ["冰猪", "帕凡提"],
  RPC: ["飞机", "RPC - 6626"],
  "Shadow Knight (SK)": ["月轮"],
  "Son of Darkness (Dirac only)": ["黑夜之子"]
};

const valkToChinese = {
  "Accipiter (VA)": ["迅"],
  "Arctic Kreigmesser (KMS)": ["极"],
  "Argent Knight: Artemis (AKA)": ["月魂"],
  "Azure Empyrea": ["云墨丹心"],
  "Black Nucleus (BN)": ["黑"],
  "Battlestorm (BS)": ["疾"],
  "Bladestrike (VB)": ["强"],
  "Blood Rose (BR)": ["玫"],
  "Celestial Hymn (CH)": ["神"],
  "Chariot (VC)": ["战"],
  "Crimson Impulse (CI)": ["绯"],
  "Herrscher of Reason (HoR, Tronya)": ["理", "律鸭"],
  "Dimension Break (DB)": ["次"],
  "Divine Prayer (DP)": ["圣"],
  "Flame Sakitama (FS)": ["炎"],
  "Hawk of the Fog (HF)": ["雾都迅羽", "迅雷", "迅"],
  "Herrscher of the Void (God Kiana, GK, HoV)": ["律"],
  "Imayoh (IR)": ["今"],
  "Knight Moonbeam (KMB)": ["月"],
  "Lightning Empress (LE)": ["鬼"],
  "Liliya (Blueberry Blitz / BB)": ["蓝"],
  "Luna Kindred (LK)": ["月", "[初"],
  "Memento (Meme)": ["勿"],
  Miko: ["逆"],
  "Molotov Cherry (Roza, MC)": ["粉", "孤儿队"],
  "Night Squire (NS)": ["白"],
  "Phantom Iron (PI)": ["狗"],
  "Phoenix (PX)": ["炽"],
  "Pledge (VP)": ["誓"],
  "Ranger (VR)": ["游"],
  Rondo: ["樱"],
  "Scarlet Fusion (SF)": ["深"],
  "Sin Hunter (Sundenjaegar / SJ)": ["原罪"],
  "Snowy Sniper (SS)": ["雪"],
  "Shadow Dash (SD)": ["影"],
  "Shadow Knight (SK)": ["轮"],
  "Sixth Serenade (6S)": ["六"],
  "Stygian Nympn (SN)": ["黑希", "彼岸双生"],
  "Swallowtail Phantasm (SP)": ["幻海梦蝶"],
  "Triumph (VT)": ["凯"],
  "Umbral Rose (UR)": ["黯"],
  "Vermillion Knight (VK)": ["真"],
  "Void Drifter (VD)": ["游"], // 苍穹游侠
  "Violet Executor/Twilight Paladin (VE/TP)": ["紫"],
  "White Comet (WC)": ["白"],
  "Wolf Dawn (WD)": ["银"],
  "Yamabuki Armor/Drive Kometa (YA)(DK)": ["山"]
};

const modifiersToChinese = {
  "F2P / No gacha Gear": "零蛋",
  "2 - 3 pieces of gacha gear": "低配",
  "No JST": "无叶",
  "No newton": "无牛",
  "EX MA": "终极区",
  Dirac: "狄拉克",
  "Q-Singularis": "量子奇点",
  "Red Lotus": "红莲",
  Myriad: "无限"
};

const modifiers = Object.keys(modifiersToChinese).map(m => ({
  name: m,
  value: false
}));

const pointsPerSecond = 53 + 1 / 3;
// Use list of objects instead of dictionary to ensure greatest to least ordering with v-for.
const scoresByTime = [];
const five = moment.duration(5, "m");
for (let i = 0; i <= 45; i += 1) {
  const rawScore = 32000 - pointsPerSecond * (i + 1);
  const score = Math.floor(rawScore);
  const up = Math.round(rawScore * 1.2);
  const time = five.clone().subtract(i, "s");
  scoresByTime.push({
    score: score,
    up: up,
    time: time.format("m:ss")
  });
}

export default {
  data: function() {
    return {
      selectedBoss: null,
      selectedValks: [],
      valkInput: null,
      score: null,
      bosses: Object.keys(bossToChinese),
      valks: Object.keys(valkToChinese),
      scores: scoresByTime.map(s => s.score),
      scoresByTime: scoresByTime,
      modifiers: modifiers
    };
  },
  computed: {
    bossNames: function() {
      return this.selectedBoss ? bossToChinese[this.selectedBoss] : [""];
    },
    // Some valks have multiple names, make all combos of valk team.
    valkCombos: function() {
      let combos = [""];
      this.selectedValks
        .map(v => valkToChinese[v])
        .forEach(names => {
          combos = combos.reduce((acc, curr) => {
            names.forEach(n => acc.push(curr + n));
            return acc;
          }, []);
        });
      return combos;
    },
    biliLinks: function() {
      const baseUrl = "https://search.bilibili.com/all?keyword=";

      // Build combos of boss name + valk team.
      let baseParams = [];
      this.bossNames.forEach(name => {
        this.valkCombos.forEach(combo => {
          const combined = name + combo;
          if (combined) {
            baseParams.push(combined);
          }
        });
      });
      if (!baseParams.length) {
        baseParams.push("");
      }

      // Static modifiers that go at the end.
      let modifierParams = "";
      for (const m of this.modifiers) {
        if (m.value) {
          modifierParams += modifiersToChinese[m.name];
        }
      }
      if (this.score) {
        modifierParams += this.score;
      }

      return baseParams.map(base => `${baseUrl}${base}${modifierParams}`);
    }
  }
};
</script>