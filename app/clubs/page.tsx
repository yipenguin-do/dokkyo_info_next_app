// このページは部活情報を一覧表示します。
"use client"

import { useState } from "react";
import { clubList } from "../data";
import { List } from "../page"
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          className="px-2 py-1 border-gray-400 border-2 text-[11px] md:text-[15px] transition-colors duration-300 rounded-lg hover:border-gray-600"
        >
          #{tag}
        </button>
      ))}
    </div>
  )
}

export function ClubClassify({ clubClass, setKeyword }: ClassCulb) {
  return (
    <div className="flex flex-wrap gap-1 md:flex">
      {clubClass.split(", ").map((clubClass) => {
        if (clubClass === '非公認') {
          return (
            // <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-red-300 py-1 px-2 rounded-full border-1 border-red-400">{clubClass}</div>
            <button key={clubClass} className="text-[10px] md:text-[12px] text-[#fff] w-fit h-fit  bg-rose-300 hover:bg-rose-400 transition duration-300 py-1 px-2 rounded-full border-1 border-red-400" onClick={() => setKeyword?.(clubClass)}><b>{clubClass}</b></button>
          )
        } else if (clubClass === '公認') {
          return (
            // <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-green-400 py-1 px-2 rounded-full border-1 border-green-500">{clubClass}</div>
            <button key={clubClass} className="text-[10px] md:text-[12px] text-[#fff] w-fit h-fit  bg-green-400 hover:bg-green-500 transition duration-300 py-1 px-2 rounded-full border-1 border-green-500" onClick={() => setKeyword?.(clubClass)}>{clubClass}</button>

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

export default function ClubPage() {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <div className="pl-5">
        <input
          type="text"
          placeholder="検索してみよう！"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="text-sm rounded-lg w-50 h-fit py-1 pl-2 border-2 border-sky-200 hover:border-sky-400 transition duration-300 focus:outline-none focus:border-sky-3000"
        />
      </div>


      {/* 複数タグ選択も今後実装予定（useStateを使用） */}

      {keyword && (
        <>
          <div className="flex items-center gap-3 mt-2 pl-10 pb-1">
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
      <div className="flex-wrap my-3 pb-10 pl-5">
        {/* <p className="text-sm md:text-base h-fit">人気上位のタグ：</p> */}
        <div className="">
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

      </div>

      <p className="text-lg md:text-xl pl-5 lg:pl-60">
        件数：{clubList.filter((club) => club.name.toLowerCase().includes(keyword.toLowerCase())).length} 件
      </p>

      <section className="pb-40">
        <div className="bg-black-500 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-5 m-auto justify-center p-6 md:max-w-300 sm:max-w-150">
          {clubList.filter((club) => club.name.toLowerCase().includes(keyword.toLowerCase())).length === 0 && (
            <p className="col-span-full text-center text-gray-400 py-30">
              該当する団体がありません
            </p>
          )}
          {clubList.filter(
            (club) => club.name.toLowerCase().includes(keyword.toLowerCase())
          ).map(club => (
              <div
                key={club.id}
                className="p-3 bg-white rounded-xl shadow-md hover:shadow-2xl focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-blaack-100 transition duration-300 rounded-md">
                <Link href={`/clubs/${club.slug}`}>
                  <List
                    imagePath={club.imagePath}
                    name={club.name}
                    date={club.date}
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
      </section >

    </>
  )
}