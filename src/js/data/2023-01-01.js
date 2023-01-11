dataSetVersion = "2023-01-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "gen",
    tooltip: "Check this to restrict to certain generations.",
    checked: false,
    sub: [
      { name: "1st Gen", tooltip: "1st generation", key: "firstgen" },
      { name: "2nd Gen", tooltip: "2nd generation", key: "secondgen" },
      { name: "3rd Gen", tooltip: "3rd generation", key: "thirdgen" },
      { name: "4th Gen", tooltip: "4th generation", key: "fourthgen" },
      { name: "5th Gen", tooltip: "5th generation", key: "fifthgen" },
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Akimoto Manatsu",
    img: "akimoto_manatsu.jpg",
    opts: {
      gen: [ "firstgen" ],
    }
  },
  // {
  //   name: "Saito Asuka",
  //   img: "saito_asuka.jpg",
  //   opts: {
  //     gen: [ "firstgen" ],
  //   }
  // },
  // {
  //   name: "Wada Maaya",
  //   img: "wada_maaya.jpg",
  //   opts: {
  //     gen: [ "firstgen" ],
  //   }
  // },
  {
    name: "Suzuki Ayane",
    img: "suzuki_ayane.jpg",
    opts: {
      gen: [ "secondgen" ],
    }
  },
  {
    name: "Ito Riria",
    img: "ito_riria.jpg",
    opts: {
      gen: [ "thirdgen" ],
    }
  },
  {
    name: "Iwamoto Renka",
    img: "iwamoto_renka.jpg",
    opts: {
      gen: [ "thirdgen" ],
    }
  },
  {
    name: "Umezawa Minami",
    img: "umezawa_minami.jpg",
    opts: {
      gen: [ "thirdgen" ],
    }
  },
  {
    name: "Kubo Shiori",
    img: "kubo_shiori.jpg",
    opts: {
      gen: [ "thirdgen" ],
    }
  },
  {
    name: "Sakaguchi Tamami",
    img: "sakaguchi_tamami.jpg",
    opts: {
      gen: [ "thirdgen" ],
    }
  },
  {
    name: "Sato Kaede",
    img: "sato_kaede.jpg",
    opts: {
      gen: [ "thirdgen" ],
    }
  },
  {
    name: "Nakamura Reno",
    img: "nakamura_reno.jpg",
    opts: {
      gen: [ "thirdgen" ],
    }
  },
  {
    name: "Mukai Hazuki",
    img: "mukai_hazuki.jpg",
    opts: {
      gen: [ "thirdgen" ],
    }
  },
  {
    name: "Yamashita Mizuki",
    img: "yamashita_mizuki.jpg",
    opts: {
      gen: [ "thirdgen" ],
    }
  },
  {
    name: "Yoshida Ayano Christie",
    img: "yoshida_ayano_christie.jpg",
    opts: {
      gen: [ "thirdgen" ],
    }
  },
  {
    name: "Yoda Yuki",
    img: "yoda_yuki.jpg",
    opts: {
      gen: [ "thirdgen" ],
    }
  },
  {
    name: "Endo Sakura",
    img: "endo_sakura.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Kaki Haruka",
    img: "kaki_haruka.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Kakehashi Sayaka",
    img: "kakehashi_sayaka.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Kanagawa Saya",
    img: "kanagawa_saya.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Kitagawa Yuri",
    img: "kitagawa_yuri.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Shibata Yuna",
    img: "shibata_yuna.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Seimiya Rei",
    img: "seimiya_rei.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Tamura Mayu",
    img: "tamura_mayu.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Tsutsui Ayame",
    img: "tsutsui_ayame.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Hayakawa Seira",
    img: "hayakawa_seira.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Yakubo Mio",
    img: "yakubo_mio.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Ioki Mao",
    img: "ioki_mao.jpg",
    opts: {
      gen: [ "fifthgen" ],
    }
  },
  {
    name: "Ikeda Teresa",
    img: "ikeda_teresa.jpg",
    opts: {
      gen: [ "fifthgen" ],
    }
  },
  {
    name: "Ichinose Miku",
    img: "ichinose_miku.jpg",
    opts: {
      gen: [ "fifthgen" ],
    }
  },
  {
    name: "Inoue Nagi",
    img: "inoue_nagi.jpg",
    opts: {
      gen: [ "fifthgen" ],
    }
  },
  {
    name: "Okamoto Hina",
    img: "okamoto_hina.jpg",
    opts: {
      gen: [ "fifthgen" ],
    }
  },
  {
    name: "Ogawa Aya",
    img: "ogawa_aya.jpg",
    opts: {
      gen: [ "fifthgen" ],
    }
  },
  {
    name: "Okuda Iroha",
    img: "okuda_iroha.jpg",
    opts: {
      gen: [ "fifthgen" ],
    }
  },
  {
    name: "Kawasaki Sakura",
    img: "kawasaki_sakura.jpg",
    opts: {
      gen: [ "fifthgen" ],
    }
  },
  {
    name: "Sugawara Satsuki",
    img: "sugawara_satsuki.jpg",
    opts: {
      gen: [ "fifthgen" ],
    }
  },
  {
    name: "Tomisato Nao",
    img: "tomisato_nao.jpg",
    opts: {
      gen: [ "fifthgen" ],
    }
  },
  {
    name: "Nakanishi Aruno",
    img: "nakanishi_aruno.jpg",
    opts: {
      gen: [ "fifthgen" ],
    }
  },
];
