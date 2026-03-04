// このページは部活情報を一覧表示します。
"use client"

import { useState } from "react";
import { clubList } from "../data";
import { List } from "../page"
import Link from 'next/link';

export default function ClubPage() {
    const [keyword, setKeyword] = useState("");
    
    return (
        <>
        <section>
            <h1 className="bold">部活・サークル一覧</h1>
            <p>部活・サークル一覧です</p>
        </section>
        <input
          type="text"
          placeholder="検索してみよう！"
          onChange={(e) => setKeyword(e.target.value)}
          className="shadow-md rounded-sm"
        />
        <section>
        <div className="bg-black-500 grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {clubList.filter(
            (club) => club.name.toLowerCase().includes(keyword.toLowerCase())).map(club => (
              <Link
                href={`/clubs/${club.class}`}
                key={club.id}
              >
                <div
                  className='bg-white p-6 rounded-xl shadow-md hover:shadow-2xl focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-blaack-100 transition duration-300 rounded-md'
                >
                  <List
                    imagePath={club.imagePath}
                    name={club.name}
                    date={club.date}
                    explain={club.explain}
                  />
                  {/* `/clubs/${club.class}/${club.uniqueID}`みたいな動的ルーティングを導入したい */}
                </div></Link>
            ))}
        </div>
        </section>
        </>
    )
}