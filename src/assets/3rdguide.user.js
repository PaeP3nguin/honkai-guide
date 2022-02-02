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
    记忆战场: "Memorial Arena",

    "战区:": "Bracket",
    SSS难度: "SSS difficulty",
    终极战区: "Exalted",
    高级战区: "Masters",
    "强敌:": "Bosses",
    "女武神:": "Valkyries",
    阵容: "Line-up",
    得分: "Score",
    造价: "Cost",
    操作难度: "Difficulty",
    好评数: "Likes",
    创建时间: "Date",
    超弦空间: "Superstring",
    扰动幅度: "Disturbance",

    // Bosses
    "托纳提乌·噬日之影": "Tonatiuh",
    "托纳提乌-噬日之影": "Tonatiuh",
    奔狼的领主: "Andrius",
    祸斗: "Huodou",
    吼姆王: "Homu King",
    // '卡莲': 'Kallen', // (use valkyrie TL)
    绯狱丸: "Hellmaru",

    海姆达尔: "Heimdall",
    湮灭沉灵: "Doom",
    教父军团: "Padrino Legion",
    特里波卡: "Mexicatl",
    贝纳勒斯: "Benares",
    "姬麟·黑": "DXY",
    // '空之律者': 'Herrscher of the Void', // (use valkyrie TL)
    "MHT-3和平使者": "MHT-3 Pax",
    "MHT-3 和平使者": "MHT-3 Pax",
    "MHT-3B 天堂使者": "MHT-3B Nirvana",
    阿湿波: "Assaka",
    地藏御魂: "Jizo Mitama",
    赫菲斯托斯: "Hephaestus ",
    // '影骑士·月轮': 'Shadow Knight', // (use valkyrie TL)
    帕凡提: "Parvati",
    被诅咒的英魂: "Cursed Soul",
    "科亚特尔-复生之影": "Couatl",
    八重霞: "Kasumi",
    陨冰之律者: "Rimestar",
    "虚树神骸-虚无主义": "Nihilus Husk",
    "支配之律者-乌合之众": "Herrscher of Dominance",

    // === Superstring abyss translations ===
    // Abyss ranks
    "段位:": "Rank",
    原罪: "Sinful",
    禁忌: "Forbidden",
    苦痛: "Agony",
    红莲: "Red lotus",
    寂灭: "Nirvana",

    // Abyss weather
    "天气:": "Weather",
    恐雷: "Lightning",
    怯火: "Fire",
    惧冰: "Ice",
    量子: "Quantum",
    畏血: "Physical",
    狙击: "Ranged",
    天敌: "Type counter",
    燃素: "Ignite",
    战意: "Bloodlust",
    虚数: "Imaginary",
    坚阵: "Fortified",
    雷劫: "Paralyze",

    // Abyss stages
    "区域:": "Stage",
    边缘区: "Fringe (first)",
    密集区: "Intensive (second)",
    高危区: "Perilous (boss)",
    特异区: "Singular (side)",

    // Abyss bosses
    吼姆魔术师: "Homu Magician",
    "虚树神骸-虚无主义II": "Nihilus Husk (hit count)",
    "神机-海姆达尔": "Heimdall",
    "娑婆 阿湿波": "Saha Assaka",
    群怪: "Mobs",
    "逐火十三英桀 爱莉希雅": "Flame Chaser Elysia",

    // === Valkyries ===
    符华: "Fu Hua",
    识之律者: "Herrscher of Sentience",
    云墨丹心: "Azure Empyrea",
    雾都迅羽: "Hawk of the Fog",
    白夜执事: "Night Squire",
    炽翎: "Phoenix",
    "影骑士·月轮": "Shadow Knight",
    "女武神·迅羽": "Valkyrie Accipiter",

    明日香: "Asuka",

    八重樱: "Yae",
    夜隐重霞: "Darkbolt Jonin",
    真炎幸魂: "Flame Sakitama",
    逆神巫女: "Gyakushinn Miko",
    "御神装·勿忘": "Goushinnso Memento",
    "希儿·芙乐艾": "Seele",
    魇夜星渊: "Starchasm Nyx",
    彼岸双生: "Stygian Nymph",
    幻海梦蝶: "Swallowtail Phantasm",

    幽兰黛尔: "Durandal",
    "女武神·荣光": "Valkyrie Gloria",
    "辉骑士·月魄": "Bright Knight: Excelsis",
    不灭星锚: "Dea Anchora",
    天元骑英: "Palatinus Equinox",

    德丽莎: "Theresa",
    "暮光骑士·月煌": "Twilight Paladin",
    月下初拥: "Luna Kindred",
    神恩颂歌: "Celestial Hymn",
    "处刑装·紫苑": "Violet Executer",
    樱火轮舞: "Sakura Rondo",
    "女武神·誓约": "Valkyrie Pledge",
    朔夜观星: "Starlit Astrologos",

    琪亚娜: "Kiana",
    薪炎之律者: "Herrscher of Flamescion",
    天穹游侠: "Void Ranger",
    空之律者: "Herrscher of the Void",
    圣女祈祷: "Divine Prayer",
    "女武神·游侠": "Valkyrie Ranger",
    "白骑士·月光": "Knight Moonbeam",
    "领域装·白练": "White Comet",

    布洛妮娅: "Bronya",
    迷城骇兔: "Haxxor Bunny",
    理之律者: "Herrscher of Reason",
    彗星驱动: "Drive Kometa",
    异度黑核侵蚀: "Black Nucleus",
    银狼的黎明: "Wolfs Dawn",
    次元边界突破: "Dimension Breaker",
    "女武神·战车": "Valkyrie Chariot",
    "驱动装·山吹": "Yamabuki Armor",
    雪地狙击: "Snowy Sniper",
    次生银翼: "Silverwing: N-EX",

    阿琳姐妹: "Twins",
    狂热蓝调Δ: "Fervent Tempo Delta",
    樱桃炸弹: "Molotov Cherry",
    蓝莓特攻: "Blueberry Blitz",

    芽衣: "Mei",
    断罪影舞: "Danzai Spectramancer",
    雷之律者: "Herrscher of Thunder",
    破晓强袭: "Striker Fulminata",
    雷电女王的鬼铠: "Lightning Empress",
    "脉冲装·绯红": "Crimson Impulse",
    "女武神·强袭": "Valkyrie Bladestrike",
    影舞冲击: "Shadow Dash",

    丽塔: "Rita",
    失落迷迭: "Fallen Rosemary",
    "苍骑士·月魂": "Argent Knight: Artemis",
    "猎袭装·影铁": "Phantom Iron",
    黯蔷薇: "Umbral Rose",

    姬子: "Himeko",
    "真红骑士·月蚀": "Vermilion Knight: Eclipse",
    极地战刃: "Arctic Kriegsmesser",
    "融核装·深红": "Scarlet Fusion",
    战场疾风: "Battle Storm",
    "女武神·凯旋": "Valkyrie Triumph",
    血色玫瑰: "Blood Rose",

    卡莲: "Kallen",
    原罪猎人: "S\xFCndenj\xE4ger",
    第六夜想曲: "Sixth Serenade",
    "圣仪装·今样": "Imayoh Ritual",

    菲谢尔: "Fischl",
    "断罪皇女！！": "Prinzessin der Verurteilung",

    爱莉希雅: "Elysia",
    "粉色妖精小姐♪": "Miss Pink Elf",

    "娜塔莎·希奥拉": "Raven",
    午夜苦艾: "Midnight Absinthe",

    梅比乌斯: "Mobisus",
    "无限·噬界之蛇": "Infinite Ouroboros",

    "卡萝尔·佩珀": "Carole Pepper",
    甜辣女孩: "Sweet n Spicy",
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
