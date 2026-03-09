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

// 年間予定表も追加予定
export const clubList: Club[] = [{
    id: 1,
    slug: "dokkyoinfo",
    name: "Dokkyo-Info.",
    date: "不定",
    location: "学生センター6階",
    costs: "なし",
    imagePath: makeImagePath('sports', 'basketball'),
    explain: "当サイトを運営しています！",
    detail: "獨協大学の非公式情報メディアを運営。this is text.this is text.this is text.this is text.this is text.this is text.this is text.this is text.this is text.this is text.this is text.this is text.this is text.this is text.this is text.this is text.",
    sns: "https://note.com/dokkyo_info, https://www.instagram.com/dokkyo_info?igsh=bnF0dXRtbmUxOG9n&utm_source=qr, https://x.com/Duinfo_koho",
    class: "準公認, 体育系, インカレ, 部費なし",
    tag: "初心者歓迎, 仲良し, 大会あり"
}, {
    id: 2,
    slug: "tenis",
    name: "テニス: GreenLand",
    date: "火・水・金",
    location: "グラウンド",
    costs: "入会費：500円、活動費：半期2000円",
    imagePath: makeImagePath('article', 'logo'),
    explain: "ゆっくり活動しています！",
    detail: "テニススクール出身が多め",
    sns: "https://www.instagram.com/dokkyo_info?igsh=bnF0dXRtbmUxOG9n&utm_source=qr, https://x.com/Duinfo_koho",
    class: "公認, 体育系, 部活",
    tag: "初心者歓迎, 仲良し, 大会あり"
}, {
    id: 3,
    slug: "economy",
    name: "フェアトレード LAN",
    date: "不定",
    location: "学生センター1階",
    costs: "入会費：500円、活動費：半期2000円",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "不真面目募集。",
    detail: "正直経済学関連より社会学系の活動してます。",
    sns: "https://www.instagram.com/dokkyo_info?igsh=bnF0dXRtbmUxOG9n&utm_source=qr",
    class: "非公認, 文化系, サークル",
    tag: "初心者歓迎, 仲良し"
}, {
    id: 4,
    slug: "ocestra",
    name: "吹奏楽部",
    date: "平日毎日",
    location: "学生センター3階",
    costs: "入会費：500円、活動費：半期2000円",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "本気目指しませんか？",
    detail: "定期的に演奏会してますよ。是非の部活に入りましょう！",
    sns: "https://x.com/Duinfo_koho",
    class: "公認, 文化系, 部活",
    tag: "初心者歓迎, 体験型"
}, {
    id: 5,
    slug: "librarysupporter",
    name: "LIBRARY Supporters",
    date: "月",
    location: "図書館",
    costs: "入会費：500円、活動費：半期2000円",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "週に一度の会議のみ！",
    detail: "図書館で活動しています！本好きの方はぜひ！",
    sns: "",
    class: "公的団体, 文化系",
    tag: "経験者のみ, 仲良し"
}, {
    id: 6,
    slug: "cssemi",
    name: "計算機科学研究部ゼミ",
    date: "火・木・土",
    location: "E-201",
    costs: "入会費：500円、活動費：半期2000円",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "ハッカソン出場！",
    detail: "ハッカソンやアルゴリズム研究やっています！",
    sns: "",
    class: "公認, 文化系, サークル",
    tag: "初心者歓迎, 大会あり"
}, {
    id: 7,
    slug: "coding",
    name: "DU(code);",
    date: "月・火",
    location: "E-401",
    costs: "入会費：500円、活動費：半期2000円",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "獨協大学で珍しい学術団体です！",
    detail: "WEBアプリとか作れるようになれます。",
    sns: "",
    class: "公認, 文化系, サークル, 女子限定",
    tag: "大会あり"
}, {
    id: 8,
    slug: "basketballlynx",
    name: "バスケ: LINUX",
    date: "月水金",
    location: "体育館",
    costs: "入会費：500円、活動費：半期2000円",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "一部昇格目指して🔥",
    detail: "バスケサークルです！まじゆるくやっています！",
    sns: "",
    class: "学生団体, 体育系",
    tag: "春から大学, 初心者歓迎"
}, {
    id: 9,
    slug: "dancechemi",
    name: "ダンス：dancer",
    date: "火木",
    location: "学生センター2階",
    costs: "活動費：半期1000円",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "初心者歓迎！Kpop好き歓迎！",
    detail: "ダンス初心者歓迎！主にKpopとかのダンスやってます！",
    sns: "",
    class: "公認, サークル, 体育系",
    tag: "春から獨協, 初心者歓迎, ほのぼの"
}, {
    id: 10,
    slug: "gakuyukai",
    name: "学友会",
    date: "不定",
    location: "学生センター3階",
    costs: "なし",
    imagePath: makeImagePath('sports', 'noimage'),
    explain: "学内の部活・サークルを統括しています！",
    detail: "学内の部活・サークルに関する業務を統括しています。真面目募集！",
    sns: "",
    class: "公的団体",
    tag: ""
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