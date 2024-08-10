dataSetVersion = "2023-01-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Nogizaka46",
    key: "ngk46",
    tooltip: "Check this to restrict to certain generations.",
    checked: false,
    sub: [
      { name: "3rd Gen", tooltip: "3rd generation", key: "thirdgen", checked: false },
      { name: "4th Gen", tooltip: "4th generation", key: "fourthgen", checked: false },
      { name: "5th Gen", tooltip: "5th generation", key: "fifthgen", checked: false },
      { name: "Kennin Member", tooltip: "Kennin Member", key: "kennin", checked: false },
      { name: "1st Gen Graduated", tooltip: "Only graduated 1st Gen members", key: "grad1", checked: false },
      { name: "2nd Gen Graduated", tooltip: "Only graduated 2nd Gen members", key: "grad2", checked: false },
      { name: "3rd Gen Graduated", tooltip: "Only graduated 3rd Gen members", key: "grad3", checked: false },
      { name: "4th Gen Graduated", tooltip: "Only graduated 4th Gen members", key: "grad4", checked: false },
    ]
  },
  {
    name: "Sakurazaka46",
    key: "skrk46",
    tooltip: "Check this to restrict to certain generations.",
    checked: false,
    sub: [
      { name: "1st Gen", tooltip: "1st generation", key: "1stgenSak", checked: false },
      { name: "2nd Gen", tooltip: "2nd generation", key: "2ndgenSak", checked: false },
      { name: "3rd Gen", tooltip: "3rd generation", key: "3rdgenSak", checked: false },
      { name: "1st Gen Graduated", tooltip: "Only graduated 1st Gen members", key: "grad1Sak", checked: false },
      { name: "2nd Gen Graduated", tooltip: "Only graduated 2nd Gen members", key: "grad2Sak", checked: false },
    ]
  },
  {
    name: "Hinatazaka46",
    key: "hntk46",
    tooltip: "Check this to restrict to certain generations.",
    checked: false,
    sub: [
      { name: "1st Gen", tooltip: "1st generation", key: "1stgenHin", checked: false },
      { name: "2nd Gen", tooltip: "2nd generation", key: "2ndgenHin", checked: false },
      { name: "3rd Gen", tooltip: "3rd generation", key: "3rdgenHin", checked: false },
      { name: "4th Gen", tooltip: "4th generation", key: "4thgenHin", checked: false },
      { name: "1st Gen Graduated", tooltip: "Only graduated 1st Gen members", key: "grad1Hin", checked: false },
      { name: "2nd Gen Graduated", tooltip: "Only graduated 2nd Gen members", key: "grad2Hin", checked: false },
    ]
  },
  {
    name: "Check to remove graduated members",
    key: "gdt",
    tooltip: "Check this to remove graduated members.",
    checked: false,
  }
];

dataSet[dataSetVersion].characterData = [
  /* NOGIZAKA46 */
  // First Generation
  {
    name: "Akimoto Manatsu",
    img: "akimoto_manatsu.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Saito Asuka",
    img: "saito_asuka.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Wada Maaya",
    img: "wada_maaya.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Higuchi Hina",
    img: "higuchi_hina.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Hoshino Minami",
    img: "hoshino_minami.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Ikuta Erika",
    img: "ikuta_erika.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Takayama Kazumi",
    img: "takayama_kazumi.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Matsumura Sayuri",
    img: "matsumura_sayuri.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Shiraishi Mai",
    img: "shiraishi_mai.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Nakada Kana",
    img: "nakada_kana.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Inoue Sayuri",
    img: "inoue_sayuri.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Saito Yuuri",
    img: "saito_yuuri.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Sakurai Reika",
    img: "sakurai_reika.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Eto Misa",
    img: "eto_misa.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Nishino Nanase",
    img: "nishino_nanase.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Kawago Hina",
    img: "kawago_hina.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Noujo Ami",
    img: "noujo_ami.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Wakatsuki Yumi",
    img: "wakatsuki_yumi.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Saito Chiharu",
    img: "saito_chiharu.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Ikoma Rina",
    img: "ikoma_rina.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Kawamura Mahiro",
    img: "kawamura_mahiro.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Nakamoto Himeka",
    img: "nakamoto_himeka.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Ito Marika",
    img: "ito_marika.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Hashimoto Nanami",
    img: "hashimoto_nanami.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Fukagawa Mai",
    img: "fukagawa_mai.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Nagashima Seira",
    img: "nagashima_seira.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Hatanaka Seira",
    img: "hatanaka_seira.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Yamato Rina",
    img: "yamato_rina.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Ito Nene",
    img: "ito_nene.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Ichiki Rena",
    img: "ichiki_rena.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Miyazawa Seira",
    img: "miyazawa_seira.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Kashiwa Yukina",
    img: "kashiwa_yukina.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Ando Mikumo",
    img: "ando_mikumo.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Iwase Yumiko",
    img: "iwase_yumiko.jpg",
    opts: {
      ngk46: [ "firstgen", "grad1" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Matsui Rena",
    img: "matsui_rena.jpg",
    opts: {
      ngk46: [ "kennin" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },

  // Second Generation

  {
    name: "Suzuki Ayane",
    img: "suzuki_ayane.jpg",
    opts: {
      ngk46: [ "Secondgen", "grad2"],
      skrk46: [],
      hntk46: [],
      gdt: true,
    }
  },
  {
    name: "Yamazaki Rena",
    img: "yamazaki_rena.jpg",
    opts: {
      ngk46: [ "Secondgen" , "grad2" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Kitano Hinako",
    img: "kitano_hinako.jpg",
    opts: {
      ngk46: [ "Secondgen" , "grad2" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Shinuchi Mai",
    img: "shinuchi_mai.jpg",
    opts: {
      ngk46: [ "Secondgen" , "grad2" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Terada Ranze",
    img: "terada_ranze.jpg",
    opts: {
      ngk46: [ "Secondgen" , "grad2" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Watanabe Miria",
    img: "watanabe_miria.jpg",
    opts: {
      ngk46: [ "Secondgen" , "grad2" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Ito Junna",
    img: "ito_junna.jpg",
    opts: {
      ngk46: [ "Secondgen" , "grad2" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Hori Miona",
    img: "hori_miona.jpg",
    opts: {
      ngk46: [ "Secondgen" , "grad2" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Sasaki Kotoko",
    img: "sasaki_kotoko.jpg",
    opts: {
      ngk46: [ "Secondgen" , "grad2" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Ito Karin",
    img: "ito_karin.jpg",
    opts: {
      ngk46: [ "Secondgen" , "grad2" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Sagara Iori",
    img: "sagara_iori.jpg",
    opts: {
      ngk46: [ "Secondgen" , "grad2" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },

  // Third Generation

  {
    name: "Ito Riria",
    img: "ito_riria.jpg",
    opts: {
      ngk46: [ "thirdgen" ],
      skrk46: [],
      hntk46: [],
    }
  },
  {
    name: "Iwamoto Renka",
    img: "iwamoto_renka.jpg",
    opts: {
      ngk46: [ "thirdgen" ],
      skrk46: [],
      hntk46: [],
    }
  },
  {
    name: "Umezawa Minami",
    img: "umezawa_minami.jpg",
    opts: {
      ngk46: [ "thirdgen" ],
      skrk46: [],
      hntk46: [],
    }
  },
  {
    name: "Kubo Shiori",
    img: "kubo_shiori.jpg",
    opts: {
      ngk46: [ "thirdgen" ],
      skrk46: [],
      hntk46: [],
    }
  },
  {
    name: "Sakaguchi Tamami",
    img: "sakaguchi_tamami.jpg",
    opts: {
      ngk46: [ "thirdgen", "grad3" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Sato Kaede",
    img: "sato_kaede.jpg",
    opts: {
      ngk46: [ "thirdgen" ],
      skrk46: [],
      hntk46: [],
    }
  },
  {
    name: "Nakamura Reno",
    img: "nakamura_reno.jpg",
    opts: {
      ngk46: [ "thirdgen" ],
      skrk46: [],
      hntk46: [],
    }
  },
  {
    name: "Mukai Hazuki",
    img: "mukai_hazuki.jpg",
    opts: {
      ngk46: [ "thirdgen" ],
      skrk46: [],
      hntk46: [],
    }
  },
  {
    name: "Yamashita Mizuki",
    img: "yamashita_mizuki.jpg",
    opts: {
      ngk46: [ "thirdgen", "grad3" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Yoshida Ayano Christie",
    img: "yoshida_ayano_christie.jpg",
    opts: {
      ngk46: [ "thirdgen" ],
      skrk46: [],
      hntk46: [],
    }
  },
  {
    name: "Yoda Yuuki",
    img: "yoda_yuuki.jpg",
    opts: {
      ngk46: [ "thirdgen" ],
      skrk46: [],
      hntk46: [],
    }
  },
  {
    name: "Ozono Momoko",
    img: "ozono_momoko.jpg",
    opts: {
      ngk46: [ "thirdgen", "grad3" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },

  // Fourth Generation 

  {
    name: "Endo Sakura",
    img: "endo_sakura.jpg",
    opts: {
      ngk46: [ "fourthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Kaki Haruka",
    img: "kaki_haruka.jpg",
    opts: {
      ngk46: [ "fourthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Kakehashi Sayaka",
    img: "kakehashi_sayaka.jpg",
    opts: {
      ngk46: [ "fourthgen","grad4" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Kanagawa Saya",
    img: "kanagawa_saya.jpg",
    opts: {
      ngk46: [ "fourthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Kitagawa Yuri",
    img: "kitagawa_yuri.jpg",
    opts: {
      ngk46: [ "fourthgen","grad4" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Shibata Yuna",
    img: "shibata_yuna.jpg",
    opts: {
      ngk46: [ "fourthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Seimiya Rei",
    img: "seimiya_rei.jpg",
    opts: {
      ngk46: [ "fourthgen", "grad4" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Tamura Mayu",
    img: "tamura_mayu.jpg",
    opts: {
      ngk46: [ "fourthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Tsutsui Ayame",
    img: "tsutsui_ayame.jpg",
    opts: {
      ngk46: [ "fourthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Hayakawa Seira",
    img: "hayakawa_seira.jpg",
    opts: {
      ngk46: [ "fourthgen", "grad4" ],
      skrk46: [],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Yakubo Mio",
    img: "yakubo_mio.jpg",
    opts: {
      ngk46: [ "fourthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Kuromi Haruka",
    img: "kuromi_haruka.jpg",
    opts: {
      ngk46: [ "fourthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Sato Rika",
    img: "sato_rika.jpg",
    opts: {
      ngk46: [ "fourthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Hayashi Runa",
    img: "hayashi_runa.jpg",
    opts: {
      ngk46: [ "fourthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Matsuo Miyu",
    img: "matsuo_miyu.jpg",
    opts: {
      ngk46: [ "fourthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Yumiki Nao",
    img: "yumiki_nao.jpg",
    opts: {
      ngk46: [ "fourthgen" ],
      skrk46: [],
      hntk46: []
    }
  },

  // Fifth Generation

  {
    name: "Ioki Mao",
    img: "ioki_mao.jpg",
    opts: {
      ngk46: [ "fifthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Ikeda Teresa",
    img: "ikeda_teresa.jpg",
    opts: {
      ngk46: [ "fifthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Ichinose Miku",
    img: "ichinose_miku.jpg",
    opts: {
      ngk46: [ "fifthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Inoue Nagi",
    img: "inoue_nagi.jpg",
    opts: {
      ngk46: [ "fifthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Okamoto Hina",
    img: "okamoto_hina.jpg",
    opts: {
      ngk46: [ "fifthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Ogawa Aya",
    img: "ogawa_aya.jpg",
    opts: {
      ngk46: [ "fifthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Okuda Iroha",
    img: "okuda_iroha.jpg",
    opts: {
      ngk46: [ "fifthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Kawasaki Sakura",
    img: "kawasaki_sakura.jpg",
    opts: {
      ngk46: [ "fifthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Sugawara Satsuki",
    img: "sugawara_satsuki.jpg",
    opts: {
      ngk46: [ "fifthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Tomisato Nao",
    img: "tomisato_nao.jpg",
    opts: {
      ngk46: [ "fifthgen" ],
      skrk46: [],
      hntk46: []
    }
  },
  {
    name: "Nakanishi Aruno",
    img: "nakanishi_aruno.jpg",
    opts: {
      ngk46: [ "fifthgen" ],
      skrk46: [],
      hntk46: []
    }
  },

/* Sakurazaka46 */  
  // 1st GENERATION
  {
    name: "Uemura Rina",
    img: "uemura_rina.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "1stgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Koike Minami",
    img: "koike_minami.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "1stgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Kobayashi Yui",
    img: "kobayashi_yui.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "1stgenSak", "grad1Sak" ],
      hntk46: [],
      gdt: true
    }
  },
  {
    name: "Saito Fuyuka",
    img: "saito_fuyuka.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "1stgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Habu Mizuho",
    img: "habu_mizuho.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "1stgenSak", "grad1Sak" ],
      hntk46: [],
      gdt: true
    }
  },

  // 2nd Generation
  {
    name: "Inoue Rina",
    img: "inoue_rina.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Endo Hikari",
    img: "endo_hikari.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Ozono Rei",
    img: "ozono_rei.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Onuma Akiho",
    img: "onuma_akiho.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Kousaka Marino",
    img: "kousaka_marino.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Seki Yumiko",
    img: "seki_yumiko.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak","grad2Sak" ],
      hntk46: [],
      gdt: true,
    }
  },
  {
    name: "Takemoto Yui",
    img: "takemoto_yui.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Tamura Hono",
    img: "tamura_hono.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Fujiyoshi Karin",
    img: "fujiyoshi_karin.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Masumoto Kira",
    img: "masumoto_kira.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Matsuda Rina",
    img: "matsuda_rina.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Morita Hikaru",
    img: "morita_hikaru.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Moriya Rena",
    img: "moriya_rena.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Yamasaki Ten",
    img: "yamasaki_ten.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "2ndgenSak" ],
      hntk46: []
    }
  },

  // 3rd Generation
  {
    name: "Ishimori Rika",
    img: "ishimori_rika.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "3rdgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Endo Riko",
    img: "endo_riko.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "3rdgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Odakura Reina",
    img: "odakura_reina.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "3rdgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Kojima Nagisa",
    img: "kojima_nagisa.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "3rdgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Taniguchi Airi",
    img: "taniguchi_airi.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "3rdgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Nakashima Yuzuki",
    img: "nakashima_yuzuki.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "3rdgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Matono Mio",
    img: "matono_mio.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "3rdgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Mukai Itoha",
    img: "mukai_itoha.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "3rdgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Murai Yu",
    img: "murai_yu.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "3rdgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Murayama Miu",
    img: "murayama_miu.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "3rdgenSak" ],
      hntk46: []
    }
  },
  {
    name: "Yamashita Shizuki",
    img: "yamashita_shizuki.jpg",
    opts: {
      ngk46: [],
      skrk46: [ "3rdgenSak" ],
      hntk46: []
    }
  },

/* Hinatazaka46 */  
  // 1st GENERATION
  {
    name: "Ushio Sarina",
    img: "ushio_sarina.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["1stgenHin", "grad1Hin"],
      gdt: true
    }
  },
  {
    name: "Kageyama Yuka",
    img: "kageyama_yuka.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["1stgenHin", "grad1Hin"],
      gdt: true
    }
  },
  {
    name: "Kato Shiho",
    img: "kato_shiho.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["1stgenHin", "grad1Hin"],
      gdt: true
    }
  },
  {
    name: "Saito Kyoko",
    img: "saito_kyoko.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["1stgenHin", "grad1Hin"],
      gdt: true
    }
  },
  {
    name: "Sasaki Kumi",
    img: "sasaki_kumi.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["1stgenHin"],
    }
  },
  {
    name: "Sasaki Mirei",
    img: "sasaki_mirei.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["1stgenHin"],
    }
  },
  {
    name: "Takase Mana",
    img: "takase_mana.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["1stgenHin"],
    }
  },
  {
    name: "Takamoto Ayaka",
    img: "takamoto_ayaka.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["1stgenHin", "grad1Hin"],
      gdt: true 
    }
  },
  {
    name: "Higashimura Mei",
    img: "higashimura_mei.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["1stgenHin", "grad1Hin"],
      gdt: true 
    }
  },
  // 2nd GENERATION
  {
    name: "Kanemura Miku",
    img: "kanemura_miku.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["2ndgenHin"],
    }
  },
  {
    name: "Kawata Hina",
    img: "kawata_hina.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["2ndgenHin"],
    }
  },
  {
    name: "Kosaka Nao",
    img: "kosaka_nao.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["2ndgenHin"],
    }
  },
  {
    name: "Tomita Suzuka",
    img: "tomita_suzuka.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["2ndgenHin"],
    }
  },
  {
    name: "Nibu Akari",
    img: "nibu_akari.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["2ndgenHin", "grad2Hin"],
      gdt: true 
    }
  },
  {
    name: "Hamagishi Hiyori",
    img: "hamagishi_hiyori.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["2ndgenHin", "grad2Hin"],
      gdt: true 
    }
  },
  {
    name: "Matsuda Konoka",
    img: "matsuda_konoka.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["2ndgenHin"],
    }
  },

  // 3rd GENERATION
  {
    name: "Kamimura Hinano",
    img: "kamimura_hinano.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["3rdgenHin"],
    }
  },
  {
    name: "Takahashi Mikuni",
    img: "takahashi_mikuni.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["3rdgenHin"],
    }
  },
  {
    name: "Morimoto Marie",
    img: "morimoto_marie.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["3rdgenHin"],
    }
  },
  {
    name: "Yamaguchi Haruyo",
    img: "yamaguchi_haruyo.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["3rdgenHin"],
    }
  },

  // 4th GENERATION
  {
    name: "Ishizuka Tamaki",
    img: "ishizuka_tamaki.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["4thgenHin"],
    }
  },
  {
    name: "Kishi Honoka",
    img: "kishi_honoka.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["4thgenHin","grad4Hin"],
      gdt: true
    }
  },
  {
    name: "Konishi Nanami",
    img: "konishi_nanami.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["4thgenHin"],
    }
  },
  {
    name: "Shimizu Rio",
    img: "shimizu_rio.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["4thgenHin"],
    }
  },
  {
    name: "Shogenji Yoko",
    img: "shogenji_yoko.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["4thgenHin"],
    }
  },
  {
    name: "Takeuchi Kirari",
    img: "takeuchi_kirari.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["4thgenHin"],
    }
  },
  {
    name: "Hirao Honoka",
    img: "hirao_honoka.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["4thgenHin"],
    }
  },
  {
    name: "Hiraoka Mitsuki",
    img: "hiraoka_mitsuki.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["4thgenHin"],
    }
  },
  {
    name: "Fujishima Kaho",
    img: "fujishima_kaho.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["4thgenHin"],
    }
  },
  {
    name: "Miyachi Sumire",
    img: "miyachi_sumire.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["4thgenHin"],
    }
  },
  {
    name: "Yamashita Haruka",
    img: "yamashita_haruka.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["4thgenHin"],
    }
  },
  {
    name: "Watanabe Rina",
    img: "watanabe_rina.jpg",
    opts: {
      ngk46: [],
      skrk46: [],
      hntk46: ["4thgenHin"],
    }
  },
  
];
