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
          <!-- This is a minified version of the 3rdguide.user.js file with https://jscompress.com/  -->
          <!-- Remove the trailing ; from the minified js, then paste the entire minified js inside parenthesis of: javascript:() -->
          <a
            href='javascript:(!function(){"use strict";function e(){var e=$(".filter-text > input").val();$(".filter-text > input").val("超弦空间"===e?"Abyss":"MA"),$("th, span, .table-search, .label, .title").each(function(){var e,a;e=i,(a=this)&&e[a.innerText]&&(a.innerHTML=a.innerHTML.replace(a.innerText,e[a.innerText]))}),$(".table-team-box .table-search").height(600),$(".table-search .goodwar .content").height(500)}$("#ct_det tbody").off().on("click","tr",function(){var e=$(this).find(".tgcol0").data("url");null!=e&&window.open(e,"_blank")});var i={"记忆战场":"Memorial Arena","战区:":"Bracket","SSS难度":"SSS Difficulty","终极战区":"Exalted","高级战区":"Masters","强敌:":"Bosses","女武神:":"Valkyries","阵容":"Line-up","得分":"Score","造价":"Cost","操作难度":"Difficulty","好评数":"Likes","创建时间":"Date","超弦空间":"Superstring","扰动幅度":"Disturbance","托纳提乌·噬日之影":"Tonatiuh","托纳提乌-噬日之影":"Tonatiuh","奔狼的领主":"Andrius","祸斗":"Huodou","吼姆王":"Homu Emperor","绯狱丸":"Hellmaru","海姆达尔":"Heimdall","湮灭沉灵":"Doom","教父军团":"Padrino Legion","特里波卡":"Mexicatl","贝纳勒斯":"Benares","姬麟·黑":"DJXY","MHT-3和平使者":"MHT-3 Pax","MHT-3 和平使者":"MHT-3 Pax","MHT-3B 天堂使者":"MHT-3B Nirvana","阿湿波":"Assaka","地藏御魂":"Jizo Mitama","赫菲斯托斯":"Hephaestus ","帕凡提":"Parvati","被诅咒的英魂":"Cursed Soul","科亚特尔-复生之影":"Couatl","深渊终极区":"Couatl","八重霞":"Kasumi","陨冰之律者":"Rimestar","虚树神骸-虚无主义":"Husk Nihilius","支配之律者-乌合之众":"Herrscher of Domination","伪神·奥托":"False God Otto","伪神奥托":"False God Otto","逐火十三英桀·科斯魔":"Flame-Chaser Kosma","虚树神骸-神秘主义":"Husk Mysticism","虚数神骸·神秘主义":"Husk Mysticism","虚树神骸-存在主义":"Husk Existentialism","毕舍遮":"Pishacha","逐火十三英桀 阿波尼亚":"Flame-Chaser Aponia","塔之钳梏":"Wardens of Tower","殉死之兽":"Beast of Sacrifice","薇塔-「海的深渊」":"Vita - Sea&#39;s Depths","愿之芽-全知的羽翼":"Sprout of Wishing","瓦拉哈":"Valrahal","陨星-奈埃尔":"Epernay","逐火十三英桀 梅比乌斯":"Flame-Chaser Mobius","陨星-瓜伊马斯":"Guaymas","异星肃卫-补阙":"Alien Guard","「戒世遗光」":"Bygone Deliverance","娑-「轮转无我」":"Sa: Wheel of Transcendence","段位:":"Rank","原罪":"Sinful","禁忌":"Forbidden","苦痛":"Agony","红莲":"Redlotus","寂灭":"Nirvana","天气:":"Weather","恐雷":"Lightning","怯火":"Fire","惧冰":"Ice","量子":"Quantum","畏血":"Physical","狙击":"Ranged","天敌":"Counter","燃素":"Ignite","战意":"Bloodlust","虚数":"Imaginary","坚阵":"Fortified","雷劫":"Paralyze","白刃":"Melee","血棘":"Bleed","冰结":"Freeze","协奏":"Concerto","统御":"Summons","星尘":"Stardust","失衡":"Stun","闪耀":"Stellar","黯灭":"Starless","星冕":"Stellar Crown","共鸣":"Resonance","幻灭":"Shadow Star","易位":"Ascension","区域:":"Stage","边缘区":"Fringe (first)","密集区":"Intensive (second)","高危区":"Perilous (boss)","特异区":"Singular (side)","吼姆魔术师":"Homu Magician","虚树神骸-虚无主义II":"Husk Nihilius (hit count)","神机-海姆达尔":"Heimdall","娑婆 阿湿波":"Saha Assaka","婆娑阿湿波":"Saha Assaka","群怪":"Mobs","逐火十三英桀 爱莉希雅":"Flame-Chaser Elysia","侵蚀之律者":"Herrscher of Corruption","逐火十三英桀 科斯魔":"Flame-Chaser Kosma","黑之赐死、白之悬剑":"Wardens of Tower","渡鸦":"Raven","蔽光之影":"Opaque Shadow","奥托·阿波卡利斯":"Otto Apocalypse","逐火十三英桀·千劫":"Flame-Chaser Kalpas","贝纳勒斯·冰形态":"Benares Ice","冰之律者":"Herrscher of Ice","群聚敌人":"Swarm","机械":"MECH","生物":"BIO","能":"PSY","生物、异能":"BIO, PSY","迦尼萨":"Ganesha","逐火十三英桀·维尔薇":"Flame-Chaser Vill-V","异种·巡行级崩坏兽":"PSY: Patroller","异能":"Elite","督军级崩坏兽":"Honkai Emperor","昆巴卡纳":"Kumbhakarna","熔炎帝王":"Flame Emperor","量产型教父":"Eldjotunar","旋肢之影":"Spinning Shadow","特里波卡-混沌之影":"Photophobic Shadow","机械、异能":"MECH, PSY","机械、生物":"MECH, BIO","异能、机械":"PSY, MECH","和平使者":"Nirvana","异能、生物":"PSY, BIO","生物、异能、机械":"BIO, PSY, MECH","生物、机械":"BIO, MECH","虚数、异能":"IMG, PSY","雷神级崩坏兽":"Storm Templar","死亡编织者":"Death Web","煌夜骑士":"Nocturnal Knight","巡航审判团":"Cruising Tribunal","「业魔」凯文":"Diabolic Kevin","飞鱼：游弋集群":"Flying Fish: Patrol Force","陨星-奈挨尔":"Epernay","MHT-3C 惩戒使者":"MHT-3C Retaliator","寒冰帝王":"Frost Emperor","符华":"Fu Hua","识之律者":"Herrscher of Sentience","云墨丹心":"Azure Empyrea","雾都迅羽":"Hawk of the Fog","白夜执事":"Night Squire","炽翎":"Phoenix","影骑士·月轮":"Shadow Knight","女武神·迅羽":"Valkyrie Accipiter","浮生·渡尘之羽":"Fenghuang of Vicissitude","明日香":"Asuka","八重樱":"Yae Sakura","夜隐重霞":"Darkbolt Jonin","真炎幸魂":"Flame Sakitama","逆神巫女":"Gyakushinn Miko","御神装·勿忘":"Goushinnso Memento","希儿·芙乐艾":"Seele","魇夜星渊":"Starchasm Nyx","彼岸双生":"Stygian Nymph","幻海梦蝶":"Swallowtail Phantasm","死生之律者":"Herrscher of Rebirth","幽兰黛尔":"Durandal","女武神·荣光":"Valkyrie Gloria","辉骑士·月魄":"Bright Knight: Excelsis","不灭星锚":"Dea Anchora","天元骑英":"Palatinus Equinox","德丽莎":"Theresa","暮光骑士·月煌":"Twilight Paladin","月下初拥":"Luna Kindred","神恩颂歌":"Celestial Hymn","处刑装·紫苑":"Violet Executer","樱火轮舞":"Sakura Rondo","女武神·誓约":"Valkyrie Pledge","朔夜观星":"Starlit Astrologos","月下誓约·予爱以心":"Lunar Vow: Crimson Love","琪亚娜":"Kiana","薪炎之律者":"Herrscher of Flamescion","天穹游侠":"Void Ranger","空之律者":"Herrscher of the Void","圣女祈祷":"Divine Prayer","女武神·游侠":"Valkyrie Ranger","白骑士·月光":"Knight Moonbeam","领域装·白练":"White Comet","终焉之律者":"Herrscher of Finality","布洛妮娅":"Bronya","迷城骇兔":"Haxxor Bunny","理之律者":"Herrscher of Reason","彗星驱动":"Drive Kometa","异度黑核侵蚀":"Black Nucleus","银狼的黎明":"Wolfs Dawn","次元边界突破":"Dimension Breaker","女武神·战车":"Valkyrie Chariot","驱动装·山吹":"Yamabuki Armor","雪地狙击":"Snowy Sniper","次生银翼":"Silverwing: N-EX","真理之律者":"Herrscher of Truth","阿琳姐妹":"Olenyevas","狂热蓝调Δ":"Fervent Tempo Delta","樱桃炸弹":"Molotov Cherry","蓝莓特攻":"Blueberry Blitz","芽衣":"Mei","断罪影舞":"Danzai Spectramancer","雷之律者":"Herrscher of Thunder","破晓强袭":"Striker Fulminata","雷电女王的鬼铠":"Lightning Empress","脉冲装·绯红":"Crimson Impulse","女武神·强袭":"Valkyrie Bladestrike","影舞冲击":"Shadow Dash","始源之律者":"Herrscher of Origin","丽塔":"Rita","失落迷迭":"Fallen Rosemary","苍骑士·月魂":"Argent Knight: Artemis","猎袭装·影铁":"Phantom Iron","黯蔷薇":"Umbral Rose","缭乱星棘":"Spina Astera","姬子":"Himeko","真红骑士·月蚀":"Vermilion Knight: Eclipse","极地战刃":"Arctic Kriegsmesser","融核装·深红":"Scarlet Fusion","战场疾风":"Battle Storm","女武神·凯旋":"Valkyrie Triumph","血色玫瑰":"Blood Rose","卡莲":"Kallen","原罪猎人":"Sundenjager","第六夜想曲":"Sixth Serenade","圣仪装·今样":"Imayoh Ritual","菲谢尔":"Fischl","断罪皇女！！":"Prinzessin der Verurteilung!","爱莉希雅":"Elysia","粉色妖精小姐♪":"Miss Pink Elf","真我·人之律者":"Herrscher of Human: Ego","娜塔莎·希奥拉":"Raven","午夜苦艾":"Midnight Absinthe","梅比乌斯":"Mobius","无限·噬界之蛇":"Infinite Ouroboros","卡萝尔·佩珀":"Carole Pepper","甜辣女孩":"Sweet n Spicy","帕朵菲莉丝":"Pardofelis","空梦·掠集之兽":"Reverist Calico","阿波尼亚":"Aponia","戒律·深罪之槛":"Disciplinary Perdition","伊甸":"Eden","黄金·璀耀之歌":"Golden Diva","格蕾修":"Griseo","繁星·绘世之卷":"Starry Impression","天行·绘星之卷":"Cosmic Expression","维尔薇":"Vill-V","螺旋·愚戏之匣":"Helical Contraption","李素裳":"Li Sushang","玉骑士·月痕":"Jade Knight","爱衣·休伯利安Λ":"Ai","时帆旅人":"Chrono Navi","苏莎娜":"Susannah","女武神·热砂":"Valkyrie Quicksand","米丝忒琳·沙尼亚特":"Misteln","织羽梦旌":"Dreamweaver","普罗米修斯":"PROMETHEUS","终末协理0017":"Terminal Aide 0017","时雨绮罗":"Shigure Kira","糖露星霜":"Sugary Starburst","西琳":"Sirin","奇迹☆魔法少女":"Miracle ☆ Magic Girl","科拉莉·6626·普朗克":"Coralie","女武神·重机":"Valkyrie Blastmetal","埃尔德什·赫丽娅":"Helia","女武神·巡矢":"Valkyrie Boltstorm","希娜狄雅":"Senadina","深空定锚·曙光":"Deepspace Anchor: First Light","瑟莉姆":"Thelema","享乐狂宴·邀影":"Mad Pleasure: Shadowbringer","灯":"&#39;Lantern&#39;","破弃孤光·逐影":"Lone Destruction: Shadowchaser","松雀":"Songque","瞒天乐游·曙影":"Jovial Deception: Shadowdimmer","德丽莎（链刃）":"Theresa (Chained Blades)","天命难逃":"Shicksal&#39;s Imperative","薇塔":"Vita","孑遗千星":"Lone Planetfarer","花火":"Sparkle","诡戏千役「友情出演！」":"Thousand-Faced Maestro: Cameo!","幽兰黛尔（梭镖）":"Durandal (Javelin)","天光驰彻":"Reign Solaris"};$(".table-search").on("click",".select-item",()=>setTimeout(e,200)),$(".el-select-dropdown__item").on("click",()=>setTimeout(e,200)),e()}())'
          >
            Fix 3rd guide
          </a>
          ) link to your bookmark bar and click it when you're on the site! The script also
          translates all the bosses and valks (turn off Chrome auto-translation first). Many thanks
          for zkwp of Lumina for the script. For the latest version or if you use TamperMonkey, find
          the script at
          <a
            href="https://github.com/PaeP3nguin/honkai-guide/blob/master/src/assets/3rdguide.user.js"
          >
            Github
          </a>
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
          <v-checkbox v-model="sssBoss" label="SSS Boss? (Tip: Some MA videos will only show up when this is unchecked, so try both!)"></v-checkbox>

          <h3 class="section-head">Valkyries</h3>
          <p>
            Order matters! Choose the lead valk first. Some acronyms return a lot of results; add
            prefix * to filter for only acronyms (for example: *RS).  Add prefix with two ** for ELF or Astral Ops.
          </p>
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
        <v-checkbox v-model="googleToggle" label="Swap to Google"></v-checkbox>
        <v-checkbox
          v-if="googleToggle"
          v-model="googleToggleBili"
          label="Bili² from Google"
        ></v-checkbox>
        <p v-for="link in biliLinks" v-bind:key="link">
          <a target="_blank" class="bili-link" :href="`${link}`">{{ link }}</a>
        </p>

        <h2 class="section-head">Changelog</h2>
        <ul>
          <li>2025/08/21 - Added Litost EN name - Darius</li>
          <li>
            2025/07/17 - Added Coralie, Chenxue, Litost valk/op/boss (full EN names coming later),
            added Echoing and Extreme abyss weathers - Darius
          </li>
          <li>2025/05/29 - Added Sampo - Darius</li>
          <li>2025/05/08 - Added Planar Armament: Warped Spacetime Helia - Darius</li>
          <li>
            2025/03/22 - Added Blood Thorn Patch and Flux, added Lantern boss, added Peregrine Sword.
            Updated search terms prefixes (* and **) - Darius
          </li>
          <li>2025/02/03 - Add a bunch of translations for the 3rd guide website - ThatOneAmyFan</li>
          <li>
            2025/01/19 - Added SSS Sa boss, added Fiery Wishing Star (FWS), added Theresa Astral Op
            - Darius
          </li>
          <li>2024/12/25 - Updated name of new boss from New Kevin to Bygone Deliverance - Darius</li>
          <li>
            2024/12/07 - Added ignited modifier. Added DAFL for Senadina. Added Reign Solaris
            valkyrie and SSS/Abyss Kevin (will add Kevin's localized name later). Some acronyms
            return a lot of results, so all acronyms now have a * suffix, use this to quickly filter
            it down (e.g. RS* instead of RS) - Darius
          </li>
          <li>
            2024/11/15 - Added modifiers Stellar Crown and Starless. Added some boss nickanmes:
            bull, flower, and wolf. - Darius
          </li>
          <li>2024/10/26 - Added Vita boss and Sparkle valkyrie. - Darius</li>
          <li>
            2024/10/16 - Sorry for the delay, Sprout of Wishing has now been added. This completes
            the updates for v7.8. - Darius
          </li>
          <li>2024/09/05 - Added Lone Planetfarer/Vita. - Darius</li>
          <li>
            2024/08/12 - Removed some really old and no longer useful modifiers. Abyss weathers have
            been moved to the modifiers section. These will be useful for bosses with multiple
            weathers. More will be added later as needed. Added search term for "mobs", please use
            this if the Perilous stage is a mob stage. Added MHT-3C, the newest version of tank. -
            Darius
          </li>
          <li>2024/08/05 - Added Schicksal's Imperative Theresa and Valrahal boss - Darius</li>
          <li>
            2024/06/21 - To make finding mob boss stages easier, a few weathers have been added:
            Stellar (Astral Ring), Stardust, Symphony, and Bloodlust. These are all Senadina mob
            boss stages. Added Songque, Serapeum, and Meteoroid Fusion: Epernay. I wonder if they
            will ever fix the incorrect spelling in game: "Meteroid"? - Darius
          </li>
          <li>2024/05/05 - Added Mobius boss and Lantern. - Darius</li>
          <li>
            2024/03/21 - Added Beast of Sacrifice (Duonigue) and Raven bosses, added Thelema
            valkyrie. - Darius
          </li>
          <li>
            2024/03/01 - Added new search term for Flower boss, and added search terms for the
            Astral Ring weather SD mobs, Symphony weather SD mobs, and Stardust weather SD mobs.
            Added Helia and Coralie individual valks. 4.4 and after valkyries will now have
            battlesuit name, abbreviation, and character name, to make it easier for some players to
            find them. Example: Deepspace Anchor: First Light (FL, Senadina) 4.3 and below valkyries
            will also be updated to the same format, but in a future update. - Darius
          </li>
          <li>
            2024/02/05 - BIG UPDATE! Added Herrscher Trio, Senadina Trio, Senadina standalone, ELFs
            (Blade Durandal and newer only), and Collaborators. Helia and Coralie do not have
            standalone entries yet (not sure if they will). Also added Alien Guard's alternate name.
            V7.3 new bosses coming soon. Thanks Darius
          </li>
          <li>2024/01/15 - Added Fenghuang of Vicissitude, thanks Darius</li>
          <li>2023/11/26 - Added 7.1 boss EN name, Alien Guard - Supplement, thanks Darius</li>
          <li>
            2023/11/07 - Added abyss Flying Fish, v7.1 Cosmic Expression, v7.1 alien boss (EN name
            will be added later), updated SSS Heimdall CN search terms, thanks Darius
          </li>
          <li>2023/10/09 - Add Lunar Vow Crimson Love, thanks Darius</li>
          <li>2023/09/19 - Add Herrscher of Ice boss, thanks Darius</li>
          <!-- older changelog
            <li>2023/09/04 - Add Herrscher of Corruption Elysia, thanks Darius</li>
            <li>2023/08/26 - Add Miracle Magical Girl (Sirin), thanks Darius</li>
            <li>2023/08/05 - Update 6.8 boss name, thanks Darius</li>
            <li>
              2023/07/12 - Added beta 6.8 boss and Herrscher of Rebirth; english name for boss will be
              updated when GLB beta starts, thanks Darius
            </li>
            <li>2023/06/18 - Update 6.7 boss name, add Beta Test modifier, thanks Darius</li>
            <li>
              2023/06/18 - Remove future MA/Abyss lineups pages, as they're not updated anymore :(
            </li>
            <li>2023/05/22 - 6.6 and 6.7 valk and boss names added, thanks Darius</li>
            <li>2023/05/05 - Small valk name fixes, thanks Pootz</li>
            <li>
              2023/04/13 - Add VQ gear and search, add slime boss search, thanks Pootz, fragile, and
              Joshie
            </li>
            <li>2023/04/01 - Add Hoo and Hofi gear, thanks Pootz</li>
            <li>2023/03/10 - Add Kevin and Husk: Existentialism bosses, thanks fragile and Pootz</li>
            <li>2023/02/10 - Add HoO and HoFi, Echo PRI, HoTR gear, thanks Pootz</li>
            <li>2023/01/17 - Add Husk: Mysticism boss search term, thanks Gwent and Ryuu</li>
            <li>2023/01/10 - Bunch of new search terms and equipment, thanks Pootz and eyee</li>
            <li>2022/12/11 - Updated scoring for SSS bosses, thanks HauNguyenThe</li>
            <li>2022/11/25 - Add Opaque Shadow and Nocturnal Knight, thanks Cyxo</li>
            <li>2022/11/06 - Sus search term, gear, Willows stig, SoE key, thanks Pootz</li>
            <li>2022/10/03 - Add Vill-V, HoH equips, thanks Pootz</li>
            <li>
              2022/08/17 - Add Kosma boss, thanks Neal/Gwent, include Vill-V in valkyries, updated
              3rdguide bookmarklet
            </li>
            <li>2022/07/23 - Updated 3rdguide bookmarklet URL and search terms w/ new valks</li>
            <li>2022/07/21 - Add Seven Thunders PRI to calc, thanks Pootz</li>
            <li>2022/07/04 - Add Vill-V boss and Griseo valk 😭, thanks TencentDimepiece</li>
            <li>2022/06/29 - Add option to use Google to search bilibili, thanks TencentDimepiece</li>
            <li>
              2022/05/26 - Add Aponia weapons, Handel and Zeno stigs, Echo of Paradise, thanks Pootz
            </li>
            <li>2022/05/17 - Add Sushang and Husk search terms, thanks HauNguyenThe</li>
            <li>2022/04/30 - Add Aponia and Eden search terms, thanks HauNguyenThe</li>
            <li>2022/04/30 - Add Felis search term, thanks Pootz</li>
            <li>2022/04/12 - Add Felis gear, thanks Pootz</li>
            <li>2022/04/04 - Add Q-Manifold modifier, thanks Reinbex</li>
            <li>2022/03/24 - Add Elysia to bosses</li>
            <li>2022/03/13 - Add Otto to bosses and no Paganini modifier, thanks Pootz</li>
            <li>2022/03/13 - Add Spina Astera gear to calc, thanks Pootz</li>
            <li>2022/02/25 - Add PE gear to calc, thanks Pootz</li>
            <li>2022/02/25 - Add Spina Astera to search and 3rdguide bookmark, thanks Toast</li>
            <li>2022/02/01 - Update HoD search translations, thanks Toast</li>
            <li>2022/02/01 - Add Palatinus Equinox to search and 3rdguide bookmark, thanks Pootz</li>
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
            <li>2021/08/29 - Add Poe and Acheron to gear calc, thanks Pootz</li>
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
            <li>2019/08/10 - Added Void Drifter valk, Q-Singularis modifier</li>
          -->
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
          <li>time = ss / sss / up</li>
          <li v-for="s in scoresByTime" v-bind:key="s.score">
            {{ s.elapsedSec | countdownSeconds }} = {{ s.ssScore }} / {{ s.base }} / {{ s.up }}
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
  "Dominator of Wolves (Andrius, wolf)": ["奔狼的领主", "奔狼", "北风狼"],
  Assaka: ["阿湿波", "asb"],
  "Argent Knight: Artemis (AKA)": ["月魂"],
  Benares: ["贝纳勒斯", "贝贝龙", "龙"],
  "Bright Knight - Excelsis (BKE)": ["月魄", "幽兰戴尔"],
  "Couatl: Revenant": ["量子帝王", "泥鳅"],
  "Cursed Soul": ["姬子", "被诅咒的英魂"],
  "Dark Jixuanyuan (DXY, DJXY)": ["皮皮马", "马"], // "姬麟·黑"],
  "Death Web + Gigant (Abyss only)": ["蜘蛛泰坦"],
  "Diabolic Kevin": ["凯文", "凯文 - 卡斯兰娜"],
  Doom: ["沉灵", "湮灭沉灵"],
  "Double Wendy (all the way) (Abyss only)": ["双温蒂"],
  Elysia: ["爱莉希雅", "爱莉", "爱"],
  "Emperor (Abyss only)": ["帝王"],
  "False God Otto Apocalypse (FGO)": ["伪神", "伪神奥托", "奥托"],
  "Herrscher of the Void (God Kiana, GK, HoV)": ["空之律者", "女王"],
  Heimdall: ["海姆达尔", "海胖", "胖大海"],
  Hellmaru: ["狐狸", "绯狱丸"],
  "HoD Minion (HoD)": ["千律", "乌合之众"],
  "Herrscher of Sentience (HoS)": ["识之律者"],
  "HOMU (King, Emperor, Magician, Performer)": ["吼姆"],
  Huodou: ["祸斗"],
  "Husk: Existentialism (flower)": ["虚数花", "虚树摊骸-存在主义"],
  "Husk: Mysticism (bull)": ["牛牛", "神秘主义"],
  "Husk: Nihilius (clock)": ["虚树神骸", "lzx"],
  "Jizo Mitama": ["地藏", "地藏御魂"],
  Kallen: ["卡莲"],
  Kalpas: ["千劫", "杰哥", "劫哥", "千师傅"],
  Kasumi: ["八重霞"],
  Kosma: ["科斯魔"],
  "Li Sushang": ["李素裳"],
  "Mexicatl: Umbreist (quantum ball)": ["球", "量子军团"],
  "MHT-3 Pax (tank)": ["MHT", "和平使者", "坦克"],
  "MHT-3B Nirvana (new tank, also SSS tank)": ["MHT-3B", "天堂使者", "坦克"],
  "MHT-3C Retaliator (no transition abyss tank)": ["MHT-3C", "惩戒使者", "坦克"],
  Mobs: ["群聚"],
  "MR-06X Hephaestus": ["赫菲斯托斯", "灭火器"],
  "Otto Apocalypse (Shield Otto)": ["盾奥托", "奥托"],
  Padrino: ["教父"],
  Parvati: ["冰猪", "帕凡提"],
  "Pishacha (Slime, Blob)": ["毕舍遮"],
  Rimestar: ["冰律", "陨冰之律者"],
  "RPC-6626": ["飞机", "RPC - 6626"],
  "Shadow Knight (SK)": ["月轮"],
  "Son of Darkness (Abyss only)": ["黑夜之子"],
  "Titan + Hierophant (soul link mobs) (Abyss only)": ["关底", "双灵魂链接", "红莲泰坦"],
  "Tonatiuh (lobster)": ["托纳提乌", "龙虾"],
  "Wendy + Ganesha (Abyss only)": ["猪温"],
  "Vill-V": ["维尔薇", "V2V"],
  "Opaque Shadow (quantum whale)": ["蔽光之影"],
  "Nocturnal Knight (blood thorn)": ["煌夜骑士"],
  Aponia: ["阿波尼亚", "阿波"],
  "Wardens of Tower (Black Wine of Theramenes, White Sword of Damocles)": ["塔之钳梏", "黑白双煞"],
  "Cruising Tribunal": ["巡航审判团"],
  "Herrscher of Corruption (HoC, Elysia)": ["侵蚀"],
  "Herrscher of Ice (HoI)": ["冰律"],
  "Flying Fish: Patrol Force": ["飞鱼", "游弋集群", "泥鳅"],
  "Alien Guard - Supplement": ["星尘戍卫", "异星肃卫"],
  "Meteoroid: Guaymas": ["瓜伊马斯", "星尘龙虾"],
  "Beast of Sacrifice (Duonigue)": ["殉死之兽"],
  Raven: ["渡鸦"],
  Mobius: ["梅比乌斯"],
  "Meteoroid Fusion: Epernay": ["奈埃尔"],
  "Valrahal (Quantum Pig)": ["量子猪", "瓦拉哈"],
  "Sprout of Wishing": ["愿之芽"],
  "Vita: Sea's Depths": ["薇塔", "量子薇塔"],
  "Bygone Deliverance (Kevin)": ["戒世遗光", "凯文"],
  "Sa: Wheel of Transcendence": ["娑"],
  Lantern: ["灯"],
  "Masked Fool Sampo": ["桑博"],
  "Litost • Cinders of the Night": ["利托斯特"],
};

const valkToChinese = {
  "White Comet (*WC, Kiana)": ["白"],
  "Crimson Impulse (*CI, Mei)": ["绯"],
  "Valkyrie Chariot (*VC, Bronya)": ["战"],
  "Valkyrie Ranger (*VR, Kiana)": ["游"],
  "Valkyrie Bladestrike (*VB, Mei)": ["强"],
  "Yamabuki Armor (*YA, Bronya)": ["山"],
  "Divine Prayer (*DP, Kiana)": ["圣"],
  "Shadow Dash (*SD, Mei)": ["影"],
  "Snowy Sniper (*SS, Bronya)": ["雪"],
  "Knight Moonbeam (*KMB, Kiana)": ["月"],
  "Lightning Empress (*LE, Mei)": ["鬼"],
  "Dimension Breaker (*DB, Bronya)": ["次"],
  "Battle Storm (*BS, Himeko)": ["疾"],
  "Scarlet Fusion (*SF, Himeko)": ["深"],
  "Valkyrie Triumph (*VT, Himeko)": ["凯"],
  "Blood Rose (*BR, Himeko)": ["玫"],
  "Gyakushinn Miko (Miko, Yae Sakura)": ["逆"],
  "Goushinnso Memento (Meme, Yae Sakura)": ["勿"],
  "Valkyrie Pledge (*VP, Theresa)": ["誓"],
  "Violet Executor (*VE, Theresa)": ["紫"],
  "Sakuno Rondo (*SR, Theresa)": ["樱"],
  "Wolf's Dawn (*WD, Bronya)": ["银"],
  "Black Nucleus (*BN, Bronya)": ["黑"],
  "Flame Sakitama (*FS, Yae Sakura)": ["炎"],
  "Celestial Hymn (*CH, Theresa)": ["神"],
  "Valkyrie Accipiter (*VA, Fu Hua)": ["迅"],
  "Phoenix (*PX, Fu Hua)": ["炽"],
  "Ritual Imayoh (*RI, Kallen)": ["今"],
  "Night Squire (*NS, Fu Hua)": ["白"],
  "Sixth Serenade (*6S, Kallen)": ["六"],
  "Luna Kindred (*LK, Luna, Theresa)": ["月", "初"],
  "Shadow Knight (*SK, Fu Hua)": ["轮"],
  "Sundenjager (*SJ, Kallen)": ["原罪"],
  "Kreigsmesser (*KMS, Himeko)": ["极"],
  "Herrscher of the Void (*GK, *HoV, *HV, God Kiana)": ["律"],
  "Umbral Rose (*UR, Rita)": ["黯"],
  "Vermillion Knight: Eclipse (*VKE, Himeko)": ["真"],
  "Striker Fulminata (*SF, Mei)": ["强袭"],
  "Phantom Iron (*PI, Rita)": ["狗"],
  "Argent Knight: Artemis (*AKA, Rita)": ["月魂"],
  "Drive Kometa (*DK, Bronya)": ["山"],
  "Blueberry Blitz (*BB, Liliya)": ["蓝"],
  "Molotov Cherry (*MC, Rozaliya)": ["粉", "孤儿队"],
  "Swallowtail Phantasm (*SP, Seele)": ["幻海梦蝶", "希"],
  "Void Drifter (*VD, Kiana)": ["游"],
  "Herrscher of Reason (*HoR, *HR, Bronya)": ["理", "律鸭"],
  "Twilight Paladin (*TP, Theresa)": ["紫"],
  "Hawk of the Fog (*HF, Fu Hua)": ["迅", "迅雷", "雾都迅羽"],
  "Stygian Nymph (*SN, Seele)": ["黑希", "希"],
  "Darkbolt Jonin (*DJ, Yae Sakura)": ["夜隐重霞", "雷八"],
  "Azure Empyrea (*AE, Fu Hua)": ["云", "墨", "云墨丹心"],
  "Valkyrie Gloria (*VG, Durandal)": ["荣光", "女武神·荣光"],
  "Bright Knight: Excelsis (*BKE, Durandal)": ["月魄", "辉骑士月"],
  "Starlit Astrologos (*SA, Kongming, Theresa)": ["朔夜观星", "观"],
  "Herrscher of Thunder (*HoT, *HT, Mei)": ["雷", "雷律", "雷之律者"],
  "Danzai Spectramancer (*DS, Mei)": ["影", "断罪影舞"],
  "Fallen Rosemary (*FR, Rita)": ["迷", "失落迷迭"],
  "Fervent Tempo Delta (*FTD, Rozaliya)": ["狂热蓝调", "粉"],
  "Dea Anchora (*DA, Durandal)": ["星", "不灭星锚", "锚"],
  "Blazing Hope (*BH, Asuka)": ["明日香"],
  "Herrscher of Sentience (*HoS, *HS, Fu Hua)": ["识", "识之律者", "识律"],
  "Haxxor Bunny (*HB, Bronya)": ["骇兔", "迷城骇兔"],
  "Starchasm Nyx (*Nyx, Veliona, Seele)": ["魇夜星渊", "冰希"],
  "Prinzessin der Verurteilung! (*PV, Fischl)": ["皇", "小艾咪", "皇女"],
  "Herrscher of Flamescion (*HoFs, *HFs, Kiana)": ["薪", "炎", "萤火虫", "薪炎之律者"],
  "Miss Pink Elf (*MPE, Elysia)": ["爱莉希雅", "爱莉", "爱"],
  "Infinite Ouroboros (*IO, Mobius, Kyoshiro's wife)": ["无限·噬界之蛇", "噬界", "蛇主"],
  "Midnight Absinthe (*MA, Raven)": ["午夜苦艾", "渡鸦"],
  "Sweet 'n' Spicy (*SnS, Carole)": ["卡", "卡萝尔", "甜辣女孩"],
  "Silverwing: N-EX (*SW, Bronya)": ["大鸭", "次", "翼"],
  "Palatinus Equinox (*PE, Durandal)": ["天", "天元", "天元骑英"],
  "Spina Astera (*SpA, Rita)": ["星", "星棘", "缭乱星棘"],
  "Reverist Calico (*RC, Pardofelis)": ["猫"],
  "Disciplinary Perdition (*DP, *DiP, Aponia)": ["阿", "阿波尼亚"],
  "Golden Diva (*GD, Eden)": ["伊", "伊甸"],
  "Starry Impression (*SI, Griseo)": ["格", "格蕾修"],
  "Helical Contraption (*HC, Vill-V)": ["维尔薇", "V2V"],
  "Herrscher of Human: Ego (*HH, *HoH, *HoHE, Elysia)": ["人", "爱猫兔", "爱律"],
  "Jade Knight (*JK, Li Sushang)": ["李", "李素裳", "玉骑士月痕"],
  "Chrono Navi (*CN, Ai Hyperion)": ["爱", "爱衣"],
  "Herrscher of Truth (*HoTr, *HTr, Bronya)": ["真理", "真"],
  "Herrscher of Finality (*HoFi, *HFi, Kiana)": ["终"],
  "Herrscher of Origin (*HoO, *HO, Mei)": ["始"],
  "Herrscher Trio (*HFi Kiana, *HO Mei, *HTr Bronya)": ["虚三家"],
  "Valkyrie Quicksand (*VQ, Susannah)": ["苏", "苏珊娜", "苏莎娜", "热砂", "女武神・热砂"],
  "Dreamweaver (*DW, Misteln, Hare)": ["羽", "羽兔"],
  "Terminal Aide 0017 (*TA, Prometheus)": ["普"],
  "Sugary Starburst (*SSt, *SSb, Shigure Kira)": ["时", "糖露星霜"],
  "Herrscher of Rebirth (*HoRb, *HRb, Seele)": ["希", "死生之律者"],
  "Miracle Magic Girl (*MMG, Sirin)": ["西", "西琳"],
  "Lunar Vow: Crimson Love (*LV, Luna, Theresa)": ["月", "月下"],
  "Cosmic Expression (*CE, Griseo)": ["格"],
  "Fenghuang of Vicissitude (*FV, *FoV, Fu Hua)": ["符", "符华", "崩落符华"],
  "Deepspace Anchor: First Light (*FL, *DAFL, Senadina)": ["希", "希娜", "希娜迪雅"],
  "Valkyrie Boltstorm (*VBs, Helia)": ["赫"],
  "Valkyrie Blastmetal (*VBm, Coralie)": ["科"],
  "Senadina Trio/Mars Trio (*FL Senadina, *VBs Helia, *VBm Coralie)": ["星三家"],
  "Mad Pleasure: Shadowbringer (*MP, *MPS, Thelema)": ["瑟"],
  "Lone Destruction: Shadowchaser (*LD, *LDS, Lantern)": ["灯"],
  "Jovial Deception: Shadowdimmer (*JD, *JDS, Songque)": ["松"],
  "Schicksal's Imperative (*SI, *SIm, Theresa)": ["德"],
  "Lone Planetfarer (*LP, Vita)": ["薇"],
  "Thousand-Faced Maestro: Cameo! (*TFM, Sparkle)": ["花"],
  "Reign Solaris (*RS, Durandal)": ["鹅"],
  "Ba-Dum! Fiery Wishing Star (*FWS, Kiana)": ["琪"],
  "Peregrine Sword (*PS, Li Sushang)": ["李"],
  "Planar Armament: Warped Spacetime (*PA, *PAWS, *WS, Helia)": ["赫"],
  "Behold! Fate-Defying Dragon (*FDD, Coralie)": ["科"],
  // ELFs & Collaborators
  "Blade Durandal (**BD, **Dudu, ELF)": ["星幽"],
  "Elf Elysia (**Ely, ELF)": ["星爱"],
  "Kiana Kaslana (**Kiana, ELF)": ["星琪"],
  "Project Bunny (**PB, ELF)": ["星兔"],
  "Dreamseeker (**DS, Astral Op)": ["寻梦者"],
  "Songque (**Song, Astral Op)": ["松雀"],
  "Serapeum (**Sera, Astral Op)": ["瑟拉"],
  "Theresa Apocalypse (**Teri, Astral Op)": ["德"],
  "Chenxue (**Chen, Astral Op)": ["晨雪"],
};

const modifiersToChinese = {
  // "F2P / No gacha Gear": ["零蛋"],
  // "2 - 3 pieces of gacha gear": ["低配"],
  // "No JST": ["无叶"],
  // "No Newton": ["无牛"],
  // "No Paganini": ["无帕"],
  // "No Shuijing": ["无水"],
  // "No Zhenyi": ["无贞仪"],
  // "No Turgenev": ["无屠"],
  // "No ELFs": ["无人偶"],
  // "SS LE": ["SS鬼", "2S鬼"],
  // "SS lead skill": ["SS队长技", "2S队长技"],
  // Dirac: ["迪拉克", "狄拉克"],
  "Honkai Impact 3": ["崩坏3"],
  "Beta Test": ["测试服"],
  "Sim battle": ["模拟作战室"],
  "Elysian Realm": ["往世乐土", "往事乐土"],
  "Memorial Arena": ["战场"],
  "Masters": ["高级区"],
  "Exalted": ["终极区"],
  "Q-Singularis": ["量子奇点"],
  "Q-Manifold": ["量子流形"],
  "Superstring Dimension": ["超弦空间"],
  "Red Lotus": ["红莲"],
  Nirvana: ["寂灭"],
  Myriad: ["无限"],
  "1st Place": ["榜一"],
  "Blood Thorn Patch": ["流血"],
  Bloodlust: ["嗜战"],
  Counter: ["克制"],
  Echoing: ["共鸣"],
  "Extreme Conditions": ["天衍"],
  Flux: ["流变"],
  Ignited: ["点燃"],
  Lightning: ["雷伤"],
  Physical: ["物理"],
  "Star Shadow": ["影星"],
  Stardust: ["星尘"],
  Starless: ["掩星"],
  Stellar: ["星环"],
  "Stellar Crown": ["星冕"],
  Symphonic: ["交响"],
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
      scores: scoresByTime.map((s) => s.ssScore),
      scoresByTime: scoresByTime,
      modifiers: modifiers,
      lineups: RECENT_LINEUPS,
      googleToggle: false,
      googleToggleBili: true,
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
    // Converts valk combinations to use the google OR search notation.
    valkCombosGoogle: function () {
      let combos = [];
      this.selectedValks
        .map((v) => valkToChinese[v])
        .forEach((names) => {
          combos.push(`(${names.join("|")})`);
        });
      return combos;
    },
    biliLinks: function () {
      // Static modifiers that go at the end.
      let modifierParams = this.modifiers
        .filter((m) => m.value)
        .map((m) => modifiersToChinese[m.name]);

      if (this.googleToggle) {
        // Google search queries don't need any combinations since they can use the OR operator, so separating this
        // logic out.
        return [
          "https://www.google.com/search?q=" +
            [
              this.selectedBoss ? `(${this.bossNames.join("|")})` : "",
              this.valkCombosGoogle.join(" "),
              modifierParams.length
                ? `(${modifierParams.map((params) => params.join("|")).join(" ")})`
                : "",
              this.score,
              this.googleToggleBili ? "site:https://www.bilibili.com" : "",
            ]
              // Remove empty strings and nulls to avoid extra spaces and weirdness in the output.
              .filter((n) => n)
              .join(" "),
        ];
      }

      if (this.score) {
        modifierParams.push([this.score]);
      }
      // Must have at least one element in each array passed to combine to generate anything.
      modifierParams = modifierParams.length ? modifierParams : [[""]];
      const modifierCombos = Array.from(combine(modifierParams)).map((c: string[]) =>
        c.join(" ").trim()
      );

      const baseUrl = isMobile()
        ? "https://m.bilibili.com/search?keyword="
        : "https://search.bilibili.com/all?keyword=";

      const combinations: string[][] = Array.from(
        combine([this.bossNames, this.valkCombos, modifierCombos])
      );
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
