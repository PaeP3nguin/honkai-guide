// ==UserScript==
// @name         3rdguide TL and utils
// @namespace    https://github.com/zklm/userscripts
// @description  Simple EN translation of valks and bosses
// @version      1.0.8
// @homepage     https://github.com/zklm/userscripts
// @homepageURL  https://github.com/zklm/userscripts
// @downloadURL  https://github.com/zklm/userscripts/raw/master/3rdguide.user.js
// @updateURL    https://github.com/zklm/userscripts/raw/master/3rdguide.user.js
// @author       zklm
// @match        http://3rdguide.com/web/teamnew/index
// @match        http://www.3rdguide.com/web/teamnew/index
// @match        https://3rdguide.com/web/teamnew/index
// @match        https://www.3rdguide.com/web/teamnew/index
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    /* globals $ */

    // Allow new tab opening of team links
    // https://honkai-guide.web.app/calc/calc.html#/
    // Doesn't allow middle click on FF, mouseup to get around isn't possible because of popup detection,
    // alternative is to just replace div->a in each td but that messes up layout on 2nd col. Meh.
    $("#ct_det tbody")
      .off()
      .on("click", "tr", function () {
        const urlstr = $(this).find(".tgcol0").data("url");
        if (urlstr != undefined) window.open(urlstr, "_blank");
      });

    // Translations
    const tls = {
      // Misc
      "记忆战场": "Memorial Arena",

      "战区:": "Bracket",
      "SSS难度": "SSS Difficulty",
      "终极战区": "Exalted",
      "高级战区": "Masters",
      "强敌:": "Bosses",
      "女武神:": "Valkyries",
      "阵容": "Line-up",
      "得分": "Score",
      "造价": "Cost",
      "操作难度": "Difficulty",
      "好评数": "Likes",
      "创建时间": "Date",
      "超弦空间": "Superstring",
      "扰动幅度": "Disturbance",

      // Bosses
      "托纳提乌·噬日之影": "Tonatiuh",
      "托纳提乌-噬日之影": "Tonatiuh",
      "奔狼的领主": "Andrius",
      "祸斗": "Huodou",
      "吼姆王": "Homu Emperor",
      // "莲" "Kallen" // (use valkyrie TL)
      "绯狱丸": "Hellmaru",
      "海姆达尔": "Heimdall",
      "湮灭沉灵": "Doom",
      "教父军团": "Padrino Legion",
      "特里波卡": "Mexicatl",
      "贝纳勒斯": "Benares",
      "姬麟·黑": "DJXY",
      // "之律者" "Herrscher of the Void" // (use valkyrie TL)
      "MHT-3和平使者": "MHT-3 Pax",
      "MHT-3 和平使者": "MHT-3 Pax",
      "MHT-3B 天堂使者": "MHT-3B Nirvana",
      "阿湿波": "Assaka",
      "地藏御魂": "Jizo Mitama",
      "赫菲斯托斯": "Hephaestus ",
      // "影骑士·月轮": "Shadow Knight" // (use valkyrie TL)
      "帕凡提": "Parvati",
      "被诅咒的英魂": "Cursed Soul",
      "科亚特尔-复生之影": "Couatl",
      "深渊终极区": "Couatl",
      "八重霞": "Kasumi",
      "陨冰之律者": "Rimestar",
      "虚树神骸-虚无主义": "Husk Nihilius",
      "支配之律者-乌合之众": "Herrscher of Domination",
      "伪神·奥托": "False God Otto",
      "伪神奥托": "False God Otto",
      "逐火十三英桀·科斯魔": "Flame-Chaser Kosma",
      "虚树神骸-神秘主义": "Husk Mysticism",
      "虚数神骸·神秘主义": "Husk Mysticism",
      "虚树神骸-存在主义": "Husk Existentialism",
      "毕舍遮": "Pishacha",
      "逐火十三英桀 阿波尼亚": "Flame-Chaser Aponia",
      "塔之钳梏": "Wardens of Tower",
      "殉死之兽": "Beast of Sacrifice",
      "薇塔-「海的深渊」": "Vita - Sea's Depths",
      "愿之芽-全知的羽翼": "Sprout of Wishing",
      "瓦拉哈": "Valrahal",
      "陨星-奈埃尔": "Epernay",
      "逐火十三英桀 梅比乌斯": "Flame-Chaser Mobius",
      "陨星-瓜伊马斯": "Guaymas",
      "异星肃卫-补阙": "Alien Guard",
      "「戒世遗光」": "Deliverance Kevin",

      // === Superstring abyss translations ===
      // Abyss ranks
      "段位:": "Rank",
      "原罪": "Sinful",
      "禁忌": "Forbidden",
      "苦痛": "Agony",
      "红莲": "Redlotus",
      "寂灭": "Nirvana",

      // Abyss weather
      "天气:": "Weather",
      "恐雷": "Lightning",
      "怯火": "Fire",
      "惧冰": "Ice",
      "量子": "Quantum",
      "畏血": "Physical",
      "狙击": "Ranged",
      "天敌": "Counter",
      "燃素": "Ignite",
      "战意": "Bloodlust",
      "虚数": "Imaginary",
      "坚阵": "Fortified",
      "雷劫": "Paralyze",
      "白刃": "Melee",
      "血棘": "Bleed",
      "冰结": "Freeze",
      "协奏": "Concerto",
      "统御": "Summons",
      "星尘": "Stardust",
      "失衡": "Stun",
      "闪耀": "Stellar",
      "黯灭": "Starless",
      "星冕": "Stellar Crown",
      "共鸣": "Resonance",
      "幻灭": "Shadow Star",
      "易位": "Ascension",

      // Abyss stages
      "区域:": "Stage",
      "边缘区": "Fringe (first)",
      "密集区": "Intensive (second)",
      "高危区": "Perilous (boss)",
      "特异区": "Singular (side)",

      // Abyss bosses
      "吼姆魔术师": "Homu Magician",
      "虚树神骸-虚无主义II": "Husk Nihilius (hit count)",
      "神机-海姆达尔": "Heimdall",
      "娑婆 阿湿波": "Saha Assaka",
      "婆娑阿湿波": "Saha Assaka",
      "群怪": "Mobs",
      "逐火十三英桀 爱莉希雅": "Flame-Chaser Elysia",
      "侵蚀之律者": "Herrscher of Corruption",
      "逐火十三英桀 科斯魔": "Flame-Chaser Kosma",
      "黑之赐死、白之悬剑": "Wardens of Tower",
      "渡鸦": "Raven",
      "蔽光之影": "Opaque Shadow",
      "奥托·阿波卡利斯": "Otto Apocalypse",
      "逐火十三英桀·千劫": "Flame-Chaser Kalpas",
      "贝纳勒斯·冰形态": "Benares Ice",
      "冰之律者": "Herrscher of Ice",
      // "玉骑士·月痕": "Jade Knight", // (use valkyrie tl)
      "群聚敌人": "Swarm",
      "机械": "MECH",
      "生物": "BIO",
      "能": "PSY",
      "生物、异能": "BIO, PSY",
      "迦尼萨": "Ganesha",
      "逐火十三英桀·维尔薇": "Flame-Chaser Vill-V",
      "异种·巡行级崩坏兽": "PSY: Patroller",
      "异能": "Elite",
      "督军级崩坏兽": "Honkai Emperor",
      "昆巴卡纳": "Kumbhakarna",
      "熔炎帝王": "Flame Emperor",
      "量产型教父": "Eldjotunar",
      "旋肢之影": "Spinning Shadow",
      "特里波卡-混沌之影": "Photophobic Shadow",
      "机械、异能": "MECH, PSY",
      "机械、生物": "MECH, BIO",
      "异能、机械": "PSY, MECH",
      "和平使者": "Nirvana",
      "异能、生物": "PSY, BIO",
      "生物、异能、机械": "BIO, PSY, MECH",
      "生物、机械": "BIO, MECH",
      "虚数、异能": "IMG, PSY",
      "雷神级崩坏兽": "Storm Templar",
      "死亡编织者": "Death Web",
      "煌夜骑士": "Nocturnal Knight",
      "巡航审判团": "Cruising Tribunal",
      "「业魔」凯文": "Diabolic Kevin",
      "飞鱼：游弋集群": "Flying Fish: Patrol Force",
      "陨星-奈挨尔": "Epernay",
      "MHT-3C 惩戒使者": "MHT-3C Retaliator",
      "寒冰帝王": "Frost Emperor",

      // === Valkyries ===
      "符华": "Fu Hua",
      "识之律者": "Herrscher of Sentience",
      "云墨丹心": "Azure Empyrea",
      "雾都迅羽": "Hawk of the Fog",
      "白夜执事": "Night Squire",
      "炽翎": "Phoenix",
      "影骑士·月轮": "Shadow Knight",
      "女武神·迅羽": "Valkyrie Accipiter",
      "浮生·渡尘之羽": "Fenghuang of Vicissitude",

      "明日香": "Asuka",

      "八重樱": "Yae Sakura",
      "夜隐重霞": "Darkbolt Jonin",
      "真炎幸魂": "Flame Sakitama",
      "逆神巫女": "Gyakushinn Miko",
      "御神装·勿忘": "Goushinnso Memento",

      "希儿·芙乐艾": "Seele",
      "魇夜星渊": "Starchasm Nyx",
      "彼岸双生": "Stygian Nymph",
      "幻海梦蝶": "Swallowtail Phantasm",
      "死生之律者": "Herrscher of Rebirth",

      "幽兰黛尔": "Durandal",
      "女武神·荣光": "Valkyrie Gloria",
      "辉骑士·月魄": "Bright Knight: Excelsis",
      "不灭星锚": "Dea Anchora",
      "天元骑英": "Palatinus Equinox",

      "德丽莎": "Theresa",
      "暮光骑士·月煌": "Twilight Paladin",
      "月下初拥": "Luna Kindred",
      "神恩颂歌": "Celestial Hymn",
      "处刑装·紫苑": "Violet Executer",
      "樱火轮舞": "Sakura Rondo",
      "女武神·誓约": "Valkyrie Pledge",
      "朔夜观星": "Starlit Astrologos",
      "月下誓约·予爱以心": "Lunar Vow: Crimson Love",

      "琪亚娜": "Kiana",
      "薪炎之律者": "Herrscher of Flamescion",
      "天穹游侠": "Void Ranger",
      "空之律者": "Herrscher of the Void",
      "圣女祈祷": "Divine Prayer",
      "女武神·游侠": "Valkyrie Ranger",
      "白骑士·月光": "Knight Moonbeam",
      "领域装·白练": "White Comet",
      "终焉之律者": "Herrscher of Finality",

      "布洛妮娅": "Bronya",
      "迷城骇兔": "Haxxor Bunny",
      "理之律者": "Herrscher of Reason",
      "彗星驱动": "Drive Kometa",
      "异度黑核侵蚀": "Black Nucleus",
      "银狼的黎明": "Wolfs Dawn",
      "次元边界突破": "Dimension Breaker",
      "女武神·战车": "Valkyrie Chariot",
      "驱动装·山吹": "Yamabuki Armor",
      "雪地狙击": "Snowy Sniper",
      "次生银翼": "Silverwing: N-EX",
      "真理之律者": "Herrscher of Truth",

      "阿琳姐妹": "Olenyevas",
      "狂热蓝调Δ": "Fervent Tempo Delta",
      "樱桃炸弹": "Molotov Cherry",
      "蓝莓特攻": "Blueberry Blitz",

      "芽衣": "Mei",
      "断罪影舞": "Danzai Spectramancer",
      "雷之律者": "Herrscher of Thunder",
      "破晓强袭": "Striker Fulminata",
      "雷电女王的鬼铠": "Lightning Empress",
      "脉冲装·绯红": "Crimson Impulse",
      "女武神·强袭": "Valkyrie Bladestrike",
      "影舞冲击": "Shadow Dash",
      "始源之律者": "Herrscher of Origin",

      "丽塔": "Rita",
      "失落迷迭": "Fallen Rosemary",
      "苍骑士·月魂": "Argent Knight: Artemis",
      "猎袭装·影铁": "Phantom Iron",
      "黯蔷薇": "Umbral Rose",
      "缭乱星棘": "Spina Astera",

      "姬子": "Himeko",
      "真红骑士·月蚀": "Vermilion Knight: Eclipse",
      "极地战刃": "Arctic Kriegsmesser",
      "融核装·深红": "Scarlet Fusion",
      "战场疾风": "Battle Storm",
      "女武神·凯旋": "Valkyrie Triumph",
      "血色玫瑰": "Blood Rose",

      "卡莲": "Kallen",
      "原罪猎人": "Sundenjager",
      "第六夜想曲": "Sixth Serenade",
      "圣仪装·今样": "Imayoh Ritual",

      "菲谢尔": "Fischl",
      "断罪皇女！！": "Prinzessin der Verurteilung!",

      "爱莉希雅": "Elysia",
      "粉色妖精小姐♪": "Miss Pink Elf",
      "真我·人之律者": "Herrscher of Human: Ego",

      "娜塔莎·希奥拉": "Raven",
      "午夜苦艾": "Midnight Absinthe",

      "梅比乌斯": "Mobius",
      "无限·噬界之蛇": "Infinite Ouroboros",

      "卡萝尔·佩珀": "Carole Pepper",
      "甜辣女孩": "Sweet n Spicy",

      "帕朵菲莉丝": "Pardofelis",
      "空梦·掠集之兽": "Reverist Calico",

      "阿波尼亚": "Aponia",
      "戒律·深罪之槛": "Disciplinary Perdition",

      "伊甸": "Eden",
      "黄金·璀耀之歌": "Golden Diva",

      "格蕾修": "Griseo",
      "繁星·绘世之卷": "Starry Impression",
      "天行·绘星之卷": "Cosmic Expression",

      "维尔薇": "Vill-V",
      "螺旋·愚戏之匣": "Helical Contraption",

      "李素裳": "Li Sushang",
      "玉骑士·月痕": "Jade Knight",

      "爱衣·休伯利安Λ": "Ai",
      "时帆旅人": "Chrono Navi",

      "苏莎娜": "Susannah",
      "女武神·热砂": "Valkyrie Quicksand",

      "米丝忒琳·沙尼亚特": "Misteln",
      "织羽梦旌": "Dreamweaver",

      "普罗米修斯": "PROMETHEUS",
      "终末协理0017": "Terminal Aide 0017",

      "时雨绮罗": "Shigure Kira",
      "糖露星霜": "Sugary Starburst",

      "西琳": "Sirin",
      "奇迹☆魔法少女": "Miracle ☆ Magic Girl",

      "科拉莉·6626·普朗克": "Coralie",
      "女武神·重机": "Valkyrie Blastmetal",

      "埃尔德什·赫丽娅": "Helia",
      "女武神·巡矢": "Valkyrie Boltstorm",

      "希娜狄雅": "Senadina",
      "深空定锚·曙光": "Deepspace Anchor: First Light",

      "瑟莉姆": "Thelema",
      "享乐狂宴·邀影": "Mad Pleasure: Shadowbringer",

      "灯": "'Lantern'",
      "破弃孤光·逐影": "Lone Destruction: Shadowchaser",

      "松雀": "Songque",
      "瞒天乐游·曙影": "Jovial Deception: Shadowdimmer",

      "德丽莎（链刃）": "Theresa (Chained Blades)",
      "天命难逃": "Shicksal's Imperative",

      "薇塔": "Vita",
      "孑遗千星": "Lone Planetfarer",

      "花火": "Sparkle",
      "诡戏千役「友情出演！」": "Thousand-Faced Maestro: Cameo!",

      "幽兰黛尔（梭镖）": "Durandal (Javelin)",
      "天光驰彻": "Reign Solaris",
    };

    const translateElement = function (tls, el) {
      if (el && tls[el.innerText]) {
        el.innerHTML = el.innerHTML.replace(el.innerText, tls[el.innerText]);
      }
    };

    const translate = function () {
      const dropdownText = $(".filter-text > input").val();
      $(".filter-text > input").val(dropdownText === "超弦空间" ? "Abyss" : "MA");

      $("th, span, .table-search, .label, .title").each(function () {
        translateElement(tls, this);
      });

      // Fix styling. Have to do this on click since it can get reset.
      $(".table-team-box .table-search").height(600);
      $(".table-search .goodwar .content").height(500);
    };

    // Translate on table click.
    $(".table-search").on("click", ".select-item", () => setTimeout(translate, 200));
    $(".el-select-dropdown__item").on("click", () => setTimeout(translate, 200));

    translate();
  })();
