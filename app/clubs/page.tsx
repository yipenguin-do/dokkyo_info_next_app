// このページは部活情報を一覧表示します。
"use client"

import { useState } from "react";
import { clubList } from "../data";
import { List, Badge, Tag } from "../page"
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ClubPage() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="dark:bg-[#0B0F17]">
      <div className="m-auto text-center text-2xl md:text-[30px] pb-20 pt-10">
        <h1>部活・サークル一覧</h1>

        <div className="text-sm text-gray-400 pt-5">
          <p>※現在はデモページです。</p>
          <p>掲載申請は<strong><u><a href="https://www.instagram.com/dokkyo_info?igsh=bnF0dXRtbmUxOG9n&utm_source=qr">Instagram</a></u></strong>のDMにて受け付けています。</p>
        </div>

      </div>
      <div className="px-5">
        <input
          type="text"
          placeholder="探してみる"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="text-sm rounded-lg md:rounded-xl w-full h-fit py-2 md:py-3 pl-4 border-2 border-[#00D2DA] hover:border-sky-400 transition duration-300 focus:outline-none focus:border-sky-3000"
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
      <div className="flex-wrap my-3 pb-5 pl-5">
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
        <div className="bg-black-500 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-5 m-auto justify-center md:max-w-200 md:p-5 lg:max-w-300 max-w-90">
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
              className="p-2 rounded-xl border-gray-200 dark:border-[#3B4457] border-1 shadow-md hover:shadow-2xl focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-blaack-100 transition duration-300 rounded-lg">
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

    </div>
  )
}