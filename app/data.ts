import { getDefaultAutoSelectFamily } from "net";
import { exportPages } from "next/dist/export/worker";
import { stderr } from "process"

// export type Club = {
//     id: number,
//     slug: string,
//     name: string,
//     date: string,
//     costs: string,
//     imagePath: string,
//     explain: string,
//     detail: string,
//     class: string
//     tag: string
// };

export type Semi = {
    id: number,
    name: string,
    imagePath: string,
    date: string,
    explain: string,
    class: string
}

// const testPath = function decideClassify() {
//     const [clubClass, setClubClass] = useState(null);

//     const ichiounopath = function setClubClass(isArticle = true) {
//         if (isArticle)
//             return ("article");
//         else
//             return ("sports");
//     };
//     return(ichiounopath());
// }

// 別のファイルから与えられたboolean値によってファイルパスを自動で指定する関数

// const testPath = 


// const thisistestpath = function ({isArticle = true}:{isArticle: boolean}) {
//     if(isArticle)
//         return("article");
//     else
//         return("sports");
// }
// console.log(thisistestpath);

const makeImagePath = (classify: string, name: string) => {
    // .pngなど拡張子を扱う関数は必要に応じて作成する。

    const noImagePath = '/images/no-image.png';
    // const imagePath = `/images/clubs/${decideImagePath(clubClass)}/${clubName}.png`
    // これelseにnoimageを入れたほうがいいな予期しないバグがなくなる要訂正、検証
    const tempImagePath = `/images/clubs/${classify}/${name}.png`
    if (name === 'noimage' || !(classify == 'sports' || classify === 'article'))
        return (noImagePath)
    else
        return tempImagePath;
}


// const groupStatus = [{
//     status: "非公認サークル"
// }]

// const clubTagList = [{
//     tag: "初心者歓迎"
// }, {
//     tag: "経験者歓迎"
// }, {
//     tag: "大会あり"
// }, {
//     tag: "大会なし"
// }, {
//     tag: "忙しい"
// }, {
//     tag: "のんびり"
// }, {
//     tag: "仲良し"
// }, {
//     tag: "学術団体"
// }, {
//     tag: "体育系"
// }, {
//     tag: "文化系"
// }, {
//     tag: "部活動"
// }, {
//     tag: "公認サークル"
// }, {
//     tag: "非公認サークル"
// }, {
//     tag: "学生団体"
// }]

// const semiTagList = [{
//     tag: "経済学部"
// }, {
//     tag: "法学部"
// }, {
//     tag: "国際教養学部"
// }, {
//     tag: "外国語学部"
// }
// ]

export type Club = {
    id: number
    slug: string
    name: string
    day: string
    date: string
    location: string
    costs: string
    imagePath: string
    explain: string
    detail: string
    sns: string
    class: string
    tag: string
};

// twitterのアカウントリンクはインスタと比べて簡単に作れる。より簡単にするためにmakeTwitterLink関数を作るべきかも
// 年間予定表も追加予定
export const clubList: Club[] = [{
    id: 1,
    slug: "gakuyukai",
    name: "学友会本部",
    day: "月〜金",
    date: "月〜金（12:50~13:20）",
    location: "学生センター3F",
    costs: "なし",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "部活・サークルを統括する団体",
    detail: "不明",
    sns: "https://dokkyogakuyukai.wixsite.com/1964, https://www.instagram.com/dokkyo_gakuyu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    class: "公的団体",
    tag: "なし"
}, {
    id: 2,
    slug: "aikoukaihonbu",
    name: "愛好会本部",
    day: "月〜金",
    date: "月〜金（12:50~13:20）",
    location: "学生センター3F",
    costs: "なし",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "文化系の部活を統括する団体",
    detail: "不明",
    sns: "https://aikoukaihonbu.jimdofree.com/, https://www.instagram.com/bunkahp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/bunkahp?s=20",
    class: "公的団体",
    tag: "なし"
}, {
    id: 3,
    slug: "jetmovie",
    name: "映画研究会　 JET MOVIE",
    day: "水",
    date: "水(15:30〜)",
    location: "E棟, 小講堂, 部室",
    costs: "半期2,500円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/eiken_dokkyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/jetmovie?s=20",
    class: "文化系, 部活",
    tag: "映画"
}, {
    id: 4,
    slug: "essdokkyo",
    name: "英語会(E.S.S.)",
    day: "月火木",
    date: "月火木(昼、放課後)",
    location: "4棟, E棟",
    costs: "半期3,000円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/ess_dokkyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/dokkyo_ESS?s=20",
    class: "文化系, 部活",
    tag: "語学系, 英語"
}, {
    id: 5,
    slug: "akatuki",
    name: "演劇研究会 劇団あかつき",
    day: "月・金",
    date: "月金(4限後)",
    location: "小講堂, 学内施設",
    costs: "入会費：1,000円 年：2,000円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/drama.akatsuki?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/MKRYMY?s=20",
    class: "文化系, 部活",
    tag: "演劇"
}, {
    id: 6,
    slug: "deco",
    name: "環境・国際団体 Deco",
    day: "水",
    date: "水",
    location: "学生センター、学外",
    costs: "なし",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/deco_dokkyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    class: "文化系, 部活",
    tag: "環境, 国際系, 部費なし"
}, {
    id: 7,
    slug: "orchestra",
    name: "管弦楽部",
    day: "水・土",
    date: "水(3限後〜19:00), 土(13:00〜17:00)",
    location: "E棟, 学生センターホール",
    costs: "月費：2,000円、演奏会費",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyo_orchestra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/DokkyoOrchestra?s=20",
    class: "文化系, 部活",
    tag: "管弦, オーケストラ"
}, {
    id: 8,
    slug: "kigyoken",
    name: "企業経営研究会",
    day: "不定",
    date: "不定",
    location: "学生センター6階 608",
    costs: "入会費：500円、活動費：半期2,000円",
    imagePath: makeImagePath('article', 'logo'),
    explain: "ゆるく活動しています！",
    detail: "企業への訪問や新規プロジェクトなどをゆるくやってます！部室では課題や自分のやりたいプロジェクトを進めています。居場所が欲しい方や企業の方と関わりたい方はぜひ入ってみて下さい！お菓子など食べながらのんびり活動しませんか？",
    sns: "https://www.instagram.com/kigyokeieikenkyuukai/?utm_source=ig_web_button_share_sheet",
    class: "文化系, 部活",
    tag: "企業, 起業, 学術団体, 部費なし"
}, {
    id: 9,
    slug: "swingincats",
    name: "Swingin' Cats J.O.",
    day: "水・日",
    date: "水 16:30〜19:30, 日 13:00〜16:00",
    location: "学生センター2階",
    costs: "半期15,000円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/swingincats?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/dokkyo_cats?s=20",
    class: "文化系, 部活",
    tag: "音楽系, 軽音, バンド"
}, {
    id: 10,
    slug: "popsection",
    name: "ポップセクション",
    day: "木・土",
    date: "木 3限後〜, 土 15:00〜",
    location: "学生センター3階",
    costs: "なし",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/popsdokkyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    class: "文化系, 部活",
    tag: "音楽系, 軽音, バンド, 部費なし"
}, {
    id: 11,
    slug: "rocksection",
    name: "ロックセクション",
    day: "月〜木・土",
    date: "木（部会）、月〜水・土（選択可）",
    location: "音楽練習場, 小講堂",
    costs: "4,000円 + 2,000円（新入部員）",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/rocksection_dokkyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/rocksectiondk?s=20",
    class: "文化系, 部活",
    tag: "音楽系, 軽音, バンド"
}, {
    id: 12,
    slug: "kouken",
    name: "広告研究会",
    day: "木",
    date: "木 4限後",
    location: "部室、W棟",
    costs: "なし",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyo_kouken?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/dokkouken?s=20",
    class: "文化系, 部活",
    tag: "コンテスト主催, 部費なし"
}, {
    id: 13,
    slug: "diac",
    name: "国際親善倶楽部　DIAC",
    day: "水曜",
    date: "水曜",
    location: "大学内",
    costs: "半期：2,000円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/diac_koho?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/diac_info?s=20",
    class: "文化系, 部活",
    tag: "国際系, 国際交流"
}, {
    id: 14,
    slug: "ktg",
    name: "古典ギター部",
    day: "月曜・水曜",
    date: "月水（16:00〜19:00）",
    location: "学生センター、部室、E-203",
    costs: "半期：5,000円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyo_ktg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/dokkyo_ktg?s=20",
    class: "文化系, 部活",
    tag: "音楽系, ギター"
}, {
    id: 15,
    slug: "chorus",
    name: "混声合唱部",
    day: "不明",
    date: "不明",
    location: "学生センター3, 6階",
    costs: "不明",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://x.com/dokkyo_chrous?s=20",
    class: "文化系, 部活",
    tag: "音楽系, 合唱"
}, {
    id: 16,
    slug: "sakado",
    name: "茶華道部",
    day: "水曜",
    date: "水3限後〜18:00",
    location: "学生センター3階",
    costs: "月費：500円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dok_sakado?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/dok_sakado?s=20",
    class: "文化系, 部活",
    tag: "茶道, 華道"
}, {
    id: 17,
    slug: "photoclub",
    name: "写真部",
    day: "不定期",
    date: "不定期",
    location: "部室、屋外",
    costs: "年費：6,000円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyo_photo.2025?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/dokkyo_photo?s=20",
    class: "文化系, 部活",
    tag: "写真"
}, {
    id: 18,
    slug: "shodo",
    name: "書道研究会",
    day: "水曜・金曜",
    date: "水金3限後",
    location: "学生センター503",
    costs: "半期：3,000円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyosuzuri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/dokkyo_shodo?s=20",
    class: "文化系, 部活",
    tag: "書道"
}, {
    id: 19,
    slug: "bsc",
    name: "聖書研究会",
    day: "木曜",
    date: "木曜16:00〜",
    location: "学生センター417",
    costs: "0",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/bsc_dokkyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/bscdokkyo?s=20",
    class: "文化系, 部活",
    tag: "聖書, 部費なし"
}, {
    id: 20,
    slug: "shuwa",
    name: "手話部",
    day: "月曜・火曜",
    date: "月（5限後）, 火（昼）",
    location: "学生センター416",
    costs: "年費：500円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://x.com/dokkyo_shuwa?s=20",
    class: "文化系, 部活",
    tag: "手話"
}, {
    id: 21,
    slug: "astronomy",
    name: "天文研究会",
    day: "不定期",
    date: "不定期",
    location: "部室、フリースペース、学外",
    costs: "0",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyo_astronomy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/d_astoronomy?s=20",
    class: "文化系, 部活",
    tag: "天文, 部費なし, ゆったり"
}, {
    id: 22,
    slug: "ddoiken",
    name: "ドイツ研究会",
    day: "週一度",
    date: "週一度",
    location: "フリースペース, 414",
    costs: "0",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyo_doiken.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/ddoiken?s=20",
    class: "文化系, 部活",
    tag: "語学系, ドイツ語, 部費なし"
}, {
    id: 23,
    slug: "duk",
    name: "ドイツ語会話研究会　D.U.K.",
    day: "月曜",
    date: "月曜　昼",
    location: "ICZ",
    costs: "半期：1,000円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyo_duk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/dokkyo_DUK_?s=20",
    class: "文化系, 部活",
    tag: "語学系, ドイツ語, 国際系"
}, {
    id: 24,
    slug: "sssi",
    name: "同時通訳研究会",
    day: "週2, 3回",
    date: "週2, 3回　昼",
    location: "ICZ, 学生センター6F",
    costs: "0",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/du__sssi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    class: "文化系, 部活",
    tag: "語学系, 国際交流, 国際系, 部費なし"
}, {
    id: 25,
    slug: "artclub",
    name: "美術部",
    day: "金",
    date: "金　4限後〜20:00",
    location: "学生センター4F アトリエ",
    costs: "半期：3,500円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyoartclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    class: "文化系, 部活",
    tag: "美術系, 芸術系"
}, {
    id: 26,
    slug: "yerbabuena",
    name: "フラメンコ部　YERBA BUENA",
    day: "火曜・金曜",
    date: "火曜・金曜",
    location: "黎明・暁月ホール",
    costs: "半期：25,000",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyo_yerbabuena?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/yerbabuena_2013?s=20",
    class: "文化系, 部活",
    tag: "ダンス, フラメンコ"
}, {
    id: 27,
    slug: "bungei",
    name: "文芸部",
    day: "火木",
    date: "火木　放課後",
    location: "学生センター504",
    costs: "合宿費15,000円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyo.bungei?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/dokkyobungei?s=20",
    class: "文化系, 部活",
    tag: "文芸, 部費なし"
}, {
    id: 28,
    slug: "bc",
    name: "放送研究会",
    day: "月木",
    date: "月木　17:30〜",
    location: "部室・共有スペース",
    costs: "半期：5,000",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyobc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/dokkyobc?s=20",
    class: "文化系, 部活",
    tag: "放送"
}, {
    id: 29,
    slug: "jazzken",
    name: "モダンジャズ研究会",
    day: "金曜",
    date: "金　17:20〜20:00",
    location: "音楽練習場",
    costs: "入部：3,000円, 半期：3,000円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/jazz_ken5?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/d_jazzken?s=20",
    class: "文化系, 部活",
    tag: "ジャズ"
}, {
    id: 30,
    slug: "mandolin",
    name: "マンドリンクラブ",
    day: "月水金",
    date: "月水16:30〜18:30, 金13:30〜16:30",
    location: "共有スペース",
    costs: "半期：7,500円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyo_mandolin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/dmc_freshman?s=20",
    class: "文化系, 部活",
    tag: "マンドリン"
}, {
    id: 31,
    slug: "manken",
    name: "漫画研究会",
    day: "金曜",
    date: "金　17:30〜",
    location: "E棟",
    costs: "半期：1,500円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/manken_dokkyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/manken_dokkyo?s=20",
    class: "文化系, 部活",
    tag: "芸術系, 漫画"
}, {
    id: 32,
    slug: "dns",
    name: "被服研究会　DNS",
    day: "週二回",
    date: "週二回",
    location: "学生センター",
    costs: "年費：2,500円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dnsfashion__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    class: "文化系, 部活",
    tag: "ファッション系"
}, {
    id: 33,
    slug: "singingclub",
    name: "Singing Club",
    day: "火・土",
    date: "火 16:30〜19:15, 土 9:00〜16:00",
    location: "音楽練習場",
    costs: "合宿費 70,000円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://www.instagram.com/dokkyo_singingclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==, https://x.com/dokkyo_singingclub?s=20",
    class: "文化系, 部活",
    tag: "音楽系, 軽音, バンド"
}, {
    id: 34,
    slug: "bordgame",
    name: "ボードゲーム研究会",
    day: "不定",
    date: "不定",
    location: "フリースペース, 学生センター6F",
    costs: "半期：500円",
    imagePath: makeImagePath('article', 'noimage'),
    explain: "不明",
    detail: "不明",
    sns: "https://x.com/dokkyowahhul?s=20",
    class: "文化系, 部活",
    tag: "ボードゲーム, ゆるい"
}]



export const semiList: Semi[] = [{
    id: 1,
    name: "佐々木ゼミ",
    date: "月・水・金",
    imagePath: makeImagePath('economy', 'sasaki'),
    explain: "税制論",
    class: "ecomomy"
}, {
    id: 2,
    name: "鈴木ゼミ",
    date: "火・水・金",
    imagePath: makeImagePath('infoscience', 'suzuki'),
    explain: "情報認知学",
    class: "infoscience"
}, {
    id: 3,
    name: "田中（智）ゼミ",
    date: "不定",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "ゲーム理論",
    class: "sports"
}, {
    id: 4,
    name: "木村ゼミ",
    date: "平日毎日",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "憲法論",
    class: "sports"
}, {
    id: 5,
    name: "有吉ゼミ",
    date: "月",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "マーケティング",
    class: "sports"
}, {
    id: 6,
    name: "田中（美）ゼミ",
    date: "火・木・土",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "企業論",
    class: "sports"
}, {
    id: 7,
    name: "喜安ゼミ",
    date: "月・火",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "翻訳学",
    class: "sports"
}, {
    id: 8,
    name: "橋本ゼミ",
    date: "月水金",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "経済数学",
    class: "sports"
}]

// あいまい検索のアルゴリズム→にゅうry録された検索ワードと、各データベースの名前とを一文字ずつ比較し、合っているかを点数化する。