<template>
  <v-container>
    <v-layout>
      <v-flex xs12 md10>
        <h1>Bilibili search generator</h1>
        <p>
          Some of the Chinese translations courtsey of
          <a href="https://youtu.be/0RR5VR99fvk">The Keebster</a>
          and their excellent
          <a
            href="https://docs.google.com/document/d/1PPZJ4s91tmEBh0Q6J26wbnFapCMioxShS0JhXPtZ4ec/edit"
          >
            Chinese Memorial Glossary
          </a>
          .
        </p>
        <p>
          <b>Psst!</b>
          Do you use
          <a href="http://www.3rdguide.com/web/teamnew/index">3rd guide</a>
          ? Want to open team comps in a new tab? Drag this (
          <!-- Minified with https://jscompress.com/ -->
          <a
            href="javascript:(function(){'use strict';$('#ct_det tbody').off().on('click','tr',function(){const a=$(this).find('.tgcol0').data('url');a!=null&&window.open(a,'_blank')});const a={记忆战场:'Memorial Arena','战区:':'Bracket',SSS难度:'SSS difficulty',终极战区:'Exalted',高级战区:'Masters','强敌:':'Bosses','女武神:':'Valkyries',阵容:'Line-up',得分:'Score',造价:'Cost',操作难度:'Difficulty',好评数:'Likes',创建时间:'Date',超弦空间:'Superstring',扰动幅度:'Disturbance','托纳提乌·噬日之影':'Tonatiuh','托纳提乌-噬日之影':'Tonatiuh',奔狼的领主:'Andrius',祸斗:'Huodou',吼姆王:'Homu King',绯狱丸:'Hellmaru',海姆达尔:'Heimdall',湮灭沉灵:'Doom',教父军团:'Padrino Legion',特里波卡:'Mexicatl',贝纳勒斯:'Benares','姬麟·黑':'DXY','MHT-3和平使者':'MHT-3 Pax','MHT-3 和平使者':'MHT-3 Pax','MHT-3B 天堂使者':'MHT-3B Nirvana',阿湿波:'Assaka',地藏御魂:'Jizo Mitama',赫菲斯托斯:'Hephaestus ',帕凡提:'Parvati',被诅咒的英魂:'Cursed Soul','科亚特尔-复生之影':'Couatl',八重霞:'Kasumi',陨冰之律者:'Rimestar','虚树神骸-虚无主义':'Nihilus Husk','支配之律者-乌合之众':'Herrscher of Dominance','段位:':'Rank',原罪:'Sinful',禁忌:'Forbidden',苦痛:'Agony',红莲:'Red lotus',寂灭:'Nirvana','天气:':'Weather',恐雷:'Lightning',怯火:'Fire',惧冰:'Ice',量子:'Quantum',畏血:'Physical',狙击:'Ranged',天敌:'Type counter',燃素:'Ignite',战意:'Bloodlust',虚数:'Imaginary',坚阵:'Fortified',雷劫:'Paralyze','区域:':'Stage',边缘区:'Fringe (first)',密集区:'Intensive (second)',高危区:'Perilous (boss)',特异区:'Singular (side)',吼姆魔术师:'Homu Magician','虚树神骸-虚无主义II':'Nihilus Husk (hit count)','神机-海姆达尔':'Heimdall','娑婆 阿湿波':'Saha Assaka',群怪:'Mobs','逐火十三英桀 爱莉希雅':'Flame Chaser Elysia',符华:'Fu Hua',识之律者:'Herrscher of Sentience',云墨丹心:'Azure Empyrea',雾都迅羽:'Hawk of the Fog',白夜执事:'Night Squire',炽翎:'Phoenix','影骑士·月轮':'Shadow Knight','女武神·迅羽':'Valkyrie Accipiter',明日香:'Asuka',八重樱:'Yae',夜隐重霞:'Darkbolt Jonin',真炎幸魂:'Flame Sakitama',逆神巫女:'Gyakushinn Miko','御神装·勿忘':'Goushinnso Memento','希儿·芙乐艾':'Seele',魇夜星渊:'Starchasm Nyx',彼岸双生:'Stygian Nymph',幻海梦蝶:'Swallowtail Phantasm',幽兰黛尔:'Durandal','女武神·荣光':'Valkyrie Gloria','辉骑士·月魄':'Bright Knight: Excelsis',不灭星锚:'Dea Anchora',德丽莎:'Theresa','暮光骑士·月煌':'Twilight Paladin',月下初拥:'Luna Kindred',神恩颂歌:'Celestial Hymn','处刑装·紫苑':'Violet Executer',樱火轮舞:'Sakura Rondo','女武神·誓约':'Valkyrie Pledge',朔夜观星:'Starlit Astrologos',琪亚娜:'Kiana',薪炎之律者:'Herrscher of Flamescion',天穹游侠:'Void Ranger',空之律者:'Herrscher of the Void',圣女祈祷:'Divine Prayer','女武神·游侠':'Valkyrie Ranger','白骑士·月光':'Knight Moonbeam','领域装·白练':'White Comet',布洛妮娅:'Bronya',迷城骇兔:'Haxxor Bunny',理之律者:'Herrscher of Reason',彗星驱动:'Drive Kometa',异度黑核侵蚀:'Black Nucleus',银狼的黎明:'Wolfs Dawn',次元边界突破:'Dimension Breaker','女武神·战车':'Valkyrie Chariot','驱动装·山吹':'Yamabuki Armor',雪地狙击:'Snowy Sniper',次生银翼:'Silverwing: N-EX',阿琳姐妹:'Twins',狂热蓝调Δ:'Fervent Tempo Delta',樱桃炸弹:'Molotov Cherry',蓝莓特攻:'Blueberry Blitz',芽衣:'Mei',断罪影舞:'Danzai Spectramancer',雷之律者:'Herrscher of Thunder',破晓强袭:'Striker Fulminata',雷电女王的鬼铠:'Lightning Empress','脉冲装·绯红':'Crimson Impulse','女武神·强袭':'Valkyrie Bladestrike',影舞冲击:'Shadow Dash',丽塔:'Rita',失落迷迭:'Fallen Rosemary','苍骑士·月魂':'Argent Knight: Artemis','猎袭装·影铁':'Phantom Iron',黯蔷薇:'Umbral Rose',姬子:'Himeko','真红骑士·月蚀':'Vermilion Knight: Eclipse',极地战刃:'Arctic Kriegsmesser','融核装·深红':'Scarlet Fusion',战场疾风:'Battle Storm','女武神·凯旋':'Valkyrie Triumph',血色玫瑰:'Blood Rose',卡莲:'Kallen',原罪猎人:'S\xFCndenj\xE4ger',第六夜想曲:'Sixth Serenade','圣仪装·今样':'Imayoh Ritual',菲谢尔:'Fischl','断罪皇女！！':'Prinzessin der Verurteilung',爱莉希雅:'Elysia','粉色妖精小姐♪':'Miss Pink Elf','娜塔莎·希奥拉':'Raven',午夜苦艾:'Midnight Absinthe',梅比乌斯:'Mobisus','无限·噬界之蛇':'Infinite Ouroboros','卡萝尔·佩珀':'Carole Pepper',甜辣女孩:'Sweet n Spicy'},b=function(a,b){b&&a[b.innerText]&&(b.innerHTML=b.innerHTML.replace(b.innerText,a[b.innerText]))},c=function(){const c=$('.filter-text > input').val();$('.filter-text > input').val('\u8D85\u5F26\u7A7A\u95F4'===c?'Abyss':'MA'),$('th, span, .table-search, .label, .title').each(function(){b(a,this)}),$('.table-team-box .table-search').height(600),$('.table-search .goodwar .content').height(500)};$('.table-search').on('click','.select-item',()=>setTimeout(c,200)),$('.el-select-dropdown__item').on('click',()=>setTimeout(c,200)),c()})();"
          >
            Fix 3rd guide
          </a>
          ) link to your bookmark bar and click it when you're on the site! The script also
          translates all the bosses and valks (turn off Chrome auto-translation first). Many thanks
          for zkwp of Lumina for the script. For the latest version or if you use TamperMonkey, find
          the script on
          <a href="https://github.com/zklm/userscripts/raw/master/3rdguide.user.js">Github</a>
          .
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
          <v-checkbox v-model="sssBoss" label="SSS Boss?"></v-checkbox>

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
          <li>2022/01/24 - Add no Turg and no Zhenyi modifiers, thanks Pootz</li>
          <li>2022/01/19 - Add Silverwing equips to gear calc, thanks Pootz</li>
          <li>2022/01/19 - Add Silverwing to search and 3rdguide bookmarklet</li>
          <li>2021/12/12 - Add toggle for SSS boss</li>
          <li>2021/12/10 - Update 3rdguide bookmark with more abyss translations</li>
          <li>2021/11/18 - Add Paganini stig to calc, thanks Pootz</li>
          <li>2021/11/18 - Add Carole to search and 3rdguide bookmark</li>
          <li>2021/10/24 - Add mobisus and raven gear to calc, thanks Pootz</li>
          <li>2021/10/20 - Update 3rdguide bookmark with abyss translations</li>
          <li>2021/10/19 - Add Herrscher of Dominance boss</li>
          <li>2021/10/19 - Add Mobisus, Raven to searcher, 3rdguide bookmarklet</li>
          <li>2021/09/23 - Add SSS scores to scores page and search sidebar</li>
          <li>2021/09/20 - Add Elysia stigs, bow, and Abyss Flower PRI to calc, thanks Pootz</li>
          <li>2021/09/04 - Add Elysia valk, thanks Aria</li>
          <!-- <li>2021/08/29 - Add Poe and Acheron to gear calc, thanks Pootz</li>
          <li>2021/08/21 - Add Elysian Realm modifier, thanks Bento and Eku</li>
          <li>2021/08/18 - Add HoFS weapon and stigs to gear calc, thanks Pootz</li>
          <li>2021/08/17 - Update fix 3rdguide script with new translations and UI fixes</li>
          <li>2021/08/16 - Add HoFS abbreviation, thanks Jun</li>
          <li>2021/08/07 - Fix HoS translation, thanks Jun</li>
          <li>2021/07/25 - Add HoFS and MHT-3B (new tank), updated fix 3rdguide script</li>
          <li>2021/06/09 - Add Andrius boss and Fischl valk, update fix 3rdguide script</li>
          <li>2021/05/13 - Add Kasumi boss and Starchasm Nyx valk, update fix 3rdguide script</li>
          <li>2021/04/24 - Add Haxxor Bunny valk, HoS boss, update fix 3rdguide script</li>
          <li>2021/02/16 - Add Blazing Hope valk, update fix 3rdguide script</li>
          <li>2021/02/15 - Add HoS, thanks Idol Party discord!</li>
          <li>2021/01/01 - Happy new year! Add Couatl boss, thanks Charlie</li>
          <li>2020/12/16 - Add DA (thanks Echidna), update 3rd guide script, nicknames for HoV</li>
          <li>2020/12/16 - Add Rimestar boss, adjust Seele suit names, thanks Echidona</li>
          <li>2020/11/07 - Add FTD to fix 3rd guide script</li>
          <li>2020/11/07 - Add alternate name for FTD</li>
          <li>2020/09/22 - Add Fervent Tempo Delta valk</li>
          <li>2020/09/16 - Add Nihilus Husk boss</li>
          <li>2020/09/15 - Add Nirvana to modifiers</li>
          <li>2020/09/12 - Add DS to 3rd guide bookmarklet</li>
          <li>2020/09/04 - Add DS valk</li>
          <li>2020/08/30 - Add exalted abyss modifier</li>
          <li>2020/08/30 - Update Fix 3rd guide bookmarklet with Huodou and FR, add FR to valks</li>
          <li>2020/08/24 - Add Huodou boss</li>
          <li>2020/08/19 - Add SS lead skill as modifier, thanks Toast</li>
          <li>2020/08/19 - Add SS LE as modifier</li>
          <li>2020/08/19 - Add no Shuijing search modifier, thanks Younggeddes</li>
          <li>2020/08/06 - Add Masters MA to options</li>
          <li>2020/08/04 - Add new nickname for DJ, thanks Toast</li>
          <li>2020/07/28 - Update Fix 3rd guide bookmarklet with SA and HoT</li>
          <li>2020/06/08 - Add BKE, made some URL generation improvements.</li>
          <li>2020/06/02 - Add Starlit Astrologos (Zhuge) to valks</li>
          <li>2020/05/25 - Update fix 3rd guide bookmarklet</li>
          <li>2020/05/01 - Add death web + gigant abyss boss</li>
          <li>2020/05/02 - Add soul link abyss boss</li>
          <li>2020/04/24 - Add real name of S Durandal</li>
          <li>2020/04/20 - Add projected boss schedule</li>
          <li>2020/04/06 - Another nickname for Hephaestus</li>
          <li>2020/04/04 - Added double wendy abyss boss</li>
          <li>2020/04/01 - Added emperor abyss boss</li>
          <li>2020/03/31 - Added "S Durandal"</li>
          <li>2020/03/14 - Update fix 3rd guide bookmarklet and add VG</li>
          <li>2020/03/07 - Delet 3.6 boss pool</li>
          <li>2020/03/04 - Upgraded Fix 3rd guide bookmarklet</li>
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
          <li>2019/08/10 - Added Void Drifter valk, Q-Singularis modifier</li> -->
        </ul>
      </v-flex>

      <v-flex hidden-sm-and-down offset-xs1 md-flex md2>
        <BossLineupList></BossLineupList>

        <h2 class="mt-6">Projected boss lineups</h2>
        <p>
          Our boss schedule seems to match CN's, offset by patch schedule. For example, week 1 of
          patch 3.8, CN had AKA, Hephaestus, Hellmaru. SEA/NA then had the same bosses on week 1 of
          patch 3.8.
        </p>

        <p class="mb-1" v-for="lineup in lineups" v-bind:key="lineup.id">
          {{ lineup.date | dateFormat("M/DD") }} -
          <template v-if="lineup.bosses">{{ lineup.bosses | lineupFormat }}</template>
          <template v-if="lineup.event">{{ lineup.event }}</template>
        </p>

        <h2 class="mt-6">Scores by time</h2>
        <ul>
          <li>time = base / uprate / SSS</li>
          <li v-for="s in scoresByTime" v-bind:key="s.score">
            {{ s.elapsedSec | countdownSeconds }} = {{ s.score }} / {{ s.up }} / {{ s.sssScore }}
          </li>
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

<script lang="ts">
import Vue from "vue";
import { generateScores, countdownSecondsFilter } from "@/util/score_util";
import { RECENT_LINEUPS } from "@/data/boss_lineups";
import { Boss } from "@/models/boss";
import BossLineupList from "@/components/BossLineupList.vue";

const bossToChinese = {
  "Andrius (wolf)": ["奔狼的领主", "奔狼", "北风狼"],
  Assaka: ["阿湿波", "asb"],
  "Argent Knight: Artemis (AKA)": ["月魂"],
  Benares: ["贝纳勒斯", "贝贝龙", "龙"],
  "Bright Knight - Excelsis (BKE)": ["月魄", "幽兰戴尔"],
  "Couatl: Revenant": ["量子帝王"],
  "Cursed Soul": ["姬子", "被诅咒的英魂"],
  "Dark Jixuanyuan (DXY, DJXY)": ["皮皮马", "马"], // "姬麟·黑"],
  "Death Web + Gigant (Abyss only)": ["蜘蛛泰坦"],
  Doom: ["沉灵", "湮灭沉灵"],
  "Double Wendy (all the way) (Abyss only)": ["双温蒂"],
  "Emperor (Abyss only)": ["帝王"],
  "Herrscher of the Void (God Kiana, GK, HoV)": ["空之律者", "女王"],
  Heimdall: ["海姆达尔", "海胖"],
  Hellmaru: ["狐狸", "绯狱丸"],
  "Herrscher of Dominance (HoD)": ["支配之律者-乌合之众"],
  "Herrscher of Sentience (HoS)": ["识之律者"],
  "HOMU King": ["吼姆"],
  Huodou: ["祸斗"],
  "Jizo Mitama": ["地藏", "地藏御魂"],
  Kallen: ["卡莲"],
  Kasumi: ["八重霞"],
  "Mexicatl: Umbreist (quantum ball)": ["球", "量子军团"],
  "MHT-3 Pax (tank)": ["和平使者", "MHT", "坦克"],
  "MHT-3B (new tank)": ["MHT-3B", "天堂使者"],
  "MR-06X Hephaestus": ["赫菲斯托斯", "灭火器"],
  "Nihilus Husk (clock)": ["虚树神骸"],
  Padrino: ["教父"],
  Parvati: ["冰猪", "帕凡提"],
  Rimestar: ["冰律", "陨冰之律者"],
  RPC: ["飞机", "RPC - 6626"],
  "Shadow Knight (SK)": ["月轮"],
  "Son of Darkness (Abyss only)": ["黑夜之子"],
  "Titan + Hierophant (soul link mobs) (Abyss only)": ["关底", "双灵魂链接", "红莲泰坦"],
  "Tonatiuh (lobster)": ["托纳提乌", "龙虾"],
  "Wendy + Ganesha (Abyss only)": ["猪温"],
};

const valkToChinese = {
  "Accipiter (VA)": ["迅"],
  "Arctic Kreigmesser (KMS)": ["极"],
  "Argent Knight: Artemis (AKA)": ["月魂"],
  "Azure Empyrea (AE)": ["云", "墨", "云墨丹心"],
  "Black Nucleus (BN)": ["黑"],
  "Battlestorm (BS)": ["疾"],
  "Bladestrike (VB)": ["强"],
  "Blazing Hope (BH, Asuka)": ["明日香"],
  "Blood Rose (BR)": ["玫"],
  "Bright Knight: Excelsis (BKE)": ["月魄", "辉骑士月"],
  "Carole Pepper": ["卡萝尔", "甜辣女孩"],
  "Celestial Hymn (CH)": ["神"],
  "Chariot (VC)": ["战"],
  "Crimson Impulse (CI)": ["绯"],
  "Danzai Spectramancer (DS)": ["影", "断罪影舞"],
  "Herrscher of Reason (HoR, Tronya)": ["理", "律鸭"],
  "Darkbolt Jonin (DJ)": ["夜隐重霞", "雷八"],
  "Dea Anchora (DA)": ["不灭星锚", "星", "锚"],
  "Dimension Break (DB)": ["次"],
  "Divine Prayer (DP)": ["圣"],
  "Elysia (Miss Pink Elf)": ["爱莉希雅", "爱莉", "爱"],
  "Fallen Rosemary (FR)": ["迷", "失落迷迭"],
  "Fervent Tempo Delta (FTD)": ["狂热蓝调", "粉"],
  Fischl: ["小艾咪", "皇女"],
  "Flame Sakitama (FS)": ["炎"],
  "Hawk of the Fog (HF)": ["迅", "迅雷", "雾都迅羽"],
  "Haxxor Bunny (HB)": ["骇兔", "迷城骇兔"],
  "Herrscher of Flamescion (HoFS, KFC)": ["薪", "炎", "萤火虫", "薪炎之律者"],
  "Herrscher of the Void (God Kiana, GK, HoV)": ["律"],
  "Herrscher of Sentience (HoS)": ["识之律者", "识律", "识"],
  "Herrscher of Thunder (HoT, HT)": ["雷之律者", "雷律", "雷"],
  "Imayoh (IR)": ["今"],
  "Infinite Ouroboros (Mobius)": ["无限·噬界之蛇", "噬界", "蛇主"],
  "Knight Moonbeam (KMB)": ["月"],
  "Lightning Empress (LE)": ["鬼"],
  "Liliya (Blueberry Blitz / BB)": ["蓝"],
  "Luna Kindred (LK)": ["月", "初"],
  "Memento (Meme)": ["勿"],
  "Midnight Absinthe (Raven)": ["午夜苦艾", "渡鸦"],
  Miko: ["逆"],
  "Molotov Cherry (Roza, MC)": ["粉", "孤儿队"],
  "Night Squire (NS)": ["白"],
  "Palatinus Equinox (PE, Juan)":["天元骑英", "天元"],
  "Phantom Iron (PI)": ["狗"],
  "Phoenix (PX)": ["炽"],
  "Pledge (VP)": ["誓"],
  "Ranger (VR)": ["游"],
  "Rondo (SR)": ["樱"],
  "Scarlet Fusion (SF)": ["深"],
  "Sin Hunter (Sundenjaegar / SJ)": ["原罪"],
  "Snowy Sniper (SS)": ["雪"],
  "Shadow Dash (SD)": ["影"],
  "Shadow Knight (SK)": ["轮"],
  "Silverwing: N-EX": ["翼", "大鸭鸭", "次生银翼"],
  "Sixth Serenade (6S)": ["六"],
  "Starchasm Nyx": ["魇夜星渊", "冰希"],
  "Starlit Astrologos (SA, Zhuge)": ["朔夜观星", "观"],
  "Stygian Nymph (SN)": ["黑希", "希"], // 彼岸双生
  "Swallowtail Phantasm (SP)": ["幻海梦蝶", "A希"],
  "Triumph (VT)": ["凯"],
  "Umbral Rose (UR)": ["黯"],
  "Valkyrie Gloria (VG)": ["荣光", "女武神·荣光"],
  "Vermillion Knight (VK)": ["真"],
  "Void Drifter (VD)": ["游"], // 苍穹游侠
  "Violet Executor/Twilight Paladin (VE/TP)": ["紫"],
  "White Comet (WC)": ["白"],
  "Wolf Dawn (WD)": ["银"],
  "Yamabuki Armor/Drive Kometa (YA)(DK)": ["山"],
};

const modifiersToChinese = {
  "F2P / No gacha Gear": ["零蛋"],
  "2 - 3 pieces of gacha gear": ["低配"],
  "No JST": ["无叶"],
  "No Newton": ["无牛"],
  "No Shuijing": ["无水"],
  "No Zhenyi": ["无贞仪"],
  "No Turgenev": ["无屠"],
  "SS LE": ["SS鬼", "2S鬼"],
  "SS lead skill": ["SS队长技", "2S队长技"],
  "Exalted MA": ["终极区"],
  "Masters MA": ["高级区"],
  Dirac: ["迪拉克", "狄拉克"],
  "Q-Singularis": ["量子奇点"],
  "Exalted Abyss": ["超弦空间"],
  "Red Lotus": ["红莲"],
  Myriad: ["无限"],
  Nirvana: ["寂灭"],
  "Sim battle": ["模拟作战室"],
  "Elysian Realm": ["往世乐土", "往事乐土"],
  "Honkai Impact 3": ["崩坏3"],
};

const modifiers = Object.keys(modifiersToChinese).map((m) => ({
  name: m,
  value: false,
}));

const scoresByTime = generateScores(45);

function isMobile(): boolean {
  return window.navigator.userAgent.toLowerCase().includes("mobi");
}

function* combine(arrOfArr: string[][]) {
  const [head, ...tail] = arrOfArr;
  const remainder = tail.length ? combine(tail) : [[]];
  for (const r of remainder) for (const h of head) yield [h, ...r];
}

export default Vue.extend({
  data: function () {
    return {
      selectedBoss: null,
      sssBoss: false,
      selectedValks: [],
      valkInput: null,
      score: null,
      bosses: Object.keys(bossToChinese),
      valks: Object.keys(valkToChinese),
      scores: scoresByTime.map((s) => s.score),
      scoresByTime: scoresByTime,
      modifiers: modifiers,
      lineups: RECENT_LINEUPS,
    };
  },
  components: { BossLineupList },
  computed: {
    bossNames: function () {
      if (this.selectedBoss === null) {
        return [""];
      }

      if (this.sssBoss) {
        return bossToChinese[this.selectedBoss].map((bossName) => "SSS" + bossName);
      } else {
        return bossToChinese[this.selectedBoss];
      }
    },
    // Some valks have multiple names, make all combos of valk team.
    valkCombos: function () {
      let combos = [""];
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
    biliLinks: function () {
      const baseUrl = isMobile()
        ? "https://m.bilibili.com/search?keyword="
        : "https://search.bilibili.com/all?keyword=";

      // Static modifiers that go at the end.
      let modifierParams = this.modifiers
        .filter((m) => m.value)
        .map((m) => modifiersToChinese[m.name]);
      if (this.score) {
        modifierParams.push([this.score]);
      }
      // Must have at least one element in each array passed to combine to generate anything.
      modifierParams = modifierParams.length ? modifierParams : [[""]];
      const modifierCombos = Array.from(combine(modifierParams)).map((c: string[]) =>
        c.join(" ").trim()
      );

      const combinations = Array.from(combine([this.bossNames, this.valkCombos, modifierCombos]));

      // Sort by length and then alphabetical.
      return combinations
        .map((c: string[]) => `${baseUrl}${c.join(" ").trim()}`)
        .sort(function (a, b) {
          return a.length - b.length || a.localeCompare(b);
        });
    },
  },
  filters: {
    countdownSeconds: countdownSecondsFilter,
    lineupFormat: function (bosses: Boss[]) {
      return bosses.map((boss, index) => boss.shortName + (index == 0 ? " (up)" : "")).join(", ");
    },
  },
});
</script>
