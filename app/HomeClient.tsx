"use client"

import { useState, useEffect} from "react"
import { clubList, semiList, Club, Semi } from './data'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPeopleRobbery, faChalkboardUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import { Josefin_Sans, Noto_Sans_JP } from "next/font/google";


const JosefinSans = Josefin_Sans({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-JosefinSans"
})

const NotoSansJp = Noto_Sans_JP({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-NotoSansJp"
})
// 設計　ヘッダー→サークル→ゼミ→記事→


// Stateをpropsで渡すときの型定義はfunctionより厳格にはReact.Dispatch<React.SetStateAction<TYPE>>にする。functionでもあり？
type BadgeProps = {
  groupClass: string;
  setKeyword?: React.Dispatch<React.SetStateAction<string>>;
}

type TagProps = {
  groupTag: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

type ClassCulb = {
  clubClass: string;
  setKeyword?: React.Dispatch<React.SetStateAction<string>>;
}

// 下のやついらない。複雑化しているため単純化させる必要あり
export function Badge({ groupClass, setKeyword }: BadgeProps) {
  return (
    // <div className="flex flex-wrap gap-1 text-[8px] md:text-[15px]">
    //   {groupClass.split(", ").map((classify) => (
    //     <button
    //       key={classify}
    //       onClick={() => setKeyword(classify)}
    //       className="bg-blue-100 hover:bg-blue-300 transition duration-300 p-1 px-2 w-fit rounded-full text-md"
    //     >
    //       {classify}
    //     </button>
    //   ))}
    // </div>
    <ClubClassify
      clubClass={groupClass}
      setKeyword={setKeyword}
    />
  )
}

export function Tag({ groupTag, setKeyword }: TagProps) {
  return (
    <div className="flex gap-1 flex-wrap mt-2">
      {groupTag.split(", ").map((tag) => (
        <button
          key={tag}
          onClick={() => setKeyword(tag)}
          className="px-2 py-1 border-gray-400 border-1 text-[11px] md:text-[15px] transition-colors duration-300 rounded-lg hover:border-gray-600"
        >
          #{tag}
        </button>
      ))}
    </div>
  )
}

// この関数をもう少し楽に書く方法を模索する
export function ClubClassify({ clubClass, setKeyword }: ClassCulb) {
  return (
    <div className="flex flex-wrap gap-1 md:flex">
      {clubClass.split(", ").map((clubClass) => {
        if (clubClass === '非公認') {
          return (
            // <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-red-300 py-1 px-2 rounded-full border-1 border-red-400">{clubClass}</div>
            <button key={clubClass} className="text-[12px] md:text-[12px] text-[#fff] w-fit h-fit  bg-rose-300 hover:bg-rose-400 transition duration-300 py-1 px-2 rounded-full border-1 border-red-400" onClick={() => setKeyword?.(clubClass)}><b>{clubClass}</b></button>
          )
        } else if (clubClass === '公認') {
          return (
            // <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-green-400 py-1 px-2 rounded-full border-1 border-green-500">{clubClass}</div>
            <button key={clubClass} className="text-[12px] md:text-[12px] text-[#fff] w-fit h-fit  bg-green-400 hover:bg-green-500 transition duration-300 py-1 px-2 rounded-full border-1 border-green-500" onClick={() => setKeyword?.(clubClass)}>{clubClass}</button>

          )
        } else if (clubClass === '準公認') {
          return (
            // <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-green-400 py-1 px-2 rounded-full border-1 border-green-500">{clubClass}</div>
            <button key={clubClass} className="text-[12px] md:text-[12px] text-[#fff] w-fit h-fit  bg-indigo-400 hover:bg-indigo-500 transition duration-300 py-1 px-2 rounded-full border-1 border-indigo-500" onClick={() => setKeyword?.(clubClass)}>{clubClass}</button>

          )
        } else if (clubClass === '体育系') {
          return (
            // <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-blue-400 py-1 px-2 rounded-full border-1 border-blue-500">{clubClass}</div>
            <button key={clubClass} className="text-[12px] md:text-[12px] text-[#fff] w-fit h-fit  bg-blue-400 hover:bg-blue-500 transition duration-300 py-1 px-2 rounded-full border-1 border-blue-500" onClick={() => setKeyword?.(clubClass)}>{clubClass}</button>

          )
        } else if (clubClass === '文化系') {
          return (
            // <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-yellow-400 py-1 px-2 rounded-full border-1 border-yellow-500">{clubClass}</div>
            <button key={clubClass} className="text-[12px] md:text-[12px] text-[#fff] w-fit h-fit  bg-yellow-400 hover:bg-yellow-500 transition duration-300 py-1 px-2 rounded-full border-1 border-yellow-500" onClick={() => setKeyword?.(clubClass)}>{clubClass}</button>

          )
        } else if (clubClass === '部活') {
          return (
            // <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-lime-400 py-1 px-2 rounded-full border-1 border-lime-500">{clubClass}</div>
            <button key={clubClass} className="text-[12px] md:text-[12px] text-[#fff] w-fit h-fit  bg-orange-400 hover:bg-orange-500 transition duration-300 py-1 px-2 rounded-full border-1 border-orange-500" onClick={() => setKeyword?.(clubClass)}>{clubClass}</button>

          )
        } else if (clubClass === 'サークル') {
          return (
            // <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-violet-400 py-1 px-2 rounded-full border-1 border-violet-500">{clubClass}</div>
            <button key={clubClass} className="text-[12px] md:text-[12px] text-[#fff] w-fit h-fit  bg-purple-400 hover:bg-purple-500 transition duration-300 py-1 px-2 rounded-full border-1 border-purple-500" onClick={() => setKeyword?.(clubClass)}>{clubClass}</button>

          )
        } else if (clubClass === '公的団体') {
          return (
            // <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-[#3e4957] py-1 px-2 rounded-full border-1 border-[#141b2a]">{clubClass}</div>
            <button key={clubClass} className="text-[12px] md:text-[12px] text-[#fff] w-fit h-fit  bg-[#3e4957] hover:bg-[#141b2a] transition duration-300 py-1 px-2 rounded-full border-1 border-[#141b2a]" onClick={() => setKeyword?.(clubClass)}>{clubClass}</button>

          )
        } else if (clubClass === '学生団体' || clubClass === 'インカレ') {
          return (
            // <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-taupe-400 py-1 px-2 rounded-full border-1 border-taupe-500">{clubClass}</div>
            <button key={clubClass} className="text-[12px] md:text-[12px] text-[#fff] w-fit h-fit  bg-slate-400 hover:bg-slate-500 transition duration-300 py-1 px-2 rounded-full border-1 border-slate-500" onClick={() => setKeyword?.(clubClass)}>{clubClass}</button>

          )
        } else {
          return (
            <button
              key={clubClass}
              className="text-[12px] md:text-[12px] text-[#000] w-fit h-fit  bg-white py-1 px-2 rounded-full border-1 hover:bg-taupe-900 hover:text-white transition duration-300"
              onClick={() => setKeyword?.(clubClass)}
            >
              {clubClass}
            </button>
          )
        }

      }

      )}

    </div>
  )
}

export default function App() {

  const [keyword, setKeyword] = useState("");
  const [randomClubs, setRandomClubs] = useState<Club[]>([]);
  const [randomSemi, setRandomSemi] = useState<Semi[]>([]);

  useEffect(() => {
    const normalizedKeyword = keyword.replace(/^#/, "").toLowerCase();

    const shuffuledClub = [...clubList]
      .filter((club) => {
        const nameMatch = club.name.toLowerCase().includes(normalizedKeyword);

        const tagMatch = club.tag
          .split(", ")
          .some((tag) =>
            tag.toLowerCase().includes(normalizedKeyword)
          );

        const classMach = club.class
          .split(", ")
          .some((classify) =>
            classify.toLowerCase().includes(normalizedKeyword)
          );

        return nameMatch || tagMatch || classMach;
      })
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    setRandomClubs(shuffuledClub);


    const shuffuledSemi = [...semiList]
      .filter((semi) =>
        semi.name.toLowerCase().includes(keyword.toLowerCase())
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
    setRandomSemi(shuffuledSemi);

  }, [keyword])

  return (
    <div className="dark:bg-[#0B0F17] pb-16">
    {/* <div className="bg-[#0a101d]"> */}
      {/* <section className="m-auto justify-center text-center py-20 md:py-30 lg: py40 bg-[url('/d_foto.jpg')] bg-cover bg-center font-bold text-3xl">
      </section> */}
      <div className="m-auto text-center text-lg pt-10 pb-5 md:py-20">
        <p className="text-lg md:text-3xl pb-2">大学の部活とゼミをまとめて探せるサイト</p>
        <p className="text-base md:text-xl">きっとピッタリな場所が見つかる。</p>
        <div className="text-sm text-gray-500 pt-5">
          <p>※情報は1年前のため、異なる場合があります。</p>
          <p>掲載申請は<strong><u><a href="https://www.instagram.com/dokkyo_info?igsh=bnF0dXRtbmUxOG9n&utm_source=qr">Instagram</a></u></strong>のDMにて受け付けています。</p>
        </div>
      </div>
      <div className="flex m-auto justify-center px-5 md:px-10 pt-10 pb-1">
        <input
          type="text"
          placeholder="探してみる"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="text-sm rounded-lg md:rounded-xl w-full h-fit py-2 md:py-3 pl-4 border-2 border-[#00D2DA] hover:border-sky-400 transition duration-300 focus:outline-none focus:border-sky-3000"
        />
      </div>


      {/* 複数タグ選択も今後実装予定（useStateを使用） */}
      {/* <section className="flex justify-between md:px-30"> */}
      {keyword && (
        <>
          <div className="flex items-center gap-3 pl-10 pb-1">
            <span className="text-sm md:text-md text-gray-500 pr-2">
              # {keyword} で検索中
              {/* { if (keyword === [clubList.tag]) {
                return(<p>{keyword}</p>)
              }} */}
            </span>

            <button
              onClick={() => setKeyword("")}
              className="text-sm md:text-md text-red-500 hover:underline"
            >
              × 検索解除
            </button>
          </div>
        </>
      )}
      {/* <div className="flex-wrap pb-10 pl-5 md:pl-10">
        <p className="text-sm md:text-base h-fit">人気上位のタグ：</p>
        <div>
            {["初心者歓迎", "仲良し", "大会あり"].map((tag) => (
              <button
                key={tag}
                onClick={() => setKeyword(tag)}
                className="px-3 py-1 border-gray-300 border-2 rounded-full transition-colors duration-300 hover:bg-gray-200 hover:border-gray-400 size-auto text-[12px] md:text-base"
              >
                #{tag}
              </button>
            ))}
          </div>
      </div> */}
      {/* </section> */}


      <section className="pt-10 pb-20"> {/* 部活サークル等の表示。ただし、このページでは４枚程度を表示する。 */}
        <p className="pl-5 md:pl-7 lg:pl-30 font-bold text-2xl pb-5">
          <FontAwesomeIcon icon={faPeopleRobbery} className="text-3xl pr-2 md:pr-5" />部活・サークル
        </p>
        <div className="bg-black-500 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-5 m-auto justify-center md:max-w-200 md:p-5 lg:max-w-300 max-w-90">
          {randomClubs.length === 0 && (
            <p className="col-span-full text-center text-gray-400 py-30">
              該当する団体がありません
            </p>
          )}
          {randomClubs
            .map(club => (
              <div
                key={club.id}
                className="p-2 rounded-xl border-gray-200 dark:border-[#3B4457] border-1 shadow-md hover:shadow-2xl focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-blaack-100 transition duration-300 rounded-lg">
                <Link href={`/clubs/${club.slug}`}>
                  <List
                    imagePath={club.imagePath}
                    name={club.name}
                    dayOfWeek={club.day}
                    location={club.location}
                    explain={club.explain}
                  />
                </Link>

                <Badge
                  groupClass={club.class}
                  setKeyword={setKeyword}
                />
                <Tag
                  groupTag={club.tag}
                  setKeyword={setKeyword}
                />

                {/* <div className="flex gap-1 flex-wrap mt-2">
                  {club.tag.split(", ").map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setKeyword(tag)}
                      className="px-2 py-1 text-xs md:text-sm bg-green-400 transition-colors duration-300 rounded-md hover:bg-green-500"
                    >
                      #{tag}
                    </button>
                  ))}
                </div> */}

              </div>
            ))}
        </div>
      </section>





      <section>
        <p className="pl-5 md:pl-7 lg:pl-30 font-bold text-2xl">
          <FontAwesomeIcon icon={faChalkboardUser} className="text-3xl pr-5" />学部ゼミ・自主ゼミ
        </p>
        {randomSemi.length === 0 && (
          <p className="col-span-full text-center text-gray-400 py-30">
            該当するゼミがありません
          </p>
        )}
        <div className="bg-black-500 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-5 m-auto justify-center p-6 md:max-w-300 sm:max-w-150">
          {randomSemi.map((semi) => (
            <Link
              // href={`/semi/${semi.name}`}
              href={"/prepare"}
              key={semi.id}
            >
              <div className="p-3 border-gray-200 dark:border-[#3B4457] border-1 rounded-xl shadow-md hover:shadow-2xl transition duration-300 rounded-md">
                <List
                  imagePath={semi.imagePath}
                  name={semi.name}
                  dayOfWeek={semi.date}
                  explain={semi.explain}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>

  )
}

export function List({ imagePath, name, dayOfWeek, location, explain }: { imagePath: string, name: string, dayOfWeek: string, location?: string, explain: string }) {
  return (
    <>
      <div className="m-auto justify-center text-center item-center">
        <img
          src={imagePath}
          alt={name}
          className="w-full rounded-lg justify-center shadow-md border-1 border-gray-200"
          width={100}
          height={100}
        />
        <h1 className="pt-3 text-xl lg:text-2xl font-bold">
          {name}
        </h1>
        <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-3 text-sm md:text-base py-2">
          <p>
            <FontAwesomeIcon icon={faClock} />{dayOfWeek}
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />{location}
          </p>
        </div>

        <p className="pb-5 text-sm md:text-base lg:text-lg">
          {explain}
        </p>
      </div>

    </>
  )
}