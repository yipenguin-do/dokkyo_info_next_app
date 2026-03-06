"use client"

import { useState, useEffect, use } from "react"
import { clubList, semiList, Club, Semi } from './data'
import Link from 'next/link'
import Image from 'next/image'


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
          className="px-2 py-1 text-xs md:text-sm bg-green-400 transition-colors duration-300 rounded-md hover:bg-green-500"
        >
          #{tag}
        </button>
      ))}
    </div>
  )
}

export function ClubClassify({ clubClass, setKeyword }: ClassCulb ) {
  return (
    <div className="flex flex-wrap gap-1 md:flex">
      {clubClass.split(", ").map((clubClass) => {
        if (clubClass === '非公認') {
          return (
            // <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-red-300 py-1 px-2 rounded-full border-1 border-red-400">{clubClass}</div>
            <button key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-red-300 hover:bg-red-400 transition duration-300 py-1 px-2 rounded-full border-1 border-red-400" onClick={() => setKeyword?.(clubClass)}>{clubClass}</button>
          )
        } else if (clubClass === '公認') {
          return (
            <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-green-400 py-1 px-2 rounded-full border-1 border-green-500">{clubClass}</div>
          )
        } else if (clubClass === '体育系') {
          return (
            <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-blue-400 py-1 px-2 rounded-full border-1 border-blue-500">{clubClass}</div>
          )
        } else if (clubClass === '文化系') {
          return (
            <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-yellow-400 py-1 px-2 rounded-full border-1 border-yellow-500">{clubClass}</div>
          )
        } else if (clubClass === '部活') {
          return (
            <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-lime-400 py-1 px-2 rounded-full border-1 border-lime-500">{clubClass}</div>
          )
        } else if (clubClass === 'サークル') {
          return (
            <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-violet-400 py-1 px-2 rounded-full border-1 border-violet-500">{clubClass}</div>
          )
        } else if (clubClass === '公的団体') {
          return (
            <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-[#3e4957] py-1 px-2 rounded-full border-1 border-[#141b2a]">{clubClass}</div>
          )
        } else if (clubClass === '学生団体' || clubClass === 'インカレ') {
          return (
            <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-taupe-400 py-1 px-2 rounded-full border-1 border-taupe-500">{clubClass}</div>
          )
        } else {
          return (
            <div
              key={clubClass}
              className="text-[10px] text-[#000] w-fit h-fit  bg-white py-1 px-2 rounded-full border-1">
              {clubClass}
            </div>
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
    <>
      <section>
        <h1>textext</h1>
      </section>

      <input
        type="text"
        placeholder="検索してみよう！"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="shadow-md rounded-sm pl-10 border-2 border-sky-200 hover:border-sky-400 focus:outline-none text-sm"
      />

      {/* 複数タグ選択も今後実装予定（useStateを使用） */}

      {keyword && (
        <>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-sm text-gray-500 pr-5">
              # {keyword} で検索中
              {/* { if (keyword === [clubList.tag]) {
                return(<p>{keyword}</p>)
              }} */}
            </span>

            <button
              onClick={() => setKeyword("")}
              className="text-sm text-red-500 hover:underline"
            >
              × 検索解除
            </button>
          </div>
        </>
      )}
      <div className="flex-wrap my-3 pb-10 pl-5">
        <p className="text-sm md:text-base h-fit">人気上位のタグ：</p>
        <div className="gap-2 px-5">
          {["初心者歓迎", "仲良し", "大会あり"].map((tag) => (
            <button
              key={tag}
              onClick={() => setKeyword(tag)}
              className="px-3 py-1 bg-gray-200 rounded-full transition-colors duration-300 hover:bg-green-400 size-auto text-[12px] md:text-base"
            >
              #{tag}
            </button>
          ))}</div>

      </div>
      <section> {/* 部活サークル等の表示。ただし、このページでは４枚程度を表示する。 */}
        <p>部活・サークル</p>
        <div className="bg-black-500 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-5 m-auto justify-center p-6 md:max-w-300 sm:max-w-150">
          {randomClubs.length === 0 && (
            <p className="col-span-full text-center text-gray-400">
              該当する団体がありません
            </p>
          )}
          {randomClubs
            .map(club => (

              // <Link
              //   href={`/clubs/${club.name}`}
              //   key={club.id}
              // >
              //   <div
              //     className='bg-white p-6 rounded-xl shadow-md hover:shadow-2xl focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-blaack-100 transition duration-300 rounded-md'
              //   >
              //     <List
              //       imagePath={club.imagePath}
              //       name={club.name}
              //       date={club.date}
              //       explain={club.explain}
              //     />
              //     <Badge
              //       groupClass={club.class}
              //     />
              //     <div className="flex gap-2 flex-wrap my-3">
              //       {club.tag.split(", ").map((tag) => (
              //         <button
              //           key={tag}
              //           onClick={() => setKeyword(tag)}
              //           className="px-2 py-1 text-sm bg-green-400 rounded-md"
              //         >
              //           #{tag}
              //         </button>
              //       ))}
              //     </div>
              //   </div>
              //   {/* `/clubs/${club.class}/${club.uniqueID}`みたいな動的ルーティングを導入したい */}
              // </Link>
              <div
                key={club.id}
                className="p-3 rounded-xl shadow-md hover:shadow-2xl focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-blaack-100 transition duration-300 rounded-md">
                <Link href={`/clubs/${club.slug}`}>
                  <List
                    imagePath={club.imagePath}
                    name={club.name}
                    date={club.date}
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





      <section> {/* ゼミの表示。部活セクションと同じく、４枚程度を表示 */}
        <div className="bg-black-500 grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {randomSemi.map((semi) => (
            <Link
              href={`/semi/${semi.name}`}
              key={semi.id}
            >
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 rounded-md">
                <List
                  imagePath={semi.imagePath}
                  name={semi.name}
                  date={semi.date}
                  explain={semi.explain}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section> {/* ゼミの表示。部活セクションと同じく、４枚程度を表示 */}

      </section>
      <section></section>


    </>

  )
}

export function List({ imagePath, name, date, explain }: { imagePath: string, name: string, date: string, explain: string }) {
  return (
    <>
      <div className="m-auto justify-center text-center item-center">
        <img
          src={imagePath}
          alt={name}
          className="w-full rounded-lg justify-center item-center shadow-xl"
          width={100}
          height={100}
        />
        <h1 className="pt-10 text-base, md:text-lg lg:text-2xl font-bold">
          {name}
        </h1>
        <p className="pt-2 text-sm md:text-base lg:text-xl">
          {date}
        </p>
        <p className="pb-5 text-sm md:text-base lg:text-xl">
          {explain}
        </p>
      </div>

    </>
  )
}




// "use client"

// import { useState } from "react"
// import { clubList } from './data'
// import Link from 'next/link'

// export default function App() {

//   const [keyword, setKeyword] = useState("");

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* 検索バー */}
//       <div className="max-w-6xl mx-auto px-6 pt-10">
//         <input
//           type="text"
//           placeholder="クラブ名を検索..."
//           onChange={(e) => setKeyword(e.target.value)}
//           className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
//         />
//       </div>

//       {/* クラブ一覧 */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
//         {clubList
//           .filter((club) =>
//             club.name.toLowerCase().includes(keyword.toLowerCase())
//           )
//           .map((club) => (
//             <Link
//               href={`/clubs/${club.class}`}
//               key={club.id}
//               className="group"
//             >
//               <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden">

//                 <List
//                   imagePath={club.imagePath}
//                   name={club.name}
//                   date={club.date}
//                   explain={club.explain}
//                 />

//               </div>
//             </Link>
//           ))}
//       </div>
//     </div>
//   )
// }

// function List({
//   imagePath,
//   name,
//   date,
//   explain
// }: {
//   imagePath: string
//   name: string
//   date: string
//   explain: string
// }) {
//   return (
//     <div>
//       <img
//         src={imagePath}
//         alt={name}
//         className="w-full h-48 object-cover"
//       />

//       <div className="p-5 space-y-2">
//         <h2 className="text-xl font-semibold group-hover:text-violet-600 transition">
//           {name}
//         </h2>

//         <p className="text-sm text-gray-500">
//           {date}
//         </p>

//         <p className="text-gray-700 text-sm line-clamp-3">
//           {explain}
//         </p>
//       </div>
//     </div>
//   )
// }