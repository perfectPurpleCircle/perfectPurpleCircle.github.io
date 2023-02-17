dataSetVersion = "2023-01-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "gen",
    tooltip: "Check this to restrict to certain generations.",
    checked: true,
    sub: [
      { name: "1st Gen", tooltip: "1st generation", key: "firstgen", checked: false },
      { name: "2nd Gen", tooltip: "2nd generation", key: "secondgen", checked: false },
      { name: "3rd Gen", tooltip: "3rd generation", key: "thirdgen", checked: false },
      { name: "4th Gen", tooltip: "4th generation", key: "fourthgen", checked: false },
      { name: "5th Gen", tooltip: "5th generation", key: "fifthgen", checked: false },
      { name: "Kennin Member", tooltip: "Kennin Member", key: "kennin", checked: false },
      { name: "1st Gen Graduated", tooltip: "Only graduated 1st Gen members", key: "grad1", checked: false },
      { name: "2nd Gen Graduated", tooltip: "Only graduated 2nd Gen members", key: "grad2", checked: false },
      { name: "3rd Gen Graduated", tooltip: "Only graduated 3rd Gen members", key: "grad3", checked: false },
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

  // First Generation

  {
    name: "Akimoto Manatsu",
    img: "akimoto_manatsu.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Saito Asuka",
    img: "saito_asuka.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Wada Maaya",
    img: "wada_maaya.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Higuchi Hina",
    img: "higuchi_hina.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Hoshino Minami",
    img: "hoshino_minami.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Ikuta Erika",
    img: "ikuta_erika.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Takayama Kazumi",
    img: "takayama_kazumi.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Matsumura Sayuri",
    img: "matsumura_sayuri.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Shiraishi Mai",
    img: "shiraishi_mai.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Nakada Kana",
    img: "nakada_kana.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Inoue Sayuri",
    img: "inoue_sayuri.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Saito Yuuri",
    img: "saito_yuuri.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Sakurai Reika",
    img: "sakurai_reika.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Eto Misa",
    img: "eto_misa.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Nishino Nanase",
    img: "nishino_nanase.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Kawago Hina",
    img: "kawago_hina.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Noujo Ami",
    img: "noujo_ami.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Wakatsuki Yumi",
    img: "wakatsuki_yumi.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Saito Chiharu",
    img: "saito_chiharu.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Ikoma Rina",
    img: "ikoma_rina.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Kawamura Mahiro",
    img: "kawamura_mahiro.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Nakamoto Himeka",
    img: "nakamoto_himeka.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Ito Marika",
    img: "ito_marika.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Hashimoto Nanami",
    img: "hashimoto_nanami.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Fukagawa Mai",
    img: "fukagawa_mai.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Nagashima Seira",
    img: "nagashima_seira.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Hatanaka Seira",
    img: "hatanaka_seira.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Yamato Rina",
    img: "yamato_rina.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Ito Nene",
    img: "ito_nene.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Ichiki Rena",
    img: "ichiki_rena.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Miyazawa Seira",
    img: "miyazawa_seira.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Kashiwa Yukina",
    img: "kashiwa_yukina.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Ando Mikumo",
    img: "ando_mikumo.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Iwase Yumiko",
    img: "iwase_yumiko.jpg",
    opts: {
      gen: [ "firstgen", "grad1" ],
      gdt: true
    }
  },
  {
    name: "Matsui Rena",
    img: "matsui_rena.jpg",
    opts: {
      gen: [ "kennin" ],
      gdt: true
    }
  },

  // Second Generation

  {
    name: "Suzuki Ayane",
    img: "suzuki_ayane.jpg",
    opts: {
      gen: [ "Secondgen"],
    }
  },
  {
    name: "Yamazaki Rena",
    img: "yamazaki_rena.jpg",
    opts: {
      gen: [ "Secondgen" , "grad2" ],
      gdt: true
    }
  },
  {
    name: "Kitano Hinako",
    img: "kitano_hinako.jpg",
    opts: {
      gen: [ "Secondgen" , "grad2" ],
      gdt: true
    }
  },
  {
    name: "Shinuchi Mai",
    img: "shinuchi_mai.jpg",
    opts: {
      gen: [ "Secondgen" , "grad2" ],
      gdt: true
    }
  },
  {
    name: "Terada Ranze",
    img: "terada_ranze.jpg",
    opts: {
      gen: [ "Secondgen" , "grad2" ],
      gdt: true
    }
  },
  {
    name: "Watanabe Miria",
    img: "watanabe_miria.jpg",
    opts: {
      gen: [ "Secondgen" , "grad2" ],
      gdt: true
    }
  },
  {
    name: "Ito Junna",
    img: "ito_junna.jpg",
    opts: {
      gen: [ "Secondgen" , "grad2" ],
      gdt: true
    }
  },
  {
    name: "Hori Miona",
    img: "hori_miona.jpg",
    opts: {
      gen: [ "Secondgen" , "grad2" ],
      gdt: true
    }
  },
  {
    name: "Sasaki Kotoko",
    img: "sasaki_kotoko.jpg",
    opts: {
      gen: [ "Secondgen" , "grad2" ],
      gdt: true
    }
  },
  {
    name: "Ito Karin",
    img: "ito_karin.jpg",
    opts: {
      gen: [ "Secondgen" , "grad2" ],
      gdt: true
    }
  },
  {
    name: "Sagara Iori",
    img: "sagara_iori.jpg",
    opts: {
      gen: [ "Secondgen" , "grad2" ],
      gdt: true
    }
  },

  // Third Generation

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
    name: "Ozono Momoko",
    img: "ozono_momoko.jpg",
    opts: {
      gen: [ "thirdgen", "grad3" ],
      gdt: true
    }
  },

  // Fourth Generation

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
    name: "Kuromi Haruka",
    img: "kuromi_haruka.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Sato Rika",
    img: "sato_rika.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Hayashi Runa",
    img: "hayashi_runa.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Matsuo Miyu",
    img: "matsuo_miyu.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },
  {
    name: "Yumiki Nao",
    img: "yumiki_nao.jpg",
    opts: {
      gen: [ "fourthgen" ],
    }
  },

  // Fifth Generation

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
