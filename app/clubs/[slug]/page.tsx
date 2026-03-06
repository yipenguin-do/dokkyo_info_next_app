import { clubList } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { ClubClassify } from "../../page";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function DetailPage({ params }: Props) {
    const { slug } = await params;



    const club = clubList.find(
        (club) => club.slug === slug
    );

    if (!club) {
        return <div>Not Found</div>;
    }

    return (
        <>
            <section className="gap-y-100 py-10">
                <div className="pb-10">
                    <img
                        src={club.imagePath}
                        alt={club.name}
                        className="w-70 md:w-100 lg:w-150 m-auto justify-center rounded-lg shadow-xl"
                    />
                </div>

                <div className="m-auto justify-center item-center w-80 md:w-120 lg:w-170 bg-gray-100 p-7 rounded-lg shadow-2xl">
                    <div className="justify-between pb-2">
                        {/* <div className="text-[10px] text-[#fff] w-fit h-fit  bg-red-300 py-1 px-2 rounded-full border-1 border-red-400">非公認</div> */}
                        {/* したの処理で、データにある文字位よって色を変える機能を別関数で作るのも要検討 */}
                        
                        {/* ClubClassifyの非関数版 */}
                        {/* <div className="flex flex-wrap gap-1 md:flex">
                            {club.class.split(", ").map((clubClass) => {
                                if (clubClass === '非公認') {
                                    return (
                                        <div key={clubClass} className="text-[8px] md:text-[10px] text-[#fff] w-fit h-fit  bg-red-300 py-1 px-2 rounded-full border-1 border-red-400">{clubClass}</div>
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

                        </div> */}

                        <ClubClassify
                            clubClass = {club.class}
                        />
                        {/* <div className="text-sm rounded-full bg-blue-300 text-center py-2 px-3 w-fit">文化系</div> */}
                        <h1 className="text-2xl md:text-3xl item-center pt-2">{club.name}</h1>
                    </div>

                    <p className="text-lg pb-4 pt-5">活動日：{club.date}</p>
                    {/* <p>
                {club.detail.split("\n").map((line, i) => {
                    <span key = {i}>
                        {line}
                        <br />
                    </span>
                })}
            </p> */}
                    <p className="">概要：{club.detail.replace(/\\n/g, "\n")}</p>
                </div>

                <section className="flex m-auto gap-x-10 justify-center pt-10">
                    <a href="instagram"><div className="w-10 h-10 rounded-full bg-red-500"></div></a>
                    <a href="twitter"><div className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-400 transition duration-300"><FontAwesomeIcon icon={faTwitter} className="text-[20px] text-center" color="#fff" /></div></a>

                </section>
            </section>
        </>
    );
}